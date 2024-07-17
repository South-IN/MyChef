import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import "@splidejs/splide/css/skyblue";

const Carousel = ({ image, video }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (video) {
      let tempArr = video.split("=");

      const code = tempArr[tempArr.length - 1];
      setUrl(`https://www.youtube.com/embed/${code}`);
    }
  }, [video]);
  return (
    <Splide
      options={{
        type: "loop",
        width: "800px",
        gap: "1rem",
      }}
    >
      <SplideSlide>
        <img
          src={image}
          loading="lazy"
          className="w-100"
          height="400px"
          alt="..."
        />
      </SplideSlide>

      <SplideSlide>
        <iframe className="w-100" width="400px" height="400px" src={url} />
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
