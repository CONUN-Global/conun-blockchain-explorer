import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"

import BlockDetailsTable from "../BlockDetailsTable/BlockDetailsTable"
import DetailsSkeleton from "../../../ui/Skeletos/DetailsSkeleton/DetailsSkeleton"
import { DuplicateSkeleton } from "../../../ui/Skeletos/DuplicateSkeleton/DuplicateSkeleton"

import axios from "../../../axios/axiosinst"

import { State } from "../../../utility/types"
import { logger } from "../../../utility/functions"

interface Props {
  blocknum?: string | null
}

export const BlockDetails = (props: Props) => {
  const [blockData, setBlockData] = useState<any>(null)
  const activeChannel = useSelector((state: State) => state.basic.activeChannel)
  const activeChannelHash = activeChannel.channel_genesis_hash

  let history = useHistory()

  // Force window to scroll up on load
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  // Do GET if provided a blocknum
  useEffect(() => {
    if (props.blocknum) {
      axios
        .get(`/block/transactions/${activeChannelHash}/${props.blocknum}`)
        .then((response) => {
          if (response.data.status === 400 || response.data.status === "400") {
            logger("BLOCK DETAILS: Bad Request: ", "error")
            history.push(`/error?type=bad_block&terms=${props.blocknum}`)
          } else {
            setBlockData(response.data.data)
          }
        })
        .catch((e) => {
          console.error(e)
          history.push(`/error?type=no_response&terms=search`)
        })
    }
  }, [activeChannelHash, props.blocknum, history])

  return (
    <div className="details-table" id="block-details-table">
      <div className="details-table-header">
        <h2>Block Details</h2>
        <div className="details-table-links-box">
          <div
            className="details-table-header-link"
            id="table-back-link"
            onClick={() => history.goBack()}
          >
            <i className="fas fa-arrow-circle-left"></i>
          </div>
          <div className="details-table-header-link">
            <NavLink to="/" id="table-home-link">
              <i className="fas fa-home"></i>
            </NavLink>
          </div>
        </div>
      </div>
      {blockData ? (
        <BlockDetailsTable
          blocknum={blockData.blocknum}
          blksize={blockData.blksize}
          blockhash={blockData.blockhash}
          datahash={blockData.datahash}
          prehash={blockData.prehash}
          txcount={blockData.txcount}
          txhash={blockData.txhash}
        />
      ) : (
        <DuplicateSkeleton howMany={6}>
          <DetailsSkeleton />
        </DuplicateSkeleton>
      )}
    </div>
  )
}
