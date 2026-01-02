import AnimatedSection from '@/components/AnimatedSection';

const metrics = [
  { value: '10+ Years', label: 'Leadership Experience' },
  { value: '2', label: 'Organizations Led' },
  { value: 'India & UAE', label: 'Operational Presence' },
  { value: 'Multi-Sector', label: 'Industry Exposure' },
];

const CredibilityStrip = () => {
  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="container-executive">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index as 0 | 1 | 2 | 3}>
              <div className="text-center">
                <p className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-2">
                  {metric.value}
                </p>
                <p className="text-sm tracking-wide uppercase text-white/70">
                  {metric.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
