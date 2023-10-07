import { useState, useEffect } from "react";

import { Blurhash } from "react-blurhash";
import { BlurhasImageProps } from "../../../types/proptypes/BlurhasImageProps";

const BlurhashImage = ({
  bhSrc,
  bhAlt,
  bhHash,
  bhWidth = 128,
  bhHeight = 128,
}: BlurhasImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsImageLoaded(true);
    img.src = bhSrc;
  }, [bhSrc]);

  return (
    <>
      <Blurhash
        style={{ display: isImageLoaded ? "none" : "inline" }}
        hash={bhHash}
        punch={1}
        width={bhWidth}
        height={bhHeight}
      />
      <img
        style={{ display: isImageLoaded ? "inline" : "none" }}
        src={bhSrc}
        alt={bhAlt}
      />
    </>
  );
};

export default BlurhashImage;
