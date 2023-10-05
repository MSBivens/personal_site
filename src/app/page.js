"use client";
import Image from "next/image";
// import styles from "./globals.css";
import styles from "./page.module.css";
import React, { useState } from "react";

import PortfolioComponent from "./components/codePortfolio";
import PodcastsComponent from "./components/podcasts";
import IllorimComponent from "./components/illorim";
import OtherProjectsComponent from "./components/otherProjects";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("portfolio");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <main className={styles.main}>
      <div>
        <Image
          className={styles.headshot}
          src="/me.jpeg"
          alt="image of Michael"
          width={200}
          height={200}
          priority
        />
        <p className={styles.overlayText}>Hello, my name is Michael!</p>
      </div>

      <div className={styles.grid}>
        <button
          class="button-13"
          role="button"
          onClick={() => handleButtonClick("portfolio")}
        >
          Code Portfolio
        </button>
        <button
          class="button-13"
          role="button"
          onClick={() => handleButtonClick("podcasts")}
        >
          Podcasts
        </button>
        <button
          class="button-13"
          role="button"
          onClick={() => handleButtonClick("illorim")}
        >
          Illorim
        </button>
        <button
          class="button-13"
          role="button"
          onClick={() => handleButtonClick("otherProjects")}
        >
          Other Projects
        </button>
      </div>

      <div className={styles.grid}>
        <div className={styles.content}>
          {activeComponent === "portfolio" && <PortfolioComponent />}
          {activeComponent === "podcasts" && <PodcastsComponent />}
          {activeComponent === "illorim" && <IllorimComponent />}
          {activeComponent === "otherProjects" && <OtherProjectsComponent />}
        </div>
      </div>
    </main>
  );
}
