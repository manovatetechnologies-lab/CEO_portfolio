import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Building2, Users, Globe2, Briefcase } from 'lucide-react';

const stats = [
  { value: '2016', label: 'Operations Since' },
  { value: '2+', label: 'Active Companies' },
  { value: 'India & UAE', label: 'Geographic Presence' },
  { value: 'Multi-Sector', label: 'Industry Coverage' },
];

const industries = [
  'Technology & SaaS',
  'Facility Management',
  'Commercial Real Estate',
  'Healthcare Facilities',
  'Industrial & Manufacturing',
  'Corporate & Enterprise Services',
];

const Company = () => {
  return (
    <Layout>

      {/* Hero */}
      <section className="section-executive bg-cream">
        <div className="container-executive">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-large font-medium tracking-[0.2em] uppercase text-gold mb-6">
                The Company
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="heading-display mb-8 text-2x1">
                Manovate Technologies & Manha Facility Management
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="w-24 h-px bg-gold mb-8" />
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-body-large">
                Two organizations built with a shared commitment to execution excellence. 
                Manovate Technologies focuses on digital innovation and enterprise technology, 
                while Manha Facility Management delivers large-scale operational and facility 
                services across India and the UAE.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats — DARK */}
      <section className="bg-navy-gradient py-16">
        <div className="container-executive">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index as 0 | 1 | 2 | 3}>
                <div className="text-center">
                  <p className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm tracking-wide uppercase text-white/70">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-executive bg-background">
        <div className="container-executive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedSection>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  What We Do
                </p>
                <h2 className="heading-section mb-8">
                  Technology & Operational Leadership
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <p className="text-body mb-6">
                  Manovate Technologies enables organizations to design, build, and scale 
                  technology systems that support long-term business growth.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <p className="text-body mb-6">
                  Manha Facility Management delivers integrated facility and operational services 
                  designed for reliability, compliance, and scale.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <p className="text-body">
                  Together, both organizations operate at the intersection of strategy and 
                  execution — transforming ideas into systems and services that deliver 
                  measurable business value.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <AnimatedSection>
                <div className="p-8 bg-cream h-full">
                  <Building2 size={32} className="text-gold mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2">Enterprise</h3>
                  <p className="text-sm text-muted-foreground">
                    Technology platforms and operational systems for growing organizations
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <div className="p-8 bg-cream h-full">
                  <Users size={32} className="text-gold mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2">Mid-Market</h3>
                  <p className="text-sm text-muted-foreground">
                    Scalable solutions for startups and mid-sized businesses
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <div className="p-8 bg-cream h-full">
                  <Globe2 size={32} className="text-gold mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2">Global</h3>
                  <p className="text-sm text-muted-foreground">
                    Active operations across India and the United Arab Emirates
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <div className="p-8 bg-cream h-full">
                  <Briefcase size={32} className="text-gold mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-2">Advisory</h3>
                  <p className="text-sm text-muted-foreground">
                    Leadership-driven decision support and execution oversight
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-executive bg-cream">
        <div className="container-executive">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
                Industries Served
              </p>
              <h2 className="heading-section">
                Deep Sector Expertise
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <div className="p-6 bg-background text-center border border-border hover:border-primary transition-colors duration-300">
                  <p className="font-medium text-sm">{industry}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-executive bg-background">
        <div className="container-executive">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
                Our Team
              </p>
              <h2 className="heading-section mb-8">
                World-Class Talent
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <p className="text-body-large mb-8">
                Our teams consist of experienced professionals across technology, operations, 
                and facility management.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-body">
                We invest heavily in developing people and maintaining a culture of excellence, 
                collaboration, and continuous improvement.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Global Presence — DARK */}
      <section className="section-executive bg-navy-gradient">
        <div className="container-executive">
          <div className="text-center">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
                Global Reach
              </p>
              <h2 className="heading-section heading-on-dark mb-8">
                Local Expertise, Global Impact
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-12">
                With operational presence in India and the United Arab Emirates, we serve 
                clients across multiple cities with strong local execution.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="flex flex-wrap justify-center gap-8 text-white/60">
                <span>Chennai</span>
                <span className="text-gold">•</span>
                <span>Dubai</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Company;
