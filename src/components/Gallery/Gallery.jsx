import dataImages from "../../assets/dataImages";
import "./index.css";

const Gallery = () => {
  return (
    <div className="Gallery">
      <h2 className="galleryTitle">Gallery</h2>
      {dataImages.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt="image" />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
