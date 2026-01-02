import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import heroImage from '@/assets/ceo.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-cream relative overflow-hidden pt-20 lg:pt-24">
      
      {/* EXTRA SIDE PADDING */}
      <div className="container-executive px-6 lg:px-16 xl:px-24 pb-20 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — CONTENT */}
          <div>
            <AnimatedSection>
              <p className="text-l font-medium tracking-[0.2em] uppercase text-gold mb-6">
                Founder & Director
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="font-heading font-semibold text-[3.2rem] leading-tight lg:text-[3.8rem] mb-6">
  Syed Kareem <span className="text-gold">Mynudeen</span>
</h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="font-heading text-lg lg:text-xl text-muted-foreground mb-6">
                Manovate Technologies · Manha Facility Management
              </p>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="w-24 h-px bg-gold my-8" />
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <p className="text-[16px] lg:text-[17px] leading-relaxed text-muted-foreground max-w-2xl mb-12">
  As a Founder & Director, I lead organizations through strategic technology
  and operational transformation, building systems that scale with clarity,
  discipline, and long-term vision. My work spans enterprise platforms,
  operational excellence, and leadership-driven execution—helping businesses
  translate ambition into structured growth, resilient teams, and measurable
  outcomes across markets.
</p>
            </AnimatedSection>

            <AnimatedSection delay={4}>
  <div className="flex items-center gap-6">
                <Link
  to="/about"
  className="btn-primary group px-5 py-2.5 text-[13px] leading-none whitespace-nowrap"
>
  View My Journey
  <ArrowRight
    size={14}
    className="ml-2 transition-transform group-hover:translate-x-1"
  />
</Link>



  <a
  href="https://manovate.co.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-outline group px-5 py-2.5 text-[13px] leading-none whitespace-nowrap"
>
  Company Website
  <ExternalLink size={13} className="ml-2" />
</a>


                <Link
  to="/contact"
  className="text-sm font-medium text-royal-blue hover:text-gold transition-colors whitespace-nowrap"
>
  Let’s Talk
</Link>

              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT — IMAGE (SMALLER & CLEANER) */}
          <AnimatedSection delay={2}>
            <div className="relative max-w-sm lg:max-w-md mx-auto">
              
              {/* IMAGE BOX */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={heroImage}
                  alt="Syed Kareem Mynudeen"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* GOLD FRAME */}
              {/* CENTERED GOLD FRAME */}
<div className="absolute inset-0 border-2 border-gold pointer-events-none" />

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
