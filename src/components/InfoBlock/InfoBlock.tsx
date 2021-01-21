import "./InfoBlock.css"

import { ObjectType } from "../../utility/types"
interface Props {
  data: ObjectType
}

export const InfoBlock = (props: Props) => {
  const data = { ...props.data }
  const keys = Object.keys(data)

  const cells = keys.map((k: string) => {
    if (data[k] !== "") {
      return (
        <div className="info-row" key={k}>
          <div className="info-col info-key">{k}</div>
          <div className="info-col info-val">{data[k]}</div>
        </div>
      )
    }
    return null
  })

  return <div className="info-table">{cells}</div>
}
