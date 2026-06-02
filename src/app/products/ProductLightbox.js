"use client";

import Image from "next/image";
import { useEffect } from "react";
import styles from "./products.module.css";

export default function ProductLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  title,
}) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className={styles.lightboxOverlay} role="dialog" aria-modal="true" aria-label={title}>
      <button className={styles.lightboxBackdrop} onClick={onClose} aria-label="关闭大图" />
      <div className={styles.lightboxShell}>
        <button className={styles.lightboxClose} onClick={onClose} aria-label="关闭">
          ×
        </button>
        <button className={styles.lightboxArrow} onClick={onPrev} aria-label="上一张">
          ‹
        </button>
        <div className={styles.lightboxImageWrap}>
          <Image
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            fill
            sizes="100vw"
          />
        </div>
        <button className={styles.lightboxArrow} onClick={onNext} aria-label="下一张">
          ›
        </button>
      </div>
    </div>
  );
}
