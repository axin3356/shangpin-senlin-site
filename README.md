# 尚品森林官网

Next.js 16 项目，用于展示尚品森林的品牌官网、产品中心和产品详情页。

## 技术栈

- Next.js 16
- React 19
- App Router

## 本地开发

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://localhost:3000
```

## 主要页面

- `/` 首页
- `/products` 产品中心
- `/products/cassette-retractable-awning`
- `/products/windproof-roller-shade`
- `/products/folding-canopy`
- `/products/eco-pergola`

## 部署

推荐直接部署到 Vercel。

如果在开发阶段通过 `trycloudflare.com` 之类的临时域名访问本地开发服务，项目已经在 `next.config.mjs` 里加入：

```js
allowedDevOrigins: ["*.trycloudflare.com"]
```

这样可以避免开发模式下的跨域资源拦截。

## 代码检查

```bash
npm run lint
npm run build
```
