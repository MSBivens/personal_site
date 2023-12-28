"use client";
import Image from "next/image";
import styles from "./globals.css";
// import styles from "./page.module.css";

import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePodcasts } from "react-icons/md";


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
                    <div class="flex items-center gap-6 my-3">
                    <a class="icon" href="https://www.linkedin.com/in/msbivens/" target="_blank">
                      <FaLinkedinIn className="text-2xl" />
                    </a>
                    <a class="icon" href="https://twitter.com/MSBivens0x" target="_blank">
                      <FaXTwitter className="text-2xl"/> 
                    </a>
                    <a class="icon" href="https://medium.com/@msbivens0x" target="_blank">
                      <FaMediumM className="text-2xl"/>
                    </a>
                    <a class="icon" href="https://github.com/MSBivens" target="_blank">
                      <FaGithub className="text-2xl"/>
                    </a>
                    <a class="icon" href="https://www.podchaser.com/creators/michael-bivens-107a99qAVv" target="_blank">
                      <MdOutlinePodcasts className="text-2xl"/>
                    </a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}

