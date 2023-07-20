import liberchatLogo from "./assets/liberchat-logo.svg"
import liberchatSs from "./assets/liberchat-ss.jpg"

export interface Work {
  title: string
  images: string[]
  desc: string
  url: string
  source: string
}
export const works: Work[] = [{
  title: "LiberChat",
  images: [liberchatSs, liberchatLogo],
  desc: "DenoとFreshをつかった匿名チャットサイト",
  url: "https://liberchat.deno.dev",
  source: "https://github.com/liberluna/liberchat"
}]