import React, { useState, useContext } from "react";

// 1. Create the context
const ImageSizeContext = React.createContext();

// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const ImageSizeProvider = (props) => {
  // store the current user in state at the top level
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100; 

  // sets user object in state, shared via context
  const handleImageSize = (isLarge) => {
    setIsLarge(isLarge);
  };

  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <ImageSizeContext.Provider value={{ isLarge, handleImageSize, imageSize }}>
      {props.children}
    </ImageSizeContext.Provider>
  );
};

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useImageSizeContext = () => {
  return useContext(ImageSizeContext);
};