// import Gist from "react-gist"
import { useEffect, useState } from "react"
import ReactEmbedGist from "react-embed-gist"

import axios from "../../../../axios/axiosinst"
import useChannelHash from "../../../../hooks/useChannelHash"
import { logger } from "../../../../utility/functions"

import style from "./ContractCodeTab.module.css"

type Props = {
  contractName: string | undefined
  latestVersion: number | undefined
  contractVersions: number | undefined
}

const GISTPREFIX = "conunkr/"

const ContractCodeTab = ({
  contractName,
  contractVersions,
  latestVersion,
}: Props) => {
  const activeChannelHash = useChannelHash()

  const [reqVersion] = useState<number | undefined>(latestVersion)
  const [gistID, setGistID] = useState<string>("")

  useEffect(() => {
    if (contractName && reqVersion) {
      axios
        .get(
          `/chaincode/gist-code/${activeChannelHash}/${contractName}/${reqVersion.toString()}`
        )
        .then((response) => {
          logger("Chaincode GIST: ", response.data)
          if (response.data.rows?.code_links) {
            setGistID(response.data.rows?.code_links)
          }
        })
    }
  }, [contractName, reqVersion, activeChannelHash])

  return (
    <div className={style.block}>
      {gistID ? (
        <ReactEmbedGist
          gist={GISTPREFIX + gistID}
          wrapperClass={style.gist}
          contentClass={style.sectio}
        />
      ) : (
        <div>No Code Data</div>
      )}
    </div>
  )
}

export default ContractCodeTab
