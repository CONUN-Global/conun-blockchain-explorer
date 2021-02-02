import { NavLink } from "react-router-dom"

import { useSelector } from "react-redux"

import { BlockDataBlock } from "../../components/MainPage/BlockDataBlock/BlockDataBlock"

import "../../components/MainPage/InterfaceMain/InterfaceMain.css"

import { State } from "../../utility/types"

type Props = {
  mainpage?: true
}

export const BlockActivitySection = (props: Props) => {
  const blockActivityData = useSelector(
    (state: State) => state.block.blockActivityData
  )

  return (
    <section className="section">
      <div className="section-title">
        <NavLink to={props.mainpage ? "/explorer/blocks" : "/explorer"}>
          Recent Blocks
        </NavLink>
      </div>
      <div className="section-block">
        <div className="info-table recent-block-header">
          <div className="table-header-cell"> </div>
          <div className="table-header-cell">Num.</div>
          <div className="table-header-cell">Hash</div>
          <div className="table-header-cell">Time</div>
          <div className="table-header-cell">Txns</div>
        </div>
        {/* Block Activity - Table for each block made - shows hashes, created at, etc*/}
        {blockActivityData.map((i) => (
          <BlockDataBlock key={i.blockhash} data={{ ...i }} />
        ))}
      </div>
    </section>
  )
}
