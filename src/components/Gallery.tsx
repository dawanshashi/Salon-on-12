import { FadeIn } from './FadeIn';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const images = [
  {
    src: "https://i.ibb.co/1fmzqCy3/649099153-122155724774650054-8650355123436938632-n.jpg",
    alt: "Salon Experience",
    category: "Salon"
  },
  {
    src: "https://i.ibb.co/Z63mDgWn/544908084-122141781836650054-3913855291748536818-n.jpg",
    alt: "Styling Session",
    category: "Style"
  },
  {
    src: "https://i.ibb.co/s9M5M5m3/475738315-122114680046650054-4911441081335216486-n.jpg",
    alt: "Hair Care",
    category: "Care"
  },
  {
    src: "https://i.ibb.co/r28s4zsL/508471637-122133211820650054-4024372250471965979-n.jpg",
    alt: "Color Transformation",
    category: "Color"
  },
  {
    src: "https://i.ibb.co/wNDJjy0L/571014719-122145567482650054-2595969675705740203-n.jpg",
    alt: "Salon Interior",
    category: "Salon"
  },
  {
    src: "https://i.ibb.co/KQ1nrQj/572537132-122145835196650054-8345386284487489953-n.jpg",
    alt: "Precision Cut",
    category: "Cut"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn>
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-medium mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif">Our Work</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-black/60 max-w-md font-light">
              A glimpse into our Wimberley salon. From transformative color to precision cuts and our luxurious space.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div 
                className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer bg-black"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110 animate-bw-color"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Softened gradient overlay to match hero */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 pointer-events-none"></div>
                {/* Gold highlight/glow effect to match hero */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)] mix-blend-screen pointer-events-none"></div>
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center z-10">
                  <span className="text-gold-400 text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
                  <h3 className="text-white font-serif text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.alt}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged gallery view"
              className="max-w-full max-h-full object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
