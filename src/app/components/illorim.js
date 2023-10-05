import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

import meImage from "../../../public/me.jpeg"; // Import the image using file path
// import vocalImage from "../public/vocal_image.jpg"; // Import another image
// import mastiffRidersImage from "../public/mastiff_riders_image.jpg"; // Import another image

const IllorimComponent = () => {
  const squaresContent = [
    {
      title: "World Anvil",
      image: meImage,
      link: "https://www.worldanvil.com/w/illorim-aracthius",
    },
    {
      title: "Vocal",
      image: meImage,
      link: "https://vocal.media/authors/michael-bivens-ii17q0xsr",
    },
    {
      title: "Last of the Mastiff Riders",
      image: meImage,
      link: "https://mastiffriders.com",
    },
  ];

  return (
    <div>
      {/* Render squares using the imported images */}
      <div className="squares-container">
        {squaresContent.map((content, index) => (
          <a
            key={index}
            href={content.link}
            target="_blank"
            rel="noopener noreferrer"
            className="square"
          >
            <div className="square-content">
              <Image
                src={content.image}
                alt={`Image for ${content.title}`}
                width={200}
                height={200}
                className={styles.headshot}
                priority
              />
              <span>{content.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default IllorimComponent;
