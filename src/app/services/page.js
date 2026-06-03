import Link from "next/link";
import ContactFooter from "../ContactFooter";
import styles from "../secondary-page.module.css";

const serviceCards = [
  {
    label: "Site Survey",
    title: "先看空间条件，不先卖标准答案",
    description:
      "先确认尺寸、墙体、排水、朝向和实际使用频率，再判断是做顶面遮阳、立面防风，还是整体庭院围合。",
  },
  {
    label: "Scheme Depth",
    title: "方案深化到结构与控制方式",
    description:
      "不是只给你一张效果图，而是把结构开合、照明、风感雨感、卷帘联动和安装收口一起想清楚。",
  },
  {
    label: "Delivery",
    title: "安装交付与后续维护闭环",
    description:
      "测量、定制、安装、调试和后续维护都有人接，不做只发货不落地的半成品合作。",
  },
];

const serviceSteps = [
  {
    no: "01",
    title: "需求与现场信息收集",
    description: "提供空间尺寸、现场照片、使用场景和你的预算预期，先把问题定义准确。",
  },
  {
    no: "02",
    title: "结构与配置方案确认",
    description: "确定产品系统、安装方式、面料/型材方向、控制方案和是否需要卷帘或灯光联动。",
  },
  {
    no: "03",
    title: "定制生产与预约安装",
    description: "尺寸确认后进入定制生产，再安排安装时间、进场条件和现场协同事项。",
  },
  {
    no: "04",
    title: "调试交付与售后跟进",
    description: "完成电机、遥控、照明与开合测试，交付后继续跟进维护与使用问题。",
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Link href="/" className={styles.backLink}>
          返回首页
        </Link>

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Service System</p>
            <h1>不是卖一件产品，而是把户外遮阳真正做成可交付方案</h1>
            <p className={styles.heroLead}>
              尚品森林的服务不是简单报价，而是围绕庭院、露台、民宿与商业外摆空间，把测量、深化、定制、安装和售后连成一个完整交付闭环。
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.primaryAction}>
                获取服务方案
              </a>
              <Link href="/products" className={styles.secondaryAction}>
                先看产品系统
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <p className={styles.kicker}>What We Solve</p>
            <h2>客户真正担心的不是有没有产品，而是有没有人把现场做对</h2>
            <ul>
              <li>不同墙体与安装条件是否适合做遮阳棚、卷帘或天幕</li>
              <li>结构开合、灯光控制、风雨感应和空间动线如何协调</li>
              <li>施工进场、安装收口和后期维护有没有明确责任边界</li>
            </ul>
          </aside>
        </div>
      </section>

      <div className={styles.main}>
        <section className={styles.section}>
          <h2>服务不是附属项，而是品牌可信度本身</h2>
          <p className={styles.sectionLead}>
            你卖的是高端遮阳系统，不是廉价通用品。真正拉开差距的往往不是某个型材参数，而是现场判断、方案深化和交付质量。
          </p>
          <div className={styles.grid}>
            {serviceCards.map((item) => (
              <article key={item.title} className={styles.card}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>标准服务流程</h2>
          <p className={styles.sectionLead}>
            把流程讲明白，比一句“欢迎咨询”更有说服力。客户知道每一步会发生什么，才敢继续往下走。
          </p>
          <div className={styles.steps}>
            {serviceSteps.map((step) => (
              <article key={step.no} className={styles.step}>
                <strong>{step.no}</strong>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.kicker}>Next Step</p>
            <h2>先把空间信息发过来，再谈报价和配置</h2>
            <p>你提供尺寸、现场照片和使用场景，我们再给出适合的产品系统和交付方式。</p>
          </div>
          <a href="#contact" className={styles.primaryAction}>
            预约服务咨询
          </a>
        </section>
      </div>

      <ContactFooter />
    </main>
  );
}
