import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const CTASection = () => {
  return (
    <section className="bg-navy-gradient py-24 lg:py-32">
      <div className="container-executive text-center">
        
        <AnimatedSection>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-6">
            Ready to Transform?
          </p>
        </AnimatedSection>

        <AnimatedSection delay={1}>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-white mb-6 max-w-3xl mx-auto">
            Looking to scale your business with strategic technology leadership?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={2}>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Let’s discuss how we can work together to achieve your organization’s most ambitious goals.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={3}>
          <a
  href="https://calendly.com/manovatetechnologies/businessmeet"
  target="_blank"
  rel="noopener noreferrer"
  className="
    relative inline-flex items-center justify-center
    px-10 py-5
    bg-gold text-navy font-semibold tracking-wide
    transition-all duration-300
    hover:bg-white hover:text-navy
    group
    cta-cut-btn
  "
>
  Schedule a Meeting
  <ArrowRight
    size={18}
    className="ml-2 transition-transform group-hover:translate-x-1"
  />
</a>

        </AnimatedSection>

      </div>
    </section>
  );
};

export default CTASection;
