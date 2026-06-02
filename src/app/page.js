import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SceneShowcaseGrid from "./SceneShowcaseGrid";
import { products } from "../data/products";

const brandProof = [
  "CCTV广告播出",
  "PICC中国人民保险承保",
  "覆盖300+城市服务",
  "5000+专业安装师傅",
];

const awards = [
  {
    title: "MUSE缪斯国际创意奖金奖品牌",
    label: "MUSE AWARDS",
  },
  {
    title: "美国好设计奖金奖品牌",
    label: "AMERICAN GOOD DESIGN",
  },
  {
    title: "法国好设计奖金奖品牌",
    label: "FRENCH DESIGN AWARD",
  },
];

const sceneShowcases = [
  {
    title: "别墅庭院",
    note: "适合生态凉亭、折叠天幕与卷帘联动方案。",
    stats: "庭院方案",
    videoLabel: "庭院项目视频",
    images: [
      { src: "/scene-assets/pergola-1.png", alt: "别墅庭院案例主图" },
      { src: "/scene-assets/pergola-2.png", alt: "别墅庭院结构近景" },
      { src: "/scene-assets/canopy-2.png", alt: "别墅庭院安装细节" },
    ],
  },
  {
    title: "阳台露台",
    note: "更适合展示伸缩遮阳棚、防风卷帘和不同角度实拍。",
    stats: "阳台方案",
    videoLabel: "露台开合视频",
    images: [
      { src: "/scene-assets/awning-1.png", alt: "阳台露台案例主图" },
      { src: "/scene-assets/awning-2.png", alt: "阳台露台结构近景" },
      { src: "/scene-assets/roller-1.png", alt: "阳台露台安装细节" },
    ],
  },
  {
    title: "酒店民宿",
    note: "适合放夜景、休闲区和大跨度外摆空间素材。",
    stats: "民宿方案",
    videoLabel: "民宿场景视频",
    images: [
      { src: "/scene-assets/canopy-1.png", alt: "酒店民宿案例主图" },
      { src: "/scene-assets/canopy-3.png", alt: "酒店民宿结构近景" },
      { src: "/scene-assets/pergola-2.png", alt: "酒店民宿安装细节" },
    ],
  },
  {
    title: "商业外摆",
    note: "更强调品牌感、外摆氛围与高频使用场景。",
    stats: "外摆方案",
    videoLabel: "外摆运营视频",
    images: [
      { src: "/scene-assets/canopy-2.png", alt: "商业外摆案例主图" },
      { src: "/scene-assets/awning-3.png", alt: "商业外摆结构近景" },
      { src: "/scene-assets/canopy-4.png", alt: "商业外摆安装细节" },
    ],
  },
];

