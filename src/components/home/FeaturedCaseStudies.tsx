import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const caseStudies = [
  {
    id: 'hrms-platform',
    category: 'Enterprise SaaS',
    title: 'Next-Gen HRMS Platform',
    client: 'Internal Product Initiative',
    result: '70% reduction in HR operational workload',
    description:
      'Designed and led the development of a unified HRMS platform covering payroll, attendance, performance, and compliance with automation-first workflows.',
  },
  {
    id: 'crm-platform',
    category: 'Sales & Growth Technology',
    title: 'Intelligent CRM System',
    client: 'Internal Product Initiative',
    result: 'Improved lead-to-conversion performance',
    description:
      'Built a scalable CRM platform enabling centralized customer data, automated sales pipelines, and real-time analytics for growth-focused teams.',
  },
  {
    id: 'messaging-platform',
    category: 'Communication Infrastructure',
    title: 'Secure Enterprise Messaging App',
    client: 'Internal Product Initiative',
    result: 'Enterprise-grade secure collaboration',
    description:
      'Led the creation of a secure, real-time messaging platform with encryption, role-based access, and administrative control for organizations.',
  },
];

const FeaturedCaseStudies = () => {
  return (
    <section className="section-executive bg-cream">
      <div className="container-executive">

        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
                Featured Work
              </p>
              <h2 className="heading-section">
                Impact Through Execution
              </h2>
            </div>

            <Link
  to="/case-studies"
  className="
    inline-flex items-center gap-2
    px-5 py-2
    text-sm font-medium
    text-royal-blue
    border border-royal-blue/40
    rounded-full
    transition-all duration-300
    hover:border-gold hover:text-gold
    group
  "
>
  View All Case Studies
  <ArrowRight
    size={14}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <AnimatedSection
              key={study.id}
              delay={(index + 1) as 1 | 2 | 3}
            >
              <Link
                to={`/case-studies#${study.id}`}
                className="group block h-full"
              >
                <article className="h-full p-8 bg-background border border-border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium tracking-wider uppercase text-gold">
                      {study.category}
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    />
                  </div>

                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {study.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {study.client}
                  </p>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="pt-4 border-t border-border">
  <p className="text-sm font-medium text-gold mb-4">
    {study.result}
  </p>

  <span
    className="
      inline-flex items-center gap-2
      px-4 py-1.5
      text-sm font-medium
      text-royal-blue
      border border-royal-blue/40
      rounded-full
      transition-all duration-300
      group-hover:border-gold
      group-hover:text-gold
    "
  >
    Read more
    <ArrowRight
      size={14}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </span>
</div>


                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
