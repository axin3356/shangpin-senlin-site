import Link from "next/link";
import ContactFooter from "../ContactFooter";
import styles from "../secondary-page.module.css";

const partnerCards = [
  {
    label: "Channel",
    title: "区域渠道与城市合作",
    description:
      "适合本地已有客户资源、施工资源或展厅基础，希望把高端遮阳系统纳入自己业务结构的合作方。",
  },
  {
    label: "Project",
    title: "工程项目与空间配套协作",
    description:
      "适合别墅庭院、民宿酒店和商业外摆项目，围绕空间整体效果、结构稳定和交付节奏协同推进。",
  },
  {
    label: "Brand",
    title: "品牌联营与长期共建",
    description:
      "不是一次性拿货关系，而是更适合愿意一起做展示、案例、服务标准和长期市场经营的合作模式。",
  },
];

const partnerSteps = [
  {
    no: "01",
    title: "先说清城市与资源",
    description: "所在城市、团队基础、过往项目类型和现有客户结构，比空谈合作意愿更重要。",
  },
  {
    no: "02",
    title: "判断合作模式",
    description: "根据你是渠道、设计、施工、工程还是民宿运营方，判断更适合联营、配套还是项目制协作。",
  },
  {
    no: "03",
    title: "明确品牌与交付边界",
    description: "合作最怕边界模糊。谁负责前端、谁负责现场、谁负责安装维护，要在前面说透。",
  },
  {
    no: "04",
    title: "从项目试合作开始",
    description: "先从真实项目跑通，再决定是否扩大合作范围，这比一开始谈得很大更稳。",
  },
];

export default function PartnerPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Link href="/" className={styles.backLink}>
          返回首页
        </Link>

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Partner With Us</p>
            <h1>合作不是多一个经销关系，而是一起把高端遮阳系统做成长期业务</h1>
            <p className={styles.heroLead}>
              尚品森林更适合愿意做长期案例、交付标准和区域经营的合作伙伴，而不是只想拿一个低价产品目录的人。
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.primaryAction}>
                提交合作意向
              </a>
              <Link href="/products" className={styles.secondaryAction}>
                查看产品基础
              </Link>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <p className={styles.kicker}>Who Fits</p>
            <h2>更适合这几类合作对象</h2>
            <ul>
              <li>本地渠道、展厅或高端家居配套方，希望补齐户外遮阳品类</li>
              <li>庭院设计、民宿酒店或商业外摆项目，需要稳定产品与交付团队</li>
              <li>愿意做品牌展示、案例共建和长期市场运营的合作伙伴</li>
            </ul>
          </aside>
        </div>
      </section>

      <div className={styles.main}>
        <section className={styles.section}>
          <h2>合作方式要匹配你的资源结构</h2>
          <p className={styles.sectionLead}>
            不是每个人都适合做同一种合作。先看你掌握的是客户、项目、渠道还是施工能力，再谈合作方式，效率会高很多。
          </p>
          <div className={styles.grid}>
            {partnerCards.map((item) => (
              <article key={item.title} className={styles.card}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>建议合作流程</h2>
          <p className={styles.sectionLead}>
            先跑通小范围真实合作，再扩展城市和规模，比一开始谈空泛政策更有效。
          </p>
          <div className={styles.steps}>
            {partnerSteps.map((step) => (
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
            <p className={styles.kicker}>Start With Reality</p>
            <h2>先把城市、资源和合作目标讲清楚，再决定怎么合作</h2>
            <p>如果你有区域客户基础、项目资源或展示渠道，我们可以先从真实项目开始对接。</p>
          </div>
          <a href="#contact" className={styles.primaryAction}>
            洽谈合作模式
          </a>
        </section>
      </div>

      <ContactFooter />
    </main>
  );
}
