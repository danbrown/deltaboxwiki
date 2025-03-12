import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ textAlign: "center", position: "relative", maxWidth: "500px", margin: "auto" }}>
      {/* Botão Anterior */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#fff",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
      >
        ❮
      </button>

      {/* Imagem */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderRadius: "10px",
          border: "2px solid transparent",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />

      {/* Botão Próximo */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#fff",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
      >
        ❯
      </button>

      {/* Indicadores de Posição */}
      <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "5px" }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "white" : "rgba(255, 255, 255, 0.5)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;