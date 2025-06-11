import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const images = Object.entries(
  import.meta.glob('../images/photo*.{jpg,png}', { eager: true, import: 'default' })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, value]) => value);

const PhotoPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    console.log(currentIndex);
    console.log(images.length);
  };


  return (
    <div className="min-h-screen bg-fernGreen text-magnolia font-Zain p-3">
      <div className="flex justify-center">
        <Link to="/" 
            className="hover:text-calPolyGreen text-4xl font-bold mt-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
            Christian Wylie
        </Link>
      </div>
      {/* Fading in line */}
      <div className="h-px w-80 bg-magnolia mx-auto opacity-0 animate-fade-in my-3"
        style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
      ></div>
      <div className="flex justify-center text-3xl font-bold opacity-0 animate-fade-in"
        style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Photography and Artwork
      </div>
      
      <div className="flex justify-center mt-6">
        <div className="relative w-full max-w-2xl flex items-center justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="max-h-[32rem] object-contain rounded-lg shadow-lg"
          />
          <button
            onClick={prevImage}
            className="text-3xl text-magnolia absolute left-0 -translate-x-full top-1/2 transform -translate-y-1/2 bg-opacity-0 px-4 py-2 hover:text-4xl"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="text-3xl text-magnolia absolute right-0 translate-x-full top-1/2 transform -translate-y-1/2 bg-opacity-0 px-4 py-2 hover:text-4xl"
          >
            ›
          </button>
        </div>
      </div>
      
      {/* Dots for current image indicator */}
      <div className="flex justify-center mt-4 space-x-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full shadow-lg cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-600'
            } hover:bg-white transition-colors duration-200`}
          />
        ))}
      </div>
    </div>
  )
}

export default PhotoPage;