"use client"

import styles from "./StickyNav.module.css"
import {useEffect, useState} from "react";

export default function StickyNav() {
  const [y, setY] = useState(0);
  const [threshold, setThreshold] = useState(1000);

  useEffect(() => {
    // Function to convert vh to pixels
    function vhToPixels(vh) {
      return Math.round(window.innerHeight / (100 / vh)) - 100;
    }

    // Update the threshold on mount
    setThreshold(
      vhToPixels(100)
    );
    console.log(threshold);

    // Function to handle the scroll event
    function handleScroll() {
      setY(window.scrollY);
    }

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]); // Empty dependency array ensures this effect runs only once on mount


  return (
    <nav
      className={`${styles.nav} w-100 position-sticky d-flex flex-wrap justify-content-center align-items-center bg-light ${y > threshold ? styles['threshold-reach'] : ''}`}>
      <a className={styles.a} href="/">Home</a>
      <a className={styles.a} href="#">Shop</a>
      <a className={styles.a} href="#">Events</a>
      <a className={styles.a} href="#">Games & Equipments</a>
      <a className={styles.a} href="#">Endorsement</a>
      <a className={styles.a} href="#">Contacts</a>
    </nav>
  )
}