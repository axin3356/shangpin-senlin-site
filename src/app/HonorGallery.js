"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import HomeMediaLightbox from "./HomeMediaLightbox";

export default function HonorGallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % items.length);

  return (
    <>
      <div className={styles.honorGallery}>
        {items.map((item, index) => (
          <button
            key={item.title}
            className={`${styles.honorCard} ${
              item.orientation === "landscape" ? styles.honorCardWide : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`放大查看${item.title}`}
          >
            <span className={styles.honorMedia}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={
                  item.orientation === "landscape"
                    ? "(max-width: 860px) 100vw, 45vw"
                    : "(max-width: 860px) 100vw, 24vw"
                }
              />
            </span>
            {item.orientation === "landscape" ? (
              <span className={styles.honorCopy}>
                <strong>{item.title}</strong>
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <HomeMediaLightbox
          type="image"
          src={items[activeIndex].src}
          alt={items[activeIndex].alt}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          showNav
        />
      ) : null}
    </>
  );
}
