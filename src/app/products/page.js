import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";
import { products } from "../../data/products";

export const metadata = {
  title: "产品中心 | 尚品森林",
  description:
    "查看尚品森林四大核心产品系统，包括电动伸缩遮阳棚、电动防风卷帘、电动折叠天幕与智能生态凉亭系统。",
};

const categoryNotes = [
  {
    title: "遮阳棚系统",
    detail: "面向阳台、庭院和立面遮阳的标准化成交型产品。",
  },
  {
    title: "卷帘系统",
    detail: "适合半开放空间的立面防风、防雨、透景与隐私控制。",
  },
  {
    title: "天幕系统",
    detail: "适合大跨度户外空间的可开合遮蔽方案。",
  },
  {
    title: "凉亭系统",
    detail: "兼顾空间体验与景观属性的高端庭院系统产品。",
  },
];

export default function ProductsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>PRODUCTS</p>
          <h1>尚品森林产品中心</h1>
          <p>
            这里不按平台SKU堆信息，而是按产品系统组织。先让客户理解四大核心产品，再进入独立详情页和咨询路径。
          </p>
        </div>
        <div className={styles.heroAside}>
          <span>4大核心系统</span>
          <span>覆盖高端住宅与商业户外空间</span>
          <span>支持私域咨询与淘宝成交衔接</span>
        </div>
      </section>

      <section className={styles.categoryPanel}>
        {categoryNotes.map((item) => (
          <article key={item.title} className={styles.categoryCard}>
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHead}>
          <p className={styles.kicker}>核心产品</p>
          <h2>四款独立详情页产品</h2>
        </div>

        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <article key={product.slug} className={styles.productCard}>
              <div className={styles.productMedia}>
                <Image
                  src={product.media.cover}
                  alt={product.name}
                  fill
                  sizes="(max-width: 820px) 100vw, 50vw"
                />
                <span className={styles.index}>0{index + 1}</span>
              </div>
              <div className={styles.productBody}>
                <p className={styles.tag}>{product.system}</p>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <div className={styles.cardFoot}>
                  <span>{product.scenes[0]}</span>
                  <Link href={`/products/${product.slug}`}>查看详情</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
