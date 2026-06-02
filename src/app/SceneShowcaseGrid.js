"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./page.module.css";
import HomeMediaLightbox from "./HomeMediaLightbox";

export default function SceneShowcaseGrid({ items }) {
  const [activeMedia, setActiveMedia] = useState(null);

  const mediaList = useMemo(() => {
    if (!activeMedia || activeMedia.type !== "image") return [];
    return items[activeMedia.sceneIndex].images;
  }, [activeMedia, items]);

  const openImage = (sceneIndex, imageIndex) =>
    setActiveMedia({
      type: "image",
      sceneIndex,
      imageIndex,
    });

  const openVideo = (sceneIndex) =>
    setActiveMedia({
      type: "video",
      sceneIndex,
      src: "/brand-video.mp4",
    });

  const closeLightbox = () => setActiveMedia(null);

  const showPrev = () =>
    setActiveMedia((current) => {
      if (!current || current.type !== "image") return current;
      const nextIndex = (current.imageIndex - 1 + mediaList.length) % mediaList.length;
      return { ...current, imageIndex: nextIndex };
    });

  const showNext = () =>
    setActiveMedia((current) => {
      if (!current || current.type !== "image") return current;
      const nextIndex = (current.imageIndex + 1) % mediaList.length;
      return { ...current, imageIndex: nextIndex };
    });

  return (
    <>
      <div className={styles.sceneGrid}>
        {items.map((item, sceneIndex) => (
          <article key={item.title} className={styles.sceneShowcase}>
            <div className={styles.sceneHeader}>
              <div>
                <p className={styles.sceneTitle}>{item.title}</p>
                <p className={styles.sceneNote}>{item.note}</p>
              </div>
              <span className={styles.sceneStat}>{item.stats}</span>
            </div>

            <div className={styles.sceneMediaGrid}>
              <button
                className={`${styles.sceneMediaTile} ${styles.sceneMediaWide}`}
                onClick={() => openImage(sceneIndex, 0)}
                aria-label={`查看${item.title}案例主图大图`}
              >
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  sizes="(max-width: 860px) 100vw, (max-width: 1180px) 70vw, 40vw"
                />
                <span>案例主图</span>
              </button>
              <div className={styles.sceneMediaStack}>
                <button
                  className={styles.sceneMediaTile}
                  onClick={() => openImage(sceneIndex, 1)}
                  aria-label={`查看${item.title}结构近景大图`}
                >
                  <Image
                    src={item.images[1].src}
                    alt={item.images[1].alt}
                    fill
                    sizes="(max-width: 860px) 100vw, (max-width: 1180px) 35vw, 18vw"
                  />
                  <span>结构近景</span>
                </button>
                <button
                  className={styles.sceneMediaTile}
                  onClick={() => openImage(sceneIndex, 2)}
                  aria-label={`查看${item.title}安装细节大图`}
                >
                  <Image
                    src={item.images[2].src}
                    alt={item.images[2].alt}
                    fill
                    sizes="(max-width: 860px) 100vw, (max-width: 1180px) 35vw, 18vw"
                  />
                  <span>安装细节</span>
                </button>
              </div>
            </div>

            <button
              className={styles.sceneVideoTile}
              onClick={() => openVideo(sceneIndex)}
              aria-label={`播放${item.videoLabel}`}
            >
              <video
                className={styles.sceneVideo}
                muted
                loop
                playsInline
                preload="none"
                poster={item.images[0].src}
              >
                <source src="/brand-video.mp4" type="video/mp4" />
              </video>
              <span className={styles.sceneVideoBadge}>VIDEO</span>
              <strong>{item.videoLabel}</strong>
              <p>点击放大查看视频</p>
            </button>
          </article>
        ))}
      </div>

      {activeMedia ? (
        <HomeMediaLightbox
          type={activeMedia.type}
          src={
            activeMedia.type === "image"
              ? mediaList[activeMedia.imageIndex].src
              : activeMedia.src
          }
          alt={
            activeMedia.type === "image"
              ? mediaList[activeMedia.imageIndex].alt
              : items[activeMedia.sceneIndex].videoLabel
          }
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
          showNav={activeMedia.type === "image"}
        />
      ) : null}
    </>
  );
}
