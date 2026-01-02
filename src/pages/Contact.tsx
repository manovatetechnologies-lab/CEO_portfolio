import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("https://portfolio-syed.onrender.com/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const contentType = res.headers.get("content-type");

    if (!res.ok) {
      throw new Error("Server error. Please try again.");
    }

    if (contentType?.includes("application/json")) {
      await res.json(); // optional use
    }

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I’ll be in touch shortly.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });

  } catch (error: unknown) {
    let message = "Please try again later";

    if (error instanceof Error) {
      message = error.message;
    }

    toast({
      title: "Submission Failed",
      description: message,
      variant: "destructive",
    });
  }
};



  return (
    <Layout>
      {/* Hero */}
      <section className="section-executive bg-cream">
        <div className="container-executive">
          <div className="max-w-4xl">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-6">
                Contact
              </p>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <h1 className="heading-display mb-8">
                Let's Discuss Your Next Move
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="w-24 h-px bg-gold mb-8" />
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <p className="text-body-large">
                Whether you’re exploring technology solutions, operational partnerships,
                or leadership collaboration, I welcome meaningful conversations that
                lead to long-term value and execution.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-executive bg-background">
        <div className="container-executive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <AnimatedSection>
                <h2 className="heading-section mb-8">Get in Touch</h2>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <p className="text-body mb-12">
                  I review every inquiry personally. For business discussions related to
                  Manovate Technologies or Manha Facility Management, feel free to reach
                  out using the details below.
                </p>
              </AnimatedSection>

              <div className="space-y-8">
                <AnimatedSection delay={2}>
                  <a
                    href="mailto:syedkareemmynudeen@manovate.co.in"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-medium group-hover:text-primary">
                        syedkareemmynudeen@manovate.co.in
                      </p>
                    </div>
                  </a>
                </AnimatedSection>

                <AnimatedSection delay={2}>
                  <a
                    href="https://www.linkedin.com/in/syed-kareem-mynudeen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                      <Linkedin size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                      <p className="font-medium group-hover:text-primary">
                        /in/syed-kareem-mynudeen
                      </p>
                    </div>
                  </a>
                </AnimatedSection>

                <AnimatedSection delay={3}>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 flex items-center justify-center border border-border">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Office</p>
                      <p className="font-medium">
                        Manovate Technologies &<br />
                        Manha Facility Management<br />
                        Chennai, India · Dubai, UAE
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-border bg-background"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-border bg-background"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Your organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-border bg-background"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-border bg-background resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full group"
                  >
                    {loading ? 'Sending...' : 'Send Inquiry'}
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
