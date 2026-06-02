import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";
import ContactFooter from "../ContactFooter";
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

const seoTopics = [
  {
    title: "电动遮阳棚怎么选",
    body: "阳台、露台和商铺门头更关注收纳后的立面整洁度、伸出距离、抗风稳定性和防雨能力。先确认墙体条件和遮阳面积，再判断是否适合全盒式、曲臂式或伸缩式结构。",
  },
  {
    title: "防风卷帘适合哪些空间",
    body: "防风卷帘适合开放式阳台、阳光房侧立面、酒店走廊和半开放商业空间。它解决的不只是遮阳，也包括风感、轻雨、蚊虫和隐私边界。",
  },
  {
    title: "折叠天幕与生态凉亭的区别",
    body: "折叠天幕更适合大跨度顶面遮蔽，生态凉亭更偏完整庭院系统。前者强调开合范围，后者强调空间围合、景观表现和卷帘灯光联动。",
  },
];

export default function ProductsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <Link href="/" className={styles.homeLink}>
          ← 返回首页
        </Link>
      </div>

      <section className={styles.gridSection}>
        <div className={styles.sectionHead}>
          <p className={styles.kicker}>核心产品</p>
          <h1>按空间问题选择产品</h1>
          <p>
            先看具体产品，再回到底部理解系统差异。这样客户在手机上不需要先读一屏说明，能直接进入详情页判断是否匹配自己的空间。
          </p>
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

      <section className={styles.categoryPanel} aria-label="产品系统说明">
        {categoryNotes.map((item) => (
          <article key={item.title} className={styles.categoryCard}>
            <h2>{item.title}</h2>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <section className={styles.seoSection}>
        <div className={styles.sectionHead}>
          <p className={styles.kicker}>选型参考</p>
          <h2>给搜索用户看的产品判断依据</h2>
          <p>
            这部分承接电动遮阳棚、防风卷帘、折叠天幕、生态凉亭等自然搜索需求，内容服务客户判断，也服务搜索引擎理解页面主题。
          </p>
        </div>

        <div className={styles.seoGrid}>
          {seoTopics.map((topic) => (
            <article key={topic.title} className={styles.seoCard}>
              <h3>{topic.title}</h3>
              <p>{topic.body}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
