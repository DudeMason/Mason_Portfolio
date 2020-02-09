import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Janitorial1 from '../../../images/Janitorial1.png';
import Janitorial2 from '../../../images/Janitorial2.png';
import Janitorial3 from '../../../images/Janitorial3.png';
import Janitorial4 from '../../../images/Janitorial4.png';

function PicViewer() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Janitorial4,
    Janitorial3,
    Janitorial1,
    Janitorial2,
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
