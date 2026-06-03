import Image from "next/image";
import Link from "next/link";
import ContactFooter from "../ContactFooter";
import styles from "../secondary-page.module.css";

const purchaseChannels = [
  {
    title: "淘宝商城",
    label: "TAOBAO",
    description: "适合直接查看线上款式、客服咨询和下单购买。",
    image: "/purchase-taobao.svg",
    href: "#contact",
  },
  {
    title: "京东商城",
    label: "JD.COM",
    description: "适合偏好平台保障、订单留痕和标准化购买流程的客户。",
    image: "/purchase-jd.svg",
    href: "#contact",
  },
];

const buyCards = [
  {
    label: "Step One",
    title: "先判断空间问题，不先问最低价",
    description:
      "阳台、露台、庭院、民宿外摆和商业外摆，需求根本不一样。先分清遮阳、防风、景观还是围合优先。",
  },
  {
    label: "Step Two",
    title: "再确认适合的产品系统",
    description:
      "伸缩遮阳棚更适合快速顶面遮阳，防风卷帘解决立面围合，折叠天幕适合大跨度，凉亭适合完整空间方案。",
  },
  {
    label: "Step Three",
    title: "最后才谈配置与报价区间",
    description:
      "同样面积，安装方式、控制系统、联动配置和现场施工条件不同，价格就不可能一样。",
  },
];

const buySteps = [
  {
    no: "01",
    title: "发送基础信息",
    description: "提供尺寸、照片、楼层、安装位置和你最在意的问题，例如防晒、防雨、防风或夜间氛围。",
  },
  {
    no: "02",
    title: "初步判断产品方向",
    description: "根据空间条件判断是单品解决，还是遮阳棚、卷帘、灯光和凉亭的组合方案。",
  },
  {
    no: "03",
    title: "确认配置与预算区间",
    description: "再根据控制方式、面料、型材、灯带和安装难度，给出更接近真实落地的配置建议。",
  },
  {
    no: "04",
    title: "安排测量与定制",
    description: "方向确认后再进入上门测量、深化生产和安装安排，避免前面反复推倒重来。",
  },
];

export default function HowToBuyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Link href="/" className={styles.backLink}>
          返回首页
        </Link>

        <div className={styles.purchaseHero}>
          {purchaseChannels.map((channel) => (
            <a key={channel.title} href={channel.href} className={styles.purchaseChannel}>
              <Image
                src={channel.image}
                alt={`${channel.title}购买入口`}
                width={720}
                height={420}
                className={styles.purchaseImage}
                priority
              />
              <div className={styles.purchaseChannelText}>
                <span>{channel.label}</span>
                <h1>{channel.title}</h1>
                <p>{channel.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className={styles.main}>
        <section className={styles.section}>
          <h2>购买前先把空间条件说清楚</h2>
          <p className={styles.sectionLead}>
            平台入口负责承接下单和客服沟通，但高端遮阳系统仍然要先确认尺寸、安装条件、使用场景和配置方向。
          </p>
          <div className={styles.grid}>
            {buyCards.map((item) => (
              <article key={item.title} className={styles.card}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>建议购买流程</h2>
          <p className={styles.sectionLead}>
            先把信息给全，再一步步缩小方案范围，这样报价才更接近真实可落地的结果。
          </p>
          <div className={styles.steps}>
            {buySteps.map((step) => (
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
            <p className={styles.kicker}>Buy With Clarity</p>
            <h2>先选购买入口，再确认哪套产品适合你的现场</h2>
            <p>线上购买可以更快开始沟通，但真正决定方案的，仍然是空间尺寸、安装条件和使用需求。</p>
          </div>
          <a href="#contact" className={styles.primaryAction}>
            咨询购买建议
          </a>
        </section>
      </div>

      <ContactFooter />
    </main>
  );
}
