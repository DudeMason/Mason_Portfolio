import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import AppEst1 from '../../../images/AppEst1.png';
import AppEst2 from '../../../images/AppEst2.png';
import AppEst3 from '../../../images/AppEst3.png';
import AppEst4 from '../../../images/AppEst4.png';
import AppEst5 from '../../../images/AppEst5.png';
import AppEst6 from '../../../images/AppEst6.png';
import AppEst7 from '../../../images/AppEst7.png';

function PicViewer() {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const images = [
		AppEst7,
		AppEst6,
		AppEst5,
		AppEst4,
		AppEst3,
		AppEst2,
		AppEst1,
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
					style={{margin: "2px"}}
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
