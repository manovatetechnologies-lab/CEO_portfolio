import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const expertiseAreas = [
  {
    title: 'Business & Operational Leadership',
    problem:
      'Growing organizations often struggle to align strategy with day-to-day execution, resulting in operational inefficiencies and slow decision-making.',
    approach:
      'I work closely with leadership teams to translate business goals into clear operating models, governance structures, and execution frameworks that teams can actually follow.',
    outcome:
      'Improved operational clarity, stronger accountability, and business models that scale without losing control or quality.',
  },
  {
    title: 'Technology Strategy & Digital Platforms',
    problem:
      'Many organizations invest in technology without a clear roadmap, leading to fragmented systems and underutilized platforms.',
    approach:
      'Through Manovate Technologies, I focus on building and guiding technology platforms that are aligned with business needs, scalable by design, and practical to operate.',
    outcome:
      'Technology systems that support long-term growth, improve visibility, and reduce operational friction across teams.',
  },
  {
    title: 'Enterprise Systems & Automation',
    problem:
      'Manual processes and disconnected systems increase cost, error rates, and dependency on individuals rather than processes.',
    approach:
      'I prioritize automation where it delivers real value-streamlining workflows, integrating systems, and reducing operational dependency through structured processes.',
    outcome:
      'More predictable operations, improved efficiency, and teams freed from repetitive manual tasks.',
  },
  {
    title: 'Facility & Infrastructure Management',
    problem:
      'Facility operations demand reliability, compliance, and coordination across people, assets, and vendors-often under tight service-level expectations.',
    approach:
      'As Managing Director at Manha Facility Management, I oversee structured facility operations with a focus on compliance, service quality, workforce management, and risk control.',
    outcome:
      'Stable, compliant, and scalable facility operations across diverse environments and geographies.',
  },
  {
    title: 'Scaling Teams & Organizations',
    problem:
      'As organizations grow, informal processes break down, leading to inconsistency, communication gaps, and execution risk.',
    approach:
      'I help organizations formalize processes, leadership structures, and reporting systems while preserving agility and accountability.',
    outcome:
      'Organizations that scale smoothly with disciplined execution and strong leadership alignment.',
  },
];

const Expertise = () => {
  return (
    <Layout>

      {/* Hero */}
      <section className="section-executive bg-cream">
        <div className="container-executive">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-6">
                What I Do
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="heading-display mb-8">
                Areas of Expertise
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="w-24 h-px bg-gold mb-8" />
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-body-large">
                Over a decade of leadership experience across technology and operations, 
                helping organizations build systems, teams, and processes that scale with 
                clarity, discipline, and execution.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section-executive bg-background">
        <div className="container-executive">
          <div className="space-y-24">
            {expertiseAreas.map((area, index) => (
              <AnimatedSection key={area.title}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-4">
                    <span className="text-sm font-medium tracking-wider uppercase text-gold">
                      0{index + 1}
                    </span>
                    <h2 className="heading-subsection mt-4">
                      {area.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                        The Problem
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {area.problem}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                        The Approach
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {area.approach}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                        The Outcome
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {area.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {index < expertiseAreas.length - 1 && (
                  <div className="mt-16 border-t border-border" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — DARK */}
      <section className="bg-navy-gradient py-24">
        <div className="container-executive text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready to discuss your challenges?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              Let’s discuss how structured leadership, technology, and execution can support 
              your organization’s growth and operational goals.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={2}>
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

    </Layout>
  );
};

export default Expertise;
