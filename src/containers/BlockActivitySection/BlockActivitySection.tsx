import { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"

import BlockDataBlock from "../../components/MainPage/BlockDataBlock/BlockDataBlock"
import PaginationMenu from "../../components/MainPage/PaginationMenu/PaginationMenu"

import TableButton from "../../components/utilityComponents/TableButton/TableButton"

import { BlockTableSkeleton } from "../../ui/Skeletos/MainTableSkeleton/MainTableSkeleton"
import DuplicateSkeleton from "../../ui/Skeletos/DuplicateSkeleton/DuplicateSkeleton"

import { setBlockActivityData, setChannelStats } from "../../store/actions"

import style from "../../style/css/maintables.module.css"

import { State } from "../../utility/types"

const BlockActivitySection = () => {
  const activeChannel = useSelector((state: State) => state.basic.activeChannel)
  const channelStats = useSelector((state: State) => state.basic.channelStats)
  const blockActivityData = useSelector(
    (state: State) => state.block.blockActivityData
  )

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [maxBlock, setMaxBlock] = useState<number | string>(
    channelStats.latestBlock
  )

  const bottomBlock = blockActivityData[9]
  const activeChannelHash = activeChannel.channel_genesis_hash
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const fullPage = history.location.pathname === "/blocks"

  const doPseudoPaginate = (mode: string) => {
    switch (mode) {
      case "first":
        dispatch(setBlockActivityData(activeChannelHash))
        setCurrentPage(1)
        break
      case "next":
        dispatch(setBlockActivityData(activeChannelHash, bottomBlock.blocknum))
        setCurrentPage(currentPage + 1)
        break
      case "prev":
        let target = Number(bottomBlock.id)
        target += 20 // It's 20 because bottomBlock is already -10
        dispatch(setBlockActivityData(activeChannelHash, target))
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1)
        } else {
          setCurrentPage(1)
        }
        break
      default:
        console.log("Pagination action not possible")
        break
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])


  useEffect(() => {
    if (activeChannelHash) {
      dispatch(setChannelStats(activeChannelHash))
      dispatch(setBlockActivityData(activeChannelHash))
      setCurrentPage(1)
    }
  }, [activeChannelHash, dispatch])

  useEffect(() => {
    setMaxBlock(channelStats.latestBlock)
  }, [channelStats.latestBlock])


  return (
    <section
      className={fullPage ? "section-block section-full" : "section-block"}
      id="recent-blocks-table"
    >
      <div className="section-title">
        <span>Recent Blocks</span>
        {fullPage && (
          <PaginationMenu
            currentPage={currentPage}
            max={maxBlock}
            doPseudoPaginate={doPseudoPaginate}
          />
        )}
      </div>
      <div className={style.container}>
        <div className={style.table}>
        {/* Block Activity - Table for each block made - shows hashes, created at, etc*/}
        {blockActivityData.length > 0 ? (
          blockActivityData.map((i) => (
            <BlockDataBlock key={i.blockhash} fullPage={fullPage} data={i} />
          ))
        ) : (
          <DuplicateSkeleton howMany={10}>
            <BlockTableSkeleton />
          </DuplicateSkeleton>
        )}
        </div>
      </div>
      <TableButton
        fullPage={fullPage}
        destination="/blocks"
        htmlID="block-table"
        altLabel="View More Blocks"
      />
    </section>
  )
}

export default BlockActivitySection
