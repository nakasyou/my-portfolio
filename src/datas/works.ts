import liberchatLogo from "./assets/liberchat-logo.svg"
import liberchatSs from "./assets/liberchat-ss.jpg"
import nakasyouSiteSs from "./assets/nakasyou-site-ss.png"
import resxSs from "./assets/resx-ss.png"
import estoyohimeSs from "./assets/estoyohime-ss.png"
import kamiokandeSs from "./assets/kamiokande-3d-ss.png"
import planetsSs from "./assets/planets-ss.png"
import colorPlanetsSs from "./assets/color-planets-ss.png"

export interface Work {
  title: string
  images: string[]
  desc: string
  url: string
  source: string
}
export const works: Work[] = [
  {
    title: "LiberChat",
    images: [liberchatSs, liberchatLogo],
    desc: "DenoとFresh(React), Tailwindをつかった匿名チャットサイト",
    url: "https://liberchat.deno.dev",
    source: "https://github.com/liberluna/liberchat"
  },
  {
    title: "nakasyou's website",
    images: [nakasyouSiteSs],
    desc: "自分のウェブサイトを、Astro/TailwindCSSを用いて作りました。最初はNuxtJSでした。",
    url: "https://nakasyou.github.io",
    source: "https://github.com/nakasyou/nakasyou.github.io",
  },
  {
    title: "Resx",
    images: [resxSs],
    desc: "Denoで、レスポンスを簡単に作成できるライブラリです。",
    url: "https://deno.land/x/resx",
    source: "https://github.com/nakasyou/resx",
  },
  {
    title: "esToyohime",
    images: [estoyohimeSs],
    desc: "Viteの存在を知らなかっとときに作った、Viteのlibモードみたいに開発できるツールです。Denoで作られています。",
    url: "https://deno.land/x/estoyohime",
    source: "https://github.com/nakasyou/esToyohime",
  },
  {
    title: "Super Kamiokande 3D Monitor",
    images: [kamiokandeSs],
    desc: "スーパーカミオカンデのリアルタイムモニタを、3Dにしました。元画像の仕様が変更されたのか、現在はズレています。",
    url: "https://nakasyou.github.io/kamiokande/",
    source: "https://github.com/nakasyou/kamiokande",
  },
  {
    title: "Planets",
    images: [planetsSs],
    desc: "2Dの描画ライブラリ、PixiJSを用いた3Dの星々です。3Dレンダリングの計算は自分で書いています。",
    url: "https://nakasyou.github.io/planets/",
    source: "https://github.com/nakasyou/planets",
  },
  {
    title: "Color Planets",
    images: [colorPlanetsSs],
    desc: "Planetsを改良して、色をつけたり、動かしたりといろいろしました。こちらも、3Dレンダリングの計算は自分で書いています。",
    url: "https://nakasyou.github.io/color-planets/",
    source: "https://github.com/nakasyou/color-planets",
  }
]
