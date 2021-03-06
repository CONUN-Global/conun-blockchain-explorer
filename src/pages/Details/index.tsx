import { useParams, useLocation } from "react-router-dom"
import BlockDetails from "./BlockDetails"
import TransactionDetails from "./TransactionDetails"

const DetailedViewSection = () => {
  const { pathname } = useLocation()
  const { detail_id } = useParams<Record<string, string | undefined>>()

  let internalComponent = null

  if (pathname.startsWith("/blocks/")) {
    internalComponent = <BlockDetails blocknum={detail_id} />
  } else if (pathname.startsWith("/txns/")) {
    internalComponent = <TransactionDetails txnID={detail_id} />
  }

  return (
    <div className="section-block section-full">
      <section className="section-centered">{internalComponent}</section>
    </div>
  )
}

export default DetailedViewSection
