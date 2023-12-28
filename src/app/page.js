"use client";
import Image from "next/image";
import styles from "./globals.css";
// import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      {/* <div>
        <Image
          className={styles.headshot}
          src="/me.jpeg"
          alt="image of Michael"
          width={200}
          height={200}
          priority
        />
        <p className={styles.overlayText}>Hello, my name is Michael!</p>
      </div> */}
      
      <div class="flex items-center h-screen w-full justify-center">
      
        <div class="max-w-xs">
            <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto" src="/me.jpeg" alt="John Doe"/>
                </div>
                <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Michael Bivens</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                        <p>Software Dev Student</p>
                    </div>
        
                    <div class="text-center my-3">
                        <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}