const serviceSteps = [
  "需求沟通",
  "上门测量",
  "方案深化",
  "定制生产",
  "安装交付",
  "维护服务",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="top">
        <div className={styles.heroMedia}>
          <video
            className={styles.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/brand-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroScrim} />
        </div>

        <header className={styles.navbar}>
          <div className={styles.brandBlock}>
            <span className={styles.brandName}>尚品森林</span>
            <span className={styles.brandLine}>高端庭院遮阳系统品牌</span>
          </div>
          <nav className={styles.navLinks} aria-label="站点导航">
            <Link href="/products">产品中心</Link>
            <a href="#awards">品牌荣誉</a>
            <a href="#video">品牌视频</a>
            <a href="#contact">联系咨询</a>
          </nav>
        </header>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>SHANGPIN SENLIN</p>
            <h1>为高端庭院与建筑外部空间提供系统化遮阳解决方案</h1>
            <p className={styles.heroLead}>
              尚品森林聚焦电动遮阳棚、智能防风卷帘、折叠天幕与生态凉亭，
              以产品系统、安装体系和品牌背书共同构成品牌官网第一入口。
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.primaryAction}>
                预约方案咨询
              </a>
              <Link href="/products" className={styles.secondaryAction}>
                查看产品系列
              </Link>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <div className={styles.panelEyebrow}>品牌速览</div>
            <div className={styles.panelGrid}>
              <div>
                <strong>300+</strong>
                <span>城市服务覆盖</span>
              </div>
              <div>
                <strong>5000+</strong>
                <span>专业安装师傅</span>
              </div>
              <div>
                <strong>4</strong>
                <span>核心产品系统</span>
              </div>
              <div>
                <strong>3</strong>
                <span>国际设计荣誉</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.proofStrip} aria-label="品牌背书">
        {brandProof.map((item) => (
          <div key={item} className={styles.proofItem}>
            <span className={styles.proofDot} />
            <span>{item}</span>
          </div>
        ))}
      </section>

      <section className={styles.section} id="products">
        <div className={`${styles.sectionHead} ${styles.darkSectionHead}`}>
          <p className={styles.sectionKicker}>产品系统</p>
          <h2>四大核心产品系统</h2>
          <p>
            不按淘宝SKU堆砌信息，而是按品牌解决方案组织，让客户先理解产品层级，再进入具体咨询与成交路径。
          </p>
        </div>

        <div className={styles.productGrid}>
          {products.map((item, index) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className={styles.productCard}
              aria-label={`查看${item.name}详情`}
            >
              <div className={styles.productMedia}>
                <Image
                  src={item.media.cover}
                  alt={item.name}
                  fill
                  sizes="(max-width: 860px) 100vw, (max-width: 1180px) 50vw, 25vw"
                />
                <span className={styles.productIndex}>0{index + 1}</span>
              </div>
              <div className={styles.productBody}>
                <p className={styles.productTag}>{item.system}</p>
                <h3>{item.name}</h3>
                <p className={styles.productSummary}>{item.summary}</p>
                <span className={styles.productLink}>查看详情</span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.sectionAction}>
          <Link href="/products" className={styles.darkAction}>
            进入完整产品中心
          </Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.solutionSection}`}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>场景解决方案</p>
          <h2>面向高端住宅与商业户外空间</h2>
          <p>
            这里先按案例组的方式排版，每个场景同时支持图片和视频。后面你只需要替换成真实成交案例素材，不用再改结构。
          </p>
        </div>

        <SceneShowcaseGrid items={sceneShowcases} />
      </section>

      <section className={`${styles.section} ${styles.awardSection}`} id="awards">
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>国际荣誉</p>
          <h2>奖项、认证与品牌公信力</h2>
          <p>
            国际设计奖、保险承保与全国安装体系共同构成尚品森林的品牌背书区，区别于普通促销型落地页。
          </p>
        </div>

        <div className={styles.awardLayout}>
          <div className={styles.awardHeroCard}>
            <span className={styles.awardHeroLabel}>INTERNATIONAL CERTIFICATION</span>
            <h3>国际权威认证 品质考究</h3>
            <p>
              以设计奖项、产品测试与服务能力证明品牌价值，让首页的信任构建不只停留在口号层面。
            </p>
          </div>

          <div className={styles.awardCards}>
            {awards.map((award) => (
              <article key={award.title} className={styles.awardCard}>
                <p className={styles.awardLabel}>{award.label}</p>
                <h3>{award.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.videoSection}`} id="video">
        <div className={styles.videoCopy}>
          <p className={styles.sectionKicker}>品牌视频</p>
          <h2>首页保留品牌视频入口，而不是只放静态产品图</h2>
          <p>
            当前先使用品牌视频做首页展示位，后续可替换成品牌代言人专属片、冠军合作片或活动短片。
          </p>
          <ul className={styles.videoPoints}>
            <li>适合作为首屏延展内容和品牌形象二次强化</li>
            <li>后续可拆为品牌主片、产品片与案例片三类素材</li>
            <li>可直接替换为正式代言人视频，无需改动版式结构</li>
          </ul>
        </div>

        <div className={styles.videoFrame}>
          <video controls playsInline preload="metadata" className={styles.inlineVideo}>
            <source src="/brand-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className={`${styles.section} ${styles.serviceSection}`}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>服务体系</p>
          <h2>从测量到安装交付的全国服务闭环</h2>
          <p>
            这部分不是附属说明，而是成交关键。建材类客户更关心能否测量、安装、售后和跨城市交付。
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {serviceSteps.map((step, index) => (
            <div key={step} className={styles.serviceCard}>
              <span>0{index + 1}</span>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.contactSection}`} id="contact">
        <div className={styles.contactCard}>
          <div>
            <p className={styles.sectionKicker}>联系咨询</p>
            <h2>先用占位信息跑通官网结构，后续再替换真实联系方式</h2>
            <p className={styles.contactLead}>
              当前页面已预留企业微信、手机号、公司地址与淘宝店铺入口，方便后续替换成正式信息。
            </p>
          </div>

          <div className={styles.contactMeta}>
            <p>咨询热线：400-888-6688</p>
            <p>企业微信：尚品森林官方顾问</p>
            <p>公司地址：浙江省杭州市滨江区品牌展示中心</p>
            <p>淘宝店铺：尚品森林官方旗舰店</p>
          </div>

          <div className={styles.heroActions}>
            <a href="https://shop.example.com" className={styles.primaryAction}>
              进入淘宝店铺
            </a>
            <a href="tel:4008886688" className={styles.secondaryAction}>
              电话咨询
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
