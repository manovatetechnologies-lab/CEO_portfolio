import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Award, Medal, Mic, Handshake, Newspaper } from 'lucide-react';

const awards = [
  {
    year: '2024',
    title: 'Technology Leader of the Year',
    organization: 'Enterprise Tech Awards',
  },
  {
    year: '2023',
    title: 'Top 50 Consulting Firms',
    organization: 'Forbes Business Council',
  },
  {
    year: '2023',
    title: 'Excellence in Digital Transformation',
    organization: 'Global Technology Forum',
  },
  {
    year: '2022',
    title: 'Best Consulting Firm – Technology',
    organization: 'Industry Excellence Awards',
  },
  {
    year: '2021',
    title: 'Innovation in AI Implementation',
    organization: 'Tech Innovation Summit',
  },
];

const certifications = [
  'AWS Solutions Architect Professional',
  'Google Cloud Professional Architect',
  'Microsoft Azure Expert',
  'Certified SAFe® Program Consultant',
  'Project Management Professional (PMP)',
  'TOGAF Enterprise Architecture',
];

const speakingEngagements = [
  {
    event: 'World Economic Forum',
    topic: 'The Future of Enterprise Technology',
    year: '2024',
  },
  {
    event: 'TechCrunch Disrupt',
    topic: 'Scaling with Purpose: Lessons from Hyper-Growth',
    year: '2023',
  },
  {
    event: 'MIT Sloan CIO Symposium',
    topic: 'AI in the Enterprise: Beyond the Hype',
    year: '2023',
  },
  {
    event: 'Gartner IT Symposium',
    topic: 'Digital Transformation Success Factors',
    year: '2022',
  },
];



const partnerships = [
  'Microsoft',
  'AWS',
  'Google Cloud',
  'Salesforce',
  'SAP',
  'ServiceNow',
];

const Achievements = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-executive bg-cream">
        <div className="container-executive">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-6">
                Achievements
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={1}>
              <h1 className="heading-display mb-8">
                Recognition & Impact
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="w-24 h-px bg-gold mb-8" />
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-body-large">
                Recognition from industry peers, media, and partners reflects our 
                commitment to excellence and the impact we've created for our clients.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-executive bg-background">
        <div className="container-executive">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12">
              <Award size={32} className="text-gold" />
              <h2 className="heading-section">Awards & Recognition</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <AnimatedSection key={award.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between p-8 border border-border hover:border-primary transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-medium text-gold">{award.year}</span>
                    <h3 className="font-heading text-xl font-semibold">{award.title}</h3>
                  </div>
                  <span className="text-muted-foreground mt-2 lg:mt-0">{award.organization}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-executive bg-cream">
        <div className="container-executive">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12">
              <Medal size={32} className="text-gold" />
              <h2 className="heading-section">Certifications</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <div className="p-6 bg-background border border-border text-center">
                  <p className="font-medium">{cert}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      {/* Partnerships */}
      <section className="section-executive bg-primary">
        <div className="container-executive">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <Handshake size={32} className="text-gold" />
              <h2 className="heading-section text-primary-foreground">Strategic Partnerships</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="flex flex-wrap justify-center gap-12">
              {partnerships.map((partner) => (
                <span 
                  key={partner}
                  className="text-2xl font-heading font-semibold text-primary-foreground/80 hover:text-gold transition-colors duration-300"
                >
                  {partner}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
