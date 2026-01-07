import { Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">About the Artist</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to my world of art. I'm Shivani, a passionate sketch artist dedicated to transforming
              moments and emotions into timeless pieces of art. Every stroke of my pencil is guided by a deep
              appreciation for detail, authenticity, and the stories that make us human.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With years of experience in creating handmade pencil sketches and portraits, I've had the honor
              of capturing countless precious memories for clients across India. My work is rooted in a
              commitment to excellence, ensuring that every piece I create resonates with emotion and artistry.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe that art is more than just an image—it's a connection, a feeling, a memory preserved
              forever. Whether it's a portrait of a loved one, a couple's cherished moment, or a custom piece
              that holds personal meaning, I pour my heart into every creation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Heart className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Passion for Detail</h3>
                  <p className="text-gray-700">
                    Every sketch is meticulously crafted with attention to the finest details, capturing the
                    essence and emotion of the subject.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Award className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Years of Excellence</h3>
                  <p className="text-gray-700">
                    With extensive experience in portrait art, I bring professionalism and artistic mastery to
                    every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Users className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Touch</h3>
                  <p className="text-gray-700">
                    Each artwork tells a unique story. I work closely with clients to ensure their vision comes
                    to life beautifully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
