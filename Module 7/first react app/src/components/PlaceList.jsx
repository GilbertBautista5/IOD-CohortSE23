import { places } from "../data/placedata.js";
import { useImageSizeContext } from "../context/ImageSizeContext.jsx";

// see https://react.dev/learn/passing-data-deeply-with-context#challenges

function PlaceList() {

    const listItems = places.map((place) => (
        <li key={place.id} style={{display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '1em'}}>
            <Place place={place} />
        </li>
    ));

    return (
        <div className="PlaceList componentBox">
            <ImageSizeChooser />
            <ul>{listItems}</ul>
        </div>
    )
}

function ImageSizeChooser() {
    const {isLarge, handleImageSize} = useImageSizeContext(); // needs to know current image size and function for updates
    return (
        <label>
            <input type="checkbox" checked={isLarge} onChange={(e) => handleImageSize(e.target.checked)} />
            Use large images
        </label>
    );
}

// this component doesn't need to know any image size info, so instead of making it pass props down to children, we move it to context
function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

// nested child component - needs to know image size so get it from context
function PlaceImage({ place }) {
    const {imageSize} = useImageSizeContext()
    return (
        <img
            src={`https://i.imgur.com/${place.imageId}l.jpg`}
            alt={place.name}
            width={imageSize}
            height={imageSize} referrerPolicy="no-referrer"
        />
    );
}

export default PlaceList