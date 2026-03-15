import { FadeIn } from './FadeIn';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    'Women-Owned Salon',
    'Personalized Experience',
    'Local Wimberley Location',
    'Professional Expertise',
    'Client Satisfaction Guaranteed'
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <FadeIn direction="right" className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 bg-black group">
              <img 
                src="https://i.ibb.co/21gsLtN6/648773499-122155724822650054-6939767519576750794-n.jpg" 
                alt="Salon on 12 Stylist" 
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Softened gradient overlay to match hero */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 pointer-events-none"></div>
              {/* Gold highlight/glow effect to match hero */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)] mix-blend-screen pointer-events-none"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 border border-gold-400/30 rounded-full z-0"></div>
          </FadeIn>

          {/* Content Side */}
          <FadeIn direction="left">
            <span className="text-gold-400 text-sm uppercase tracking-[0.2em] font-medium mb-4 block">The Salon on 12 Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Where Luxury Meets <br />
              <span className="italic font-light text-gold-400">Personalized Care</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-light text-lg mb-10">
              <p>
                Salon on 12 is a premier women-owned salon nestled in the heart of Wimberley, Texas. We are known for our dedication to personalized service, expert precision cuts, and beautiful, transformative color work.
              </p>
              <p>
                Our philosophy is simple: we listen. Clients praise Ashley and our team for listening carefully to their needs and delivering results exactly as envisioned. We believe your hair should be a reflection of your unique style and personality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-gold-400 shrink-0" />
                  <span className="text-sm tracking-wide text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 text-gold-400 uppercase tracking-widest text-sm font-medium hover:text-white transition-colors group"
            >
              View Our Work 
              <span className="w-8 h-[1px] bg-gold-400 group-hover:bg-white transition-colors group-hover:w-12 duration-300"></span>
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
