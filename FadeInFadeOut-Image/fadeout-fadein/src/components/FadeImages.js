import React, { useEffect, useState } from "react";

const images = [
  "https://kaleido-marketplace-files.s3.amazonaws.com/Artwork/129/Primary/f1954c5b-c7b1-4d5c-92a1-923efcf0c7b3.png?AWSAccessKeyId=AKIA335J3WQOUQCFJDVK&Expires=1623883787&Signature=2Z1%2BuLnYI41F4yRHxAUaC8RGk5c%3D",
  "https://kaleido-marketplace-files.s3.amazonaws.com/Artwork/130/Primary/f7e5bf1f-c8a3-4c43-a25f-8b7962d432bf.png?AWSAccessKeyId=AKIA335J3WQOUQCFJDVK&Expires=1623885532&Signature=49VhN3Nqe906rVP07mkATkWWZm0%3D",
  "https://kaleido-marketplace-files.s3.amazonaws.com/Artwork/139/Primary/b62ea330-f77c-4e2f-841c-d9c91ab90729.png?AWSAccessKeyId=AKIA335J3WQOUQCFJDVK&Expires=1623885572&Signature=h4bID5dpHvJpwTML7JtRVRlF1hs%3D",
];

function FadeImages() {
  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const image = new Image();
        image.src = src;
        image.onload = resolve();
        image.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    const images = [
      "https://kaleido-marketplace-files.s3.amazonaws.com/Artwork/129/Primary/f1954c5b-c7b1-4d5c-92a1-923efcf0c7b3.png?AWSAccessKeyId=AKIA335J3WQOUQCFJDVK&Expires=1623883787&Signature=2Z1%2BuLnYI41F4yRHxAUaC8RGk5c%3D",
      "https://kaleido-marketplace-files.s3.amazonaws.com/Artwork/130/Primary/f7e5bf1f-c8a3-4c43-a25f-8b7962d432bf.png?AWSAccessKeyId=AKIA335J3WQOUQCFJDVK&Expires=1623885532&Signature=49VhN3Nqe906rVP07mkATkWWZm0%3D",
      "https://kaleido-marketplace-files.s3.amazonaws.com/Artwork/139/Primary/b62ea330-f77c-4e2f-841c-d9c91ab90729.png?AWSAccessKeyId=AKIA335J3WQOUQCFJDVK&Expires=1623885572&Signature=h4bID5dpHvJpwTML7JtRVRlF1hs%3D",
    ];

    cacheImages(images);
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Images are loading</p>
      ) : (
        <div>
          {images.map((image) => (
            <img
              src={image}
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FadeImages;
