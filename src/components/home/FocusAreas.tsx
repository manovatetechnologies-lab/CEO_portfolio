import { Target, Cpu, TrendingUp, Settings, Lightbulb } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const areas = [
  {
    icon: Target,
    title: 'Strategy',
    description: 'Crafting actionable roadmaps that align technology investments with business objectives.',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Implementing scalable systems that drive efficiency and enable growth.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Identifying and capitalizing on opportunities for sustainable expansion.',
  },
  {
    icon: Settings,
    title: 'Operations',
    description: 'Optimizing processes to maximize productivity and reduce operational friction.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Fostering a culture of continuous improvement and forward-thinking solutions.',
  },
];

const FocusAreas = () => {
  return (
    <section className="section-executive bg-navy">
      <div className="container-executive">
        
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">
              Core Focus
            </p>
            <h2 className="heading-section heading-on-dark">
              Pillars of Leadership Excellence
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {areas.map((area, index) => (
            <AnimatedSection
              key={area.title}
              delay={(index % 5) as 0 | 1 | 2 | 3 | 4}
            >
              <div className="group p-8 bg-royal-blue-dark hover:bg-royal-blue transition-all duration-500 h-full">
                
                <area.icon
                  size={32}
                  className="text-gold mb-6 transition-transform duration-500 group-hover:-translate-y-1"
                />

                <h3 className="font-heading text-xl font-semibold mb-3 text-white">
                  {area.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {area.description}
                </p>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FocusAreas;
