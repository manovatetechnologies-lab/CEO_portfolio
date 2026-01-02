import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
}

const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollReveal();

  const delayClass = delay > 0 ? `animate-reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={cn(
        'animate-reveal',
        isVisible && 'visible',
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
