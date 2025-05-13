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
  // State to handle the modal visibility and selected image
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
    <section id="gallery" className="py-16 px-8 bg-white">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Gallery
      </h2>

      {/* Gallery Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-xl shadow-lg group transform transition duration-300 hover:scale-105"
            onClick={() => openModal(index)} // Open modal when image is clicked
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicked outside image
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when image is clicked
          >
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-w-4xl max-h-[90vh] object-contain rounded-xl"
            />
            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2"
              onClick={prevImage}
            >
              &#8592;
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2"
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
