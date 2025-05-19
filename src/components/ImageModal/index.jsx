import { useState } from 'react';

export const ImageModal = ({ src, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    setZoom(prev => Math.min(Math.max(1, prev + delta), 3));
  };

  const handleMouseMove = (e) => {
    if (zoom > 1) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setPosition({ x, y });
    }
  };

  const transform = {
    transform: `scale(${zoom})`,
    transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
    cursor: zoom > 1 ? 'move' : 'zoom-in'
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div 
        className="relative max-w-full max-h-full"
        onClick={() => zoom === 1 ? setZoom(1.5) : setZoom(1)}
      >
        <img
          src={src}
          alt="Imagen ampliada"
          className="max-w-full max-h-screen"
          style={transform}
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          draggable="false"
        />
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
        aria-label="Cerrar modal"
      >
        &times;
      </button>
      <div className="absolute bottom-4 left-0 right-0 text-center text-white">
        <p>Scroll para hacer zoom • Click para alternar zoom</p>
      </div>
    </div>
  );
};