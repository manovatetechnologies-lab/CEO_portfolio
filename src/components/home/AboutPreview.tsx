import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ClientGrowthGraph from '@/components/ClientGrowthGraph';

const AboutPreview = () => {
  return (
    <section className="section-executive bg-cream">
      <div className="container-executive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          {/* Graph */}
<AnimatedSection>
  <ClientGrowthGraph />
</AnimatedSection>


          {/* Content */}
          <div>
            <AnimatedSection>
              <p className="text-l font-medium tracking-[0.2em] uppercase text-gold mb-4">
                About
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold leading-tight mb-6">
  Turning Vision into Scalable Execution
</h2>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-body-large mb-6">
                With over a decade of leadership experience across technology and operations, 
                I focus on building businesses that scale with clarity, discipline, and purpose. 
                My work spans digital innovation, enterprise systems, and large-scale service 
                delivery across India and the UAE.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-body mb-8">
                As Founder & Director of Manovate Technologies and Managing Director of Manha 
                Facility Management, I operate at the intersection of strategy and execution  
                translating ideas into systems, teams, and outcomes that create long-term value.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <Link
                to="/about"
                className="btn-ghost group p-0 text-royal-blue hover:text-gold"
              >
                Read My Story
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
