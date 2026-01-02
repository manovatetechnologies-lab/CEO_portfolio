import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CredibilityStrip from '@/components/home/CredibilityStrip';
import AboutPreview from '@/components/home/AboutPreview';
import FocusAreas from '@/components/home/FocusAreas';
import FeaturedCaseStudies from '@/components/home/FeaturedCaseStudies';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CredibilityStrip />
      <AboutPreview />
      <FocusAreas />
      <FeaturedCaseStudies />
      <CTASection />
    </Layout>
  );
};

export default Index;
