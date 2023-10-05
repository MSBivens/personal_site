import React from "react";

const IllorimComponent = () => {
  const generateContent = () => {
    const squaresContent = [
      {
        title: "World Anvil",
        imageUrl: "/world_anvil_image.jpg", // Replace with actual image URL
        link: "https://www.worldanvil.com/w/illorim-aracthius",
      },
      {
        title: "Vocal",
        imageUrl: "/vocal_image.jpg", // Replace with actual image URL
        link: "https://vocal.media/authors/michael-bivens-ii17q0xsr",
      },
      {
        title: "Last of the Mastiff Riders",
        imageUrl: "/mastiff_riders_image.jpg", // Replace with actual image URL
        link: "https://mastiffriders.com",
      },
    ];

    return squaresContent.map((content, index) => (
      <a
        key={index}
        href={content.link}
        target="_blank"
        rel="noopener noreferrer"
        className="square"
        style={{ backgroundImage: `url(${content.imageUrl})` }}
      >
        <div className="square-content">
          <span>{content.title}</span>
        </div>
      </a>
    ));
  };

  return (
    <div>
      {/* Call generateSquares function to render three squares */}
      <div className="squares-container">{generateContent()}</div>
    </div>
  );
};

export default IllorimComponent;
