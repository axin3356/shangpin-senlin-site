"use client";

import Image from "next/image";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function HomeMediaLightbox({
  type,
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  showNav,
}) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (showNav && event.key === "ArrowLeft") onPrev();
      if (showNav && event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, showNav]);

  return (
    <div className={styles.homeLightboxOverlay} role="dialog" aria-modal="true" aria-label={alt}>
      <button className={styles.homeLightboxBackdrop} onClick={onClose} aria-label="关闭预览" />
      <div className={styles.homeLightboxShell}>
        <button className={styles.homeLightboxClose} onClick={onClose} aria-label="关闭">
          ×
        </button>
        {showNav ? (
          <button className={styles.homeLightboxArrow} onClick={onPrev} aria-label="上一项">
            ‹
          </button>
        ) : (
          <div />
        )}
        <div className={styles.homeLightboxMedia}>
          {type === "image" ? (
            <Image src={src} alt={alt} fill sizes="100vw" />
          ) : (
            <video className={styles.homeLightboxVideo} controls autoPlay playsInline>
              <source src={src} type="video/mp4" />
            </video>
          )}
        </div>
        {showNav ? (
          <button className={styles.homeLightboxArrow} onClick={onNext} aria-label="下一项">
            ›
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
