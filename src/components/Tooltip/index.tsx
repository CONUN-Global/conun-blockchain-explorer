import React from "react"
import ReactTooltip from "react-tooltip"

type Place = "top" | "right" | "bottom" | "left"

interface CustomTooltipProps {
  id: string
  children: React.ReactNode
  place?: Place
}

function Tooltip({ children, id, place = "top" }: CustomTooltipProps) {
  return (
    <>
      {children}
      <ReactTooltip
        id={id}
        place={place}
        backgroundColor="#ffffff"
        textColor="#4F4F4F"
        delayShow={800}
        className="tooltip-override"
      />
    </>
  )
}

export default Tooltip
