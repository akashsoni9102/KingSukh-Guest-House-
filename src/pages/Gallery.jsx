import React, { useState } from "react";
import gallery1 from "../assets/gallery/g1.jpg";
import gallery2 from "../assets/gallery/g2.webp";
import gallery3 from "../assets/gallery/g3.webp";
import gallery4 from "../assets/gallery/g4.jpg";
import gallery5 from "../assets/gallery/g5.jpg";
import gallery6 from "../assets/gallery/g6.webp";
import gallery7 from "../assets/gallery/g7.jpg";
import gallery8 from "../assets/gallery/g8.webp";
import gallery9 from "../assets/gallery/g9.jpg";
import gallery10 from "../assets/gallery/g10.jpg";
import gallery11 from "../assets/gallery/g11.jpg";
import gallery12 from "../assets/gallery/g12.jpg";

const galleryImages = [
  { id: 1, src: gallery1, alt: "Deluxe Room" },
  { id: 2, src: gallery2, alt: "Hotel Lobby" },
  { id: 3, src: gallery3, alt: "Scenic View" },
  { id: 4, src: gallery4, alt: "Swimming Pool" },
  { id: 5, src: gallery5, alt: "Dining Area" },
  { id: 6, src: gallery6, alt: "Garden Area" },
  { id: 7, src: gallery7, alt: "Deluxe Room Interior" },
  { id: 8, src: gallery8, alt: "Reception Lounge" },
  { id: 9, src: gallery9, alt: "Balcony View" },
  { id: 10, src: gallery10, alt: "Restaurant Buffet" },
  { id: 11, src: gallery11, alt: "Evening Garden Lights" },
  { id: 12, src: gallery12, alt: "Event Space" },
];

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-16 px-4 sm:px-8 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800">
        Gallery
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-xl shadow-md group cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 sm:h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="w-auto max-w-[90vw] h-auto max-h-[85vh] rounded-xl object-contain"
            />

            {/* Previous Button */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={prevImage}
            >
              &#8592;
            </button>

            {/* Next Button */}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={nextImage}
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
