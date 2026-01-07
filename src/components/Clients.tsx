import { Star, Quote } from 'lucide-react';

export default function Clients() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: "Absolutely loved the detailing and emotions in the sketch. Shivani captured my grandmother's smile perfectly. It's now our most treasured possession.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Rahul & Anjali',
      location: 'Bangalore',
      text: 'A perfect gift that touched our hearts. We ordered a couple portrait for our anniversary and it exceeded all expectations. Truly beautiful work!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Arjun Patel',
      location: 'Pune',
      text: "The level of precision and artistry is phenomenal. Shivani brought my late father's photograph to life in a way that moved our entire family to tears.",
      rating: 5,
    },
    {
      id: 4,
      name: 'Neha Gupta',
      location: 'Delhi',
      text: "I've commissioned multiple sketches and each one has been exceptional. Professional, timely, and incredibly talented. Highly recommend!",
      rating: 5,
    },
  ];

  const stats = [
    { number: '500+', label: 'Artworks Completed' },
    { number: '450+', label: 'Happy Clients' },
    { number: '5 Years', label: 'Experience' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">Happy Clients</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every piece of art tells a story, and these are the voices of those whose stories I've been honored
            to capture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-stone-50 p-6 rounded-lg text-center border border-amber-100"
            >
              <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-stone-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-stone-100"
            >
              <Quote className="text-amber-600 mb-4" size={32} />
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={18} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
