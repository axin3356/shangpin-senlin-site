"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./products.module.css";
import ProductLightbox from "./ProductLightbox";

export default function ProductCaseGallery({ items, images, productName }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  const showNext = () =>
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );

  return (
    <>
      <div className={styles.caseGrid}>
        {items.map((item, index) => (
          <article key={item} className={styles.caseCard}>
            <button
              className={styles.caseVisual}
              onClick={() => setLightboxIndex(index)}
              aria-label={`放大查看${item}`}
            >
              <Image
                src={images[index]}
                alt={item}
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
              />
            </button>
            <div className={styles.caseCopy}>
              <h3>{item}</h3>
              <p>重点查看安装后的遮蔽范围、结构收口和空间比例，判断是否适合你的现场条件。</p>
            </div>
          </article>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <ProductLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          title={`${productName} 案例图`}
        />
      ) : null}
    </>
  );
}
