import CustomerServiceWidget from "./CustomerServiceWidget";
import styles from "./site-contact.module.css";

export default function ContactFooter() {
  return (
    <>
      <section className={styles.contactFooter} id="contact">
        <div className={styles.contactInner}>
          <div>
            <p className={styles.kicker}>联系咨询</p>
            <h2>先确认空间条件，再给出产品配置与报价</h2>
            <p className={styles.contactLead}>
              如果你正在规划庭院、露台、阳台或商业外摆空间，可以先提供尺寸、现场照片和使用场景，顾问会给出初步方案方向。
            </p>
            <div className={styles.contactActions}>
              <CustomerServiceWidget variant="inline" />
              <a href="tel:4008886688" className={styles.secondaryAction}>
                电话咨询
              </a>
            </div>
          </div>

          <div className={styles.contactMeta}>
            <p>咨询热线：400-888-6688</p>
            <p>企业微信：尚品森林官方顾问</p>
            <p>公司地址：浙江省杭州市滨江区品牌展示中心</p>
          </div>
        </div>
      </section>
      <CustomerServiceWidget />
    </>
  );
}
