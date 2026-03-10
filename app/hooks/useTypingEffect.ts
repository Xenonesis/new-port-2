import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
}

export function useTypingEffect({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2500,
  initialDelay = 1000,
}: UseTypingEffectOptions) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(initialDelay === 0);

  useEffect(() => {
    if (!isStarted) {
      const startTimer = setTimeout(() => setIsStarted(true), initialDelay);
      return () => clearTimeout(startTimer);
    }

    if (phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];
    let timeoutDelay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      timeoutDelay = pauseDuration;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex(prev => (prev + 1) % phrases.length);
        return;
      }

      const nextCharIndex = charIndex + (isDeleting ? -1 : 1);
      setCharIndex(nextCharIndex);
      setDisplayText(currentPhrase.substring(0, nextCharIndex));
    }, timeoutDelay);

    return () => clearTimeout(timer);
  }, [
    isStarted,
    charIndex,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    initialDelay,
  ]);

  return displayText;
}
