import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-gradient text-white">
      <div className="container-executive py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="font-heading text-3xl font-semibold text-white">
                Syed Kareem <span className="text-gold">Mynudeen</span>
              </span>
            </Link>

            <p className="mt-6 text-white/70 max-w-md leading-relaxed">
              Founder & Director of Manovate Technologies and Managing Director of 
              Manha Facility Management. Building scalable technology and operational 
              systems across India and the UAE.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/syed-kareem-mynudeen"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/80 hover:border-gold hover:text-gold transition-all duration-300"
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </a>

  {/* Email */}
  <a
    href="mailto:syedkareemmynudeen@manovate.co.in"
    className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/80 hover:border-gold hover:text-gold transition-all duration-300"
    aria-label="Email"
  >
    <Mail size={20} />
  </a>

  {/* Download Business Card */}
  <a
    href="/assets/Business-Card.pdf"
    download
    className="inline-flex items-center gap-2 px-5 h-12 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 font-medium tracking-wide"
  >
    Download Card
    <ArrowUpRight size={16} />
  </a>

</div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['About', 'Expertise', 'Case Studies', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chennai Map */}
<div className="lg:col-span-1">
  <h4 className="font-heading text-lg font-semibold mb-6 text-white">
    Location
  </h4>

  <div className="relative w-full h-56 border border-white/20 overflow-hidden">
    <iframe
      title="Chennai Office"
      src="https://www.google.com/maps?q=Chennai,India&output=embed"
      className="w-full h-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <p className="mt-4 text-sm text-white/70">
    Chennai, India
  </p>
</div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} Syed Kareem Mynudeen. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/50">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
