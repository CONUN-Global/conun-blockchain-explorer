import { HeadBar } from "../../ui/HeadBar/HeadBar"
import HeadBlock from "../../ui/HeadBlock/HeadBlock"

import "./Disconnected.css"

export const Disconnected = () => {
  return (
    <>
      <HeadBar />
      <div className="app">
        <HeadBlock />
        <main className="disconnected">
          No channels could be found. Perhaps your server is down?
        </main>
      </div>
    </>
  )
}
