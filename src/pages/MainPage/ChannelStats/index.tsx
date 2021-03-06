import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { setChannelStats } from "../../../store/actions"
import useChannelHash from "../../../hooks/useChannelHash"

import { State } from "../../../utility/types"

import blocksIcon from "../../../style/images/blocks-icon.svg"
import txnIcon from "../../../style/images/txn-icon.svg"
import style from "./ChannelStats.module.css"

const ChannelStats = () => {
  const dispatch = useDispatch()
  const activeChannelHash = useChannelHash()

  // Get channel stats directly from this component
  // This means the channel provider is loaded and executed before this. More reliable.
  useEffect(() => {
    if (activeChannelHash && activeChannelHash !== "") {
      dispatch(setChannelStats(activeChannelHash.toString()))
    }
  }, [activeChannelHash, dispatch])

  const channelStats = useSelector((state: State) => state.basic.channelStats)
  return (
    <div className={style.table}>
      {/* Blocks */}
      <div className={style.column}>
        <div className={style.icon}>
          <img src={blocksIcon} alt="blocks" />
        </div>
        <div className={style.data}>
          <span id="stats-total-blocks">
            {channelStats.latestBlock
              ? parseInt(
                  channelStats.latestBlock.toString(),
                  10
                ).toLocaleString()
              : "Many"}
          </span>
          <span className={style.label}>Blocks</span>
        </div>
      </div>
      {/* TXNS */}
      <div className={style.column}>
        <div className={style.icon}>
          <img src={txnIcon} alt="transactions" />
        </div>
        <div className={style.data}>
          <span id="stats-total-txns">
            {channelStats.txCount
              ? parseInt(channelStats.txCount.toString(), 10).toLocaleString()
              : "Many"}
          </span>
          <span className={style.label}>Txns</span>
        </div>
      </div>
    </div>
  )
}

export default ChannelStats
