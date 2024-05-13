import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/photos/Back_ground.jpg",
    // thumbnail: "/photos/Back_ground.jpg",
    // description: "Description for Baby Image",
  },
  {
    original: "/photos/baby.jpg",
    // thumbnail: "/photos/baby.jpg",
    // description: "Description for Baby Image",
  },
  {
    original: "/photos/baby.jpg",
    // thumbnail: "/photos/baby.jpg",
    // description: "Description for Baby Image",
  },
  {
    original: "/photos/BD.jpg",
    // thumbnail: "/photos/BD.jpg",
    // description: "Description for Baby Image",
  },

  // Add more images as needed
];

const MyGallery = () => {
  return (
    <div>
      <ImageGallery items={images}  autoPlay={true} slideInterval={5000} infinite={true}
      showPlayButton={false} 
      showFullscreenButton={false} 
      />
    </div>
  ); 
};

export default MyGallery;
