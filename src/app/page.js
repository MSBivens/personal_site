// "use client";
import Image from "next/image";
// import styles from "./globals.css";
import styles from "./page.module.css";

export default function Home() {

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
    </main>
  );
}
