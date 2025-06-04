import { createContext, useContext, useReducer } from "react";

import { IMAGES_DATA } from "../constants/posts";

const ImagesContext = createContext();

function imagesReducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return [{ ...action.payload, liked: false }, ...state];
    case "TOGGLE_LIKED":
      return state.map((img) =>
        img.src === action.payload ? { ...img, liked: !img.liked } : img,
      );
    default:
      return state;
  }
}

export function ImagesProvider({ children }) {
  const [images, dispatch] = useReducer(imagesReducer, IMAGES_DATA);

  const addPost = (newPost) => {
    dispatch({ type: "ADD_POST", payload: newPost });
  };

  const toggleLiked = (src) => {
    dispatch({ type: "TOGGLE_LIKED", payload: src });
  };

  return (
    <ImagesContext.Provider value={{ images, addPost, toggleLiked }}>
      {children}
    </ImagesContext.Provider>
  );
}

export const useImages = () => {
  const context = useContext(ImagesContext);
  if (!context) throw new Error("useImages must be used inside ImagesProvider");
  return context;
};
