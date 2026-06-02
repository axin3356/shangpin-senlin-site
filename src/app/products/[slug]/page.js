import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../products.module.css";
import { products, productsBySlug } from "../../../data/products";
import ProductCaseGallery from "../ProductCaseGallery";
import ProductHeroGallery from "../ProductHeroGallery";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productsBySlug[slug];

  if (!product) {
    return {
      title: "产品不存在 | 尚品森林",
    };
  }

  return {
    title: `${product.name} | 尚品森林`,
    description: product.heroDescription,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = productsBySlug[slug];

  if (!product) {
    notFound();
  }

  const quickFacts = product.specs.slice(0, 4);
  const coreSpecs = product.specs.slice(4, 10);

  return (
    <main className={styles.detailPage}>
      <section className={styles.detailHero}>
        <div className={styles.breadcrumbs}>
          <Link href="/">首页</Link>
          <span>/</span>
          <Link href="/products">产品中心</Link>
          <span>/</span>
          <span>{product.shortName}</span>
        </div>

        <div className={styles.productHeroShell}>
          <ProductHeroGallery productName={product.name} images={product.media.detail} />

          <aside className={styles.productHeroPanel}>
            <p className={styles.kicker}>{product.system}</p>
            <h1>{product.heroTitle}</h1>
            <p className={styles.productHeroLead}>{product.heroDescription}</p>

            <div className={styles.productScenePills}>
              {product.scenes.map((scene) => (
                <span key={scene} className={styles.scenePill}>
                  {scene}
                </span>
              ))}
            </div>

            <div className={styles.quickFactGrid}>
              {quickFacts.map(([label, value]) => (
                <div key={label} className={styles.quickFactCard}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className={styles.actionRow}>
              <a href="#consult" className={styles.primaryAction}>
                获取方案报价
              </a>
              <a href="https://shop.example.com" className={styles.ghostAction}>
                去淘宝查看
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.sectionHead}>
          <p className={styles.kicker}>产品价值</p>
          <h2>这款产品主要解决什么问题</h2>
          <p>
            不讲内部术语，直接回答客户为什么要看下去。先把核心价值讲清楚，再讲参数。
          </p>
        </div>

        <div className={styles.valueGrid}>
          {product.highlights.map((item, index) => (
            <article key={item} className={styles.valueCard}>
              <span className={styles.valueIndex}>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.sectionHead}>
          <p className={styles.kicker}>核心卖点</p>
          <h2>客户最容易理解的卖点表达</h2>
        </div>

        <div className={styles.featureGrid}>
          {product.features.map((item) => (
            <article key={item} className={styles.featureCard}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.specLayout}>
          <div className={styles.specPanel}>
            <p className={styles.kicker}>常用参数</p>
            <h2>先看重点参数和安装方式</h2>
            <div className={styles.specList}>
              {coreSpecs.map(([label, value]) => (
                <div key={label} className={styles.specRow}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.installPanel}>
            <p className={styles.kicker}>服务支持</p>
            <h2>客户真正关心的交付信息</h2>
            <div className={styles.proofGrid}>
              {product.proofStats.map(([label, value]) => (
                <article key={label} className={styles.proofCard}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.sectionHead}>
          <p className={styles.kicker}>案例实拍</p>
          <h2>让客户看到真实落地效果</h2>
          <p>这部分比“已售多少单”更有效，因为客户买的是安装后的效果，不是平台数字。</p>
        </div>

        <ProductCaseGallery
          items={product.caseItems}
          images={product.caseImages}
          productName={product.name}
        />
      </section>

      <section className={styles.detailSection}>
        <div className={styles.sectionHead}>
          <p className={styles.kicker}>客户反馈</p>
          <h2>用精选反馈建立信任</h2>
        </div>

        <div className={styles.feedbackGrid}>
          {product.testimonials.map(([title, body]) => (
            <article key={title} className={styles.feedbackCard}>
              <span>{title}</span>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.sectionHead}>
          <p className={styles.kicker}>常见问题</p>
          <h2>看完页面后最常问的几个问题</h2>
        </div>

        <div className={styles.faqList}>
          {product.faqs.map(([question, answer]) => (
            <article key={question} className={styles.faqCard}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.consultPanel} id="consult">
        <div>
          <p className={styles.kicker}>联系咨询</p>
          <h2>确认尺寸、安装位置和报价后再成交</h2>
          <p>
            这一页的任务不是让客户立刻付钱，而是让客户愿意继续咨询。你后面只需要替换成真实电话、企业微信和淘宝链接。
          </p>
        </div>

        <div className={styles.consultMeta}>
          <p>企业微信：尚品森林官方顾问</p>
          <p>咨询电话：400-888-6688</p>
          <p>淘宝店铺：尚品森林官方旗舰店</p>
        </div>
      </section>
    </main>
  );
}
