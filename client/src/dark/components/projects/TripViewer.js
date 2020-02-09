import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Trip1 from '../../../images/Trip1.png';
import Trip2 from '../../../images/Trip2.png';
import Trip3 from '../../../images/Trip3.png';
import Trip4 from '../../../images/Trip4.png';
import Trip5 from '../../../images/Trip5.png';

function PicViewer() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Trip3,
    Trip1,
    Trip2,
    Trip4,
    Trip5,
  ];

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
        />
      )}
    </div>
  );
}
export default PicViewer;
