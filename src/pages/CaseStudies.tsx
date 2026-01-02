import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'hrms-platform',
    category: 'Enterprise SaaS',
    title: 'Next-Gen HRMS Platform',
    client: 'Internal Product Initiative',
    duration: 'Ongoing',
    problem:
      'Organizations struggled with fragmented HR tools for payroll, attendance, performance management, and compliance. Manual workflows caused inefficiencies, errors, and poor employee experience, especially for growing companies.',
    strategy:
      'The CEO envisioned a unified, scalable HRMS platform designed for mid-to-large enterprises. The strategy focused on modular architecture, automation-first workflows, and deep analytics to support leadership decision-making.',
    execution:
      'The product was architected as a cloud-native SaaS platform with role-based access, automated payroll processing, attendance tracking, performance reviews, and compliance reporting. The CEO personally drove roadmap prioritization and cross-functional alignment.',
    results: [
      '70% reduction in HR operational workload',
      'Automated payroll & compliance workflows',
      'Improved employee engagement & transparency',
      'Scalable SaaS-ready architecture',
    ],
  },
  {
    id: 'crm-platform',
    category: 'Sales & Growth Technology',
    title: 'Intelligent CRM System',
    client: 'Internal Product Initiative',
    duration: 'Ongoing',
    problem:
      'Sales teams relied on disconnected tools to manage leads, follow-ups, and customer data, leading to missed opportunities, poor forecasting accuracy, and inconsistent customer experiences.',
    strategy:
      'The CEO initiated the development of an intelligent CRM platform focused on visibility, automation, and growth insights. The goal was to empower sales teams with real-time data and actionable intelligence.',
    execution:
      'The platform integrates lead management, deal pipelines, customer interaction history, and analytics dashboards. AI-driven insights were embedded to improve forecasting, prioritization, and customer engagement.',
    results: [
      'Improved lead-to-conversion ratios',
      'Centralized customer intelligence',
      'Enhanced sales forecasting accuracy',
      'Sales workflow automation at scale',
    ],
  },
  {
    id: 'messaging-platform',
    category: 'Communication Infrastructure',
    title: 'Secure Enterprise Messaging App',
    client: 'Internal Product Initiative',
    duration: 'Ongoing',
    problem:
      'Businesses depended on consumer messaging tools that lacked security, compliance, and organizational control. Sensitive conversations and internal collaboration were exposed to data risks.',
    strategy:
      'The CEO led the vision for a secure, enterprise-grade messaging platform designed for internal teams and business communication, prioritizing privacy, scalability, and control.',
    execution:
      'A real-time messaging system was built with end-to-end encryption, role-based channels, file sharing, and administrative controls. The platform was designed to scale across departments and geographies.',
    results: [
      'Secure internal communication environment',
      'Improved cross-team collaboration',
      'Enterprise-grade data privacy controls',
      'Scalable real-time infrastructure',
    ],
  },
  {
    id: 'food-delivery-platform',
    category: 'Consumer Technology',
    title: 'On-Demand Food Delivery Platform',
    client: 'Internal Product Initiative',
    duration: 'Ongoing',
    problem:
      'Local restaurants and consumers faced challenges with existing delivery platforms, including high commissions, unreliable logistics, and limited customization for regional markets.',
    strategy:
      'The CEO spearheaded the creation of a flexible, scalable food delivery ecosystem that balanced restaurant profitability with fast, reliable customer experience.',
    execution:
      'The platform includes restaurant onboarding, live order tracking, delivery partner management, payment integration, and analytics dashboards. Performance optimization and user experience were key execution priorities.',
    results: [
      'End-to-end food delivery ecosystem',
      'Optimized order & delivery workflows',
      'Scalable multi-city architecture',
      'Improved customer & partner experience',
    ],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-executive bg-cream">
        <div className="container-executive max-w-4xl">
          <AnimatedSection>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-6">
              Case Studies
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <h1 className="heading-display mb-8">
              Impact Through Execution
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <div className="w-24 h-px bg-gold mb-8" />
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <p className="text-body-large">
              Real-world platforms built with clarity, discipline, and execution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => {
        const isDark = index % 2 === 0; // ✅ FIRST DARK

        return (
          <section
            key={study.id}
            id={study.id}
            className={`section-executive ${
              isDark ? 'bg-navy-gradient' : 'bg-background'
            }`}
          >
            <div className="container-executive">
              <AnimatedSection>
                <article className="space-y-12">

                  {/* Header */}
                  <div
                    className={`flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b ${
                      isDark ? 'border-white/20' : 'border-border'
                    }`}
                  >
                    <div>
                      <span className="text-sm font-medium tracking-wider uppercase text-gold">
                        {study.category}
                      </span>
                      <h2
                        className={`heading-section mt-2 ${
                          isDark ? 'text-white' : ''
                        }`}
                      >
                        {study.title}
                      </h2>
                    </div>

                    <div
                      className={`flex gap-8 text-sm ${
                        isDark ? 'text-white/70' : 'text-muted-foreground'
                      }`}
                    >
                      <div>
                        <span
                          className={`font-medium ${
                            isDark ? 'text-white' : 'text-foreground'
                          }`}
                        >
                          Client:
                        </span>{' '}
                        {study.client}
                      </div>
                      <div>
                        <span
                          className={`font-medium ${
                            isDark ? 'text-white' : 'text-foreground'
                          }`}
                        >
                          Duration:
                        </span>{' '}
                        {study.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h3
                          className={`font-heading text-lg font-semibold mb-4 flex items-center gap-2 ${
                            isDark ? 'text-white' : ''
                          }`}
                        >
                          <ArrowUpRight size={18} className="text-gold" />
                          The Challenge
                        </h3>
                        <p
                          className={`leading-relaxed ${
                            isDark ? 'text-white/80' : 'text-muted-foreground'
                          }`}
                        >
                          {study.problem}
                        </p>
                      </div>

                      <div>
                        <h3
                          className={`font-heading text-lg font-semibold mb-4 flex items-center gap-2 ${
                            isDark ? 'text-white' : ''
                          }`}
                        >
                          <ArrowUpRight size={18} className="text-gold" />
                          The Strategy
                        </h3>
                        <p
                          className={`leading-relaxed ${
                            isDark ? 'text-white/80' : 'text-muted-foreground'
                          }`}
                        >
                          {study.strategy}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3
                          className={`font-heading text-lg font-semibold mb-4 flex items-center gap-2 ${
                            isDark ? 'text-white' : ''
                          }`}
                        >
                          <ArrowUpRight size={18} className="text-gold" />
                          The Execution
                        </h3>
                        <p
                          className={`leading-relaxed ${
                            isDark ? 'text-white/80' : 'text-muted-foreground'
                          }`}
                        >
                          {study.execution}
                        </p>
                      </div>

                      <div>
                        <h3
                          className={`font-heading text-lg font-semibold mb-4 flex items-center gap-2 ${
                            isDark ? 'text-white' : ''
                          }`}
                        >
                          <ArrowUpRight size={18} className="text-gold" />
                          The Results
                        </h3>
                        <ul className="space-y-3">
                          {study.results.map((result, i) => (
                            <li
                              key={i}
                              className={`flex items-center gap-3 ${
                                isDark
                                  ? 'text-white/80'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              <span className="w-2 h-2 bg-gold flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </article>
              </AnimatedSection>
            </div>
          </section>
        );
      })}
    </Layout>
  );
};

export default CaseStudies;
