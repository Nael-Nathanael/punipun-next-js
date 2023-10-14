"use client";

import {useState} from "react";
import {BANNER_1, BANNER_2, BANNER_3, BANNER_4, BANNER_5} from "@/helpers/consts";
import styles from "./HeaderBanner.module.css"

export default function HeaderBanner() {
  const [hovered, setHovered] = useState(2)
  const images = [
    BANNER_1,
    BANNER_2,
    BANNER_3,
    BANNER_4,
    BANNER_5
  ]

  return (

    <header className={styles.header}>
      {images.map((e, i) => {
        return (
          <div key={i}
               className={`${hovered === i ? styles.active : styles.nonactive} ${styles.imgcontainer}`}
               onMouseEnter={() => setHovered(i)}>
            <img className={styles.img} alt={e} src={e}/>
            <div className={styles.overlay}/>
          </div>
        )
      })}

      <div className="position-absolute bottom-0 start-50 translate-middle w-100 pb-5 pb-lg-3">
        <h1 className={`${styles.h1} h1`}>
          Clarissa Punipun Fan-Concept Website
        </h1>
        <h1 className={`${styles.h1} h1`}>
          クラリッサ プニプン
        </h1>
      </div>
    </header>
  )
}