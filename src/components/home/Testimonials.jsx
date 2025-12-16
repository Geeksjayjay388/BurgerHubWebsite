// components/home/Testimonials.jsx
import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Food Blogger",
      rating: 5,
      text: "Best burgers in town! The Triple Threat is absolutely insane. Quality ingredients and perfect cooking every time.",
      date: "2 days ago",
      avatar: "AJ"
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Regular Customer",
      rating: 5,
      text: "I've tried every burger place in the city, and BurgerHub stands out. Their customizer is a game changer!",
      date: "1 week ago",
      avatar: "MG"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Food Critic",
      rating: 4.5,
      text: "The attention to detail in every burger is impressive. Fresh ingredients and creative combinations.",
      date: "3 days ago",
      avatar: "DC"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <ThumbsUp className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-bold">CUSTOMER LOVE</span>
          </div>
          <h2 className="text-4xl font-black text-black mb-4">WHAT OUR CUSTOMERS SAY</h2>
          <p className="text-gray-600 text-lg">Join thousands of satisfied burger lovers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-yellow-100 rounded-full flex items-center justify-center font-bold text-black text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonial.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 font-bold text-black">{testimonial.rating}</span>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                <p className="text-gray-700 italic mb-6 pl-4">{testimonial.text}</p>
              </div>

              <div className="text-sm text-gray-500">{testimonial.date}</div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-black text-red-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-black text-red-600 mb-2">15K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-black text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-3xl font-black text-red-600 mb-2">15min</div>
            <div className="text-gray-600">Avg. Wait Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;