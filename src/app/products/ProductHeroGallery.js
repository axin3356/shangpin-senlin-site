"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./products.module.css";
import ProductLightbox from "./ProductLightbox";

export default function ProductHeroGallery({ productName, images }) {
  const galleryImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length
    );
  const showNext = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );
  const previewPrev = (event) => {
    event.stopPropagation();
    setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };
  const previewNext = (event) => {
    event.stopPropagation();
    setActiveIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <>
      <div className={styles.productHeroGallery}>
        <div className={styles.productHeroMain}>
          <button
            className={styles.productHeroMainButton}
            onClick={() => openLightbox(activeIndex)}
            aria-label={`放大查看${productName}主图`}
          >
            <Image
              src={galleryImages[activeIndex]}
              alt={`${productName} 主图`}
              fill
              sizes="(max-width: 960px) 100vw, 56vw"
            />
          </button>
          {galleryImages.length > 1 ? (
            <>
              <span className={styles.heroZoomHint}>点击放大</span>
              <button
                type="button"
                className={`${styles.productHeroNav} ${styles.productHeroPrev}`}
                onClick={previewPrev}
                aria-label="查看上一张"
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.productHeroNav} ${styles.productHeroNext}`}
                onClick={previewNext}
                aria-label="查看下一张"
              >
                ›
              </button>
            </>
          ) : null}
        </div>

        <div className={styles.productHeroThumbs}>
          {galleryImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              className={`${styles.productHeroThumb} ${index === activeIndex ? styles.productHeroThumbActive : ""}`}
              onClick={() => {
                setActiveIndex(index);
                openLightbox(index);
              }}
              aria-label={`切换到${productName}图片 ${index + 1}`}
              aria-pressed={index === activeIndex}
            >
              <Image
                src={src}
                alt={`${productName} 缩略图 ${index + 1}`}
                fill
                sizes="(max-width: 960px) 33vw, 18vw"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null ? (
        <ProductLightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          title={productName}
        />
      ) : null}
    </>
  );
}
