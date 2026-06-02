import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import SceneShowcaseGrid from "./SceneShowcaseGrid";
import ContactFooter from "./ContactFooter";
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
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleIntro}>为</span>
              <span className={styles.heroTitleFocus}>高端庭院与建筑外部空间</span>
              <span className={styles.heroTitleSolution}>提供系统化遮阳解决方案</span>
            </h1>
            <p className={styles.heroLead}>
              尚品森林聚焦电动遮阳棚、智能防风卷帘、折叠天幕与生态凉亭，
              为别墅庭院、露台阳台、酒店民宿和商业外摆提供可测量、可定制、可交付的户外遮阳系统。
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
            从顶面遮阳到立面围合，从单品升级到完整庭院方案。客户先确认空间类型，再选择适合的产品系统和安装方式。
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
            同一套产品在不同空间里的价值并不一样。庭院看重氛围和景观，阳台看重收纳和防风，商业外摆更看重稳定交付和品牌形象。
          </p>
        </div>

        <SceneShowcaseGrid items={sceneShowcases} />
      </section>

      <section className={`${styles.section} ${styles.awardSection}`} id="awards">
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>国际荣誉</p>
          <h2>奖项、认证与品牌公信力</h2>
          <p>
            国际设计奖、保险承保与全国安装体系共同构成尚品森林的品牌背书，让客户在咨询前先建立基本信任。
          </p>
        </div>

        <div className={styles.awardLayout}>
          <div className={styles.awardHeroCard}>
            <span className={styles.awardHeroLabel}>INTERNATIONAL CERTIFICATION</span>
            <h3>国际权威认证 品质考究</h3>
            <p>
              以设计奖项、产品测试与服务能力证明品牌价值，把“高端遮阳”从一句口号落到可核验的品牌资质上。
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
          <h2>用视频呈现结构开合、空间尺度和真实使用感</h2>
          <p>
            户外遮阳产品只看静态图容易误判质感。视频更适合展示开合过程、安装后的空间尺度，以及白天到夜晚的使用变化。
          </p>
          <ul className={styles.videoPoints}>
            <li>展示电动开合与结构收纳，降低客户对尺寸和稳定性的疑问</li>
            <li>让庭院、露台、商业外摆的空间效果更直观</li>
            <li>适合承接品牌片、产品演示片和案例完工视频</li>
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
            遮阳系统不是买回去就能用的标准件。尺寸、墙体条件、排水方向、控制方式和安装交付都需要提前确认。
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

      <ContactFooter />
    </main>
  );
}
