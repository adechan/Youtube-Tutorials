import "./App.css";
import { useEffect, useState } from "react";
import pic1 from "./0_1.jpg";
import pic2 from "./0_2.jpg";
import pic3 from "./0_3.jpg";
import CrossfadeImage from "react-crossfade-image";
import { Image } from "react-image-and-background-image-fade";
import ImageFadeIn from "react-image-fade-in";
import { AnimateOnChange } from "react-animation";

function App() {
  const [images, setImages] = useState([pic1, pic2, pic3]);
  const [shownPictureIndex, setShownPictureIndex] = useState(0);

  useEffect(() => {
    console.log(images);
    console.log("current index", shownPictureIndex);
  }, [images, shownPictureIndex]);

  const handleNext = () => {
    if (shownPictureIndex === images.length - 1) setShownPictureIndex(0);
    else setShownPictureIndex(shownPictureIndex + 1);
  };
  return (
    <div className="App">
      {/* // {images.map((image, index) => ( */}
      {/* //     <img
    //       src={image}
    //       alt=""
    //       className={index === shownPictureIndex ? "show" : "hidden"}
    //       onClick={() => handleNext()}
    //     />
    //   ))} */}
      {/* <AnimateOnChange
        src={images[shownPictureIndex]}
        width="200px"
        height="200px"
        // duration={1000}
        // timingFunction={"ease-out"}
        onClick={() => console.log("hello")}
      /> */}

      <AnimateOnChange animationIn="fadeIn" animationOut="fadeOut">
        <img
          src={images[shownPictureIndex]}
          alt=""
          onClick={() => handleNext()}
        />
      </AnimateOnChange>
    </div>
  );
}

export default App;
