import liberchatLogo from "./assets/liberchat-logo.svg"
import liberchatSs from "./assets/liberchat-ss.jpg"
import nakasyouSiteSs from "./assets/nakasyou-site-ss.png"

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
  }
]
