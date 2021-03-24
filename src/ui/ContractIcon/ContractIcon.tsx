import { getContractType } from "../../utility/functions"

import ninjaIcon from "../../style/images/extra_icons/icon_ninja_star.svg"
import defaultIcon from "../../style/images/extra_icons/icon_wibbly_arrows.svg"
import familiarIcon from "../../style/images/extra_icons/icon_i_know_this_one.svg"

import style from "./ContractIcon.module.css"

type Props = {
  serviceType: string | number
}

const ContractIcon = ({ serviceType }: Props) => {
  const spanStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const contractType = getContractType(serviceType.toString())

  switch (contractType) {
    case "coin":
      return (
        <span style={spanStyle}>
          <img
            src={ninjaIcon}
            data-tip={"Coin"}
            className={style.iconImg}
            alt="coin"
          />
        </span>
      )
    case "drive":
      return (
        <span style={spanStyle}>
          <img
            src={familiarIcon}
            data-tip={"Conun Drive"}
            className={style.iconImg}
            alt="drive"
          />
        </span>
      )
    case "basic":
      return (
        <span style={spanStyle}>
          <img
            src={defaultIcon}
            data-tip={"Contract Deployment"}
            className={style.iconImg}
            alt="icon"
          />
        </span>
      )
    default:
      return <span style={spanStyle}>{serviceType}</span>
  }
}

export default ContractIcon