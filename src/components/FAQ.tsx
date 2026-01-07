import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How can I place an order?',
      answer:
        "Simply reach out to me through the contact form, WhatsApp, or email with your requirements. Share the photograph you'd like me to sketch, preferred size, and any special requests. I'll guide you through the rest of the process.",
    },
    {
      question: 'What details are required for a custom sketch?',
      answer:
        "I need a high-quality, clear photograph of the subject (front-facing works best), the desired size of the artwork, and any specific details or preferences you'd like included. The clearer the photo, the better I can capture every detail.",
    },
    {
      question: 'How long does delivery take?',
      answer:
        "Typical turnaround time is 7-14 days depending on the complexity of the artwork and current orders. Rush orders can be accommodated for an additional fee. I'll provide you with an estimated timeline when you place your order.",
    },
    {
      question: 'Do you ship across India?',
      answer:
        'Yes! I ship to all states across India. Your artwork will be carefully packaged to ensure it arrives in perfect condition. Shipping charges vary based on location and will be communicated during the order process.',
    },
    {
      question: 'Is framing included?',
      answer:
        'Framing can be arranged as an add-on service. I work with quality framers to offer various framing options that complement your artwork. You can also choose to receive the unframed sketch and frame it yourself.',
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer:
        "Your satisfaction is my priority. I share progress updates during the creation process and make revisions as needed. I ensure you're completely happy with your artwork before final delivery.",
    },
    {
      question: 'What sizes do you offer?',
      answer:
        'I offer various sizes ranging from A5 to A3 and custom dimensions upon request. Popular sizes include 8x10 inches, 11x14 inches, and 12x16 inches. Pricing varies based on size and complexity.',
    },
    {
      question: 'Can I order a sketch as a gift?',
      answer:
        "Absolutely! Custom sketches make thoughtful, personal gifts. I can arrange for direct shipping to the recipient and include a special message if you'd like. Many clients order sketches for birthdays, anniversaries, and special occasions.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Everything you need to know about commissioning your artwork</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-stone-100 hover:border-amber-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-amber-50/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
