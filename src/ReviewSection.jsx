import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    review: '“This team has transformed how I handle gift cards. Super professional!”',
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'James Carter',
    review: '“Very efficient and responsive. Highly recommended!”',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Lola Kings',
    review: '“Affordable and reliable. I don’t use any other service anymore.”',
    image: 'https://i.pravatar.cc/150?img=6',
  },
  {
    name: 'Emeka Obi',
    review: '“Great support and fast delivery. Their team is the best.”',
    image: 'https://i.pravatar.cc/150?img=8',
  },
];

const ReviewSection = ({refProp}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div ref={refProp} className="w-full bg-[#cad8e3] py-16 px-4 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-black">What Our Clients Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col gap-4"
            data-aos="fade-up"
            data-aos-delay={`${i * 200}`}
          >
            <Quote className="text-blue-600" size={32} />
            <p className="text-gray-800 leading-relaxed">{t.review}</p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-black">{t.name}</h4>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
