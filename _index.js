import Head from 'next/head'
import Header from '/Users/dcarav77/all my apps/pizza-swap-dapp/pages/components.js/Header.js'
import styles from "../styles/Home.module.css"

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
}

export default function Home () {
  return (
    <div className = { style.wrapper}>
      <h2>Header</h2>
      <h2>Main</h2>
      <h2>Transaction History</h2>
      </div>
  )
}
