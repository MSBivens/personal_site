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
        <p>Hello, my name is Michael!</p>
      </div>

      <div className={styles.grid}>
        <button class="button-13" role="button">
          <h2>Code Portfolio</h2>
        </button>
        <button class="button-13" role="button">
          <h2>Podcasts</h2>
        </button>
        <button class="button-13" role="button">
          <h2>Illorim</h2>
        </button>
        <button class="button-13" role="button">
          <h2>Other Projects</h2>
        </button>
      </div>
    </main>
  );
}
