"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./site-contact.module.css";

export default function CustomerServiceWidget({
  variant = "fixed",
  className,
  label,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isInline = variant === "inline";

  return (
    <>
      <button
        type="button"
        className={className || (isInline ? styles.primaryAction : styles.serviceButton)}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        {isInline ? null : <span className={styles.serviceButtonIcon}>+</span>}
        {label || (isInline ? "扫码添加客服" : "联系客服")}
      </button>

      {isOpen ? (
        <div className={styles.dialogOverlay} role="dialog" aria-modal="true" aria-labelledby="service-title">
          <button
            type="button"
            className={styles.dialogBackdrop}
            onClick={() => setIsOpen(false)}
            aria-label="关闭客服二维码"
          />
          <div className={styles.dialogPanel}>
            <button
              type="button"
              className={styles.dialogClose}
              onClick={() => setIsOpen(false)}
              aria-label="关闭"
            >
              ×
            </button>
            <h2 id="service-title">扫码添加客服</h2>
            <p>发送现场照片、尺寸和安装位置，客服会先判断适合的产品系统与报价范围。</p>
            <div className={styles.qrWrap}>
              <Image
                src="/customer-service-qr.svg"
                alt="尚品森林客服二维码"
                width={240}
                height={240}
              />
            </div>
            <div className={styles.dialogMeta}>
              <span>咨询热线：400-888-6688</span>
              <span>企业微信：尚品森林官方顾问</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
