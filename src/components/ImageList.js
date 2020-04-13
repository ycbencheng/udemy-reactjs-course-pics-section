import React from "react";

const ImageList = (props) => {
  console.log("props.images", props.images);
  const images = props.images.map((image) => {
    return (
      <img src={image.urls.small} key={image.id} alt={image.description} />
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
