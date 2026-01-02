import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Award, Target, Users, Globe } from 'lucide-react';
import manovateLogo from '@/assets/logo blue.png';
import manhaLogo from '@/assets/logo.png';

const values = [
  {
    icon: Target,
    title: 'Clarity',
    description: 'Clear thinking leads to decisive action. I believe in cutting through complexity to find the essential truth.',
  },
  {
    icon: Award,
    title: 'Execution',
    description: 'Strategy without execution is merely a wish. I prioritize results and hold myself accountable to outcomes.',
  },
  {
    icon: Users,
    title: 'Trust',
    description: 'Long-term partnerships are built on trust. I operate with transparency and integrity in every engagement.',
  },
  {
    icon: Globe,
    title: 'Vision',
    description: 'The future belongs to those who prepare for it. I help organizations see beyond the immediate horizon.',
  },
];

const About = () => {
  return (
    <Layout>

      {/* Hero */}
      <section className="section-executive bg-cream">
        <div className="container-executive">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-l font-medium tracking-[0.2em] uppercase text-gold mb-6">
                About 
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="heading-display mb-8">
                Syed Kareem Mynudeen
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="w-24 h-px bg-gold mb-8" />
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-body-large">
                Founder & Director of Manovate Technologies and Managing Director of Manha Facility Management, 
                leading technology innovation and large-scale operational delivery across India and the UAE.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Story */}
      <section className="section-executive bg-background">
        <div className="container-executive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection>
                <h2 className="heading-section mb-8">
                  The Journey
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <p className="text-body mb-6">
                  My professional journey began in the facility management and operations domain, where I gained 
                  hands-on experience managing large teams, critical infrastructure, and client-facing service delivery 
                  in demanding environments across Dubai.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <p className="text-body mb-6">
                  From 2013 to 2016, I served as General Manager at Mantech Facility Management, overseeing operational 
                  performance, client relationships, and workforce management. This role shaped my understanding of 
                  scale, accountability, and execution in real-world business environments.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <p className="text-body">
                  Building on this foundation, I went on to take leadership roles at Manha Facility Management, 
                  where I currently serve as Managing Director, while also founding Manovate Technologies to focus on 
                  technology-driven business transformation. Today, my work spans both operational excellence and 
                  digital innovation across multiple industries and geographies.
                </p>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection>
                <h2 className="heading-section mb-8">
                  Leadership Philosophy
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <p className="text-body mb-6">
                  I believe that true leadership is about enabling people and systems to perform at their best. 
                  This philosophy guides how I lead organizations, teams, and long-term business initiatives.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <p className="text-body mb-6">
                  Technology is a means to an end, not the end itself. The most sophisticated 
                  system is worthless if it doesn't serve a clear business purpose.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={3}>
                <p className="text-body">
                  Complexity is the enemy of execution. We believe in starting with the fundamentals, 
                  building a solid foundation, and scaling intelligently.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
<section className="section-executive bg-background">
  <div className="container-executive">

    <AnimatedSection>
      <div className="mb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
          Experience
        </p>
        <h2 className="heading-section">
          Leadership & Professional Journey
        </h2>
      </div>
    </AnimatedSection>

    <div className="space-y-16">

      {/* EXPERIENCE ITEM 1 */}
      <AnimatedSection delay={1}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-10 items-start">
          
          {/* LEFT — CONTENT */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Founder & Director — Manovate Technologies
            </h3>

            <p className="text-sm text-muted-foreground mb-3">
              July 2025 – Present · Chennai
            </p>

            <p className="text-body max-w-3xl">
              Founded Manovate Technologies to build scalable technology products and deliver
              strategic digital solutions. Responsible for vision, product strategy, execution
              oversight, and long-term growth initiatives.
            </p>
          </div>

          {/* RIGHT — LOGO CARD (MANOVATE) */}
<div className="flex justify-start lg:justify-center">
  <div
    className="
      w-40 h-40 lg:w-44 lg:h-44
      bg-background
      border border-border
      flex items-center justify-center
      transition-all duration-500
      hover:border-gold
      hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]
    "
  >
    <img
      src={manovateLogo}
      alt="Manovate Technologies"
      className="
        w-50 h-320
        lg:w-50 lg:h-320
        object-contain
      "
    />
  </div>
</div>



        </div>
      </AnimatedSection>
      {/* EXPERIENCE ITEM 2 */}
      <AnimatedSection delay={2}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-10 items-start">

          {/* LEFT — CONTENT */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              Managing Director — Manha Facility Management
            </h3>

            <p className="text-sm text-muted-foreground mb-3">
              December 2016 – Present · Dubai & Chennai
            </p>

            <p className="text-body max-w-3xl">
              Leading Manha Facility Management with a focus on large-scale operational excellence,
              strategic growth, and high-performance service delivery across regions. Responsible
              for governance, client partnerships, workforce scalability, and reliable facility
              management systems.
            </p>
          </div>

          {/* RIGHT — LOGO */}
          {/* RIGHT — LOGO CARD */}
<div className="flex justify-start lg:justify-center">
  <div
    className="
      w-40 h-40 lg:w-44 lg:h-44
      bg-background
      border border-border
      flex items-center justify-center
      transition-all duration-500
      hover:border-gold
      hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]
    "
  >
    <img
  src={manhaLogo}
  alt="Manha Facility Management"
  className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
/>
  </div>
</div>


        </div>
      </AnimatedSection>

      {/* EXPERIENCE ITEM 3 */}
      <AnimatedSection delay={3}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-10 items-start">

          {/* LEFT — CONTENT */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              General Manager — Mantech Facility Management
            </h3>

            <p className="text-sm text-muted-foreground mb-3">
              2013 – 2016 · Dubai
            </p>

            <p className="text-body max-w-3xl">
              Managed large-scale facility operations, workforce planning, and client engagements.
              Played a key role in operational optimization, service quality improvement, and
              on-ground execution leadership.
            </p>
          </div>

          {/* RIGHT — EMPTY (NO LOGO) */}
          <div />

        </div>
      </AnimatedSection>

    </div>
  </div>
</section>


      {/* Values — COLOR FIX ONLY */}
      <section className="section-executive bg-navy-gradient">
        <div className="container-executive">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
                Guiding Principles
              </p>
              <h2 className="heading-section heading-on-dark">
                Values That Drive Results
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <div className="text-center">
                  <value.icon size={40} className="mx-auto text-gold mb-6" />
                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-executive bg-background">
        <div className="container-executive">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="mb-16">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  Vision
                </p>
                <h2 className="heading-section mb-6">
                  Shaping the Future of Enterprise Technology
                </h2>
                <p className="text-body-large">
                  I envision a world where every organization has access to the strategic technology leadership they need to thrive.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <div>
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  Mission
                </p>
                <h2 className="heading-section mb-6">
                  Empowering Transformation
                </h2>
                <p className="text-body-large">
                  Our mission is to empower organizations through strategic technology consulting and disciplined execution.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
