import { Image } from 'lucide-react';

export default function Portfolio() {
  const artworks = [
    {
      id: 1,
      title: 'Custom Pencil Portrait',
      description: 'Handmade with Precision',
      image: 'https://www.freepik.com/free-psd/pencil-drawing-photo-effect_37853167.htm#fromView=search&page=1&position=2&uuid=ab90cfee-930f-42f6-82aa-4736f174f0b2&query=custome+pencil+potraits',
    },
    {
      id: 2,
      title: 'Couple Portrait Sketch',
      description: 'Capturing Love & Connection',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Realistic Pet Portrait',
      description: 'Every Detail Matters',
      image: 'https://images.pexels.com/photos/3571215/pexels-photo-3571215.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'Family Portrait',
      description: 'Preserving Precious Moments',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'Custom Wedding Sketch',
      description: 'A Memory to Treasure',
      image: 'https://images.pexels.com/photos/3957980/pexels-photo-3957980.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'Portrait from Photograph',
      description: 'Life-like Artistry',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">My Work</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each piece is a labor of love, created with precision and passion to capture the essence of every
            moment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
                  <p className="text-sm text-gray-200">{artwork.description}</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{artwork.title}</h3>
                <p className="text-sm text-gray-600">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see your story come to life?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-lg font-medium"
          >
            Commission Your Artwork
          </button>
        </div>
      </div>
    </section>
  );
}
