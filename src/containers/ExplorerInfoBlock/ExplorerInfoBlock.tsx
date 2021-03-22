import ChannelStats from "../../components/MainPage/ChannelStats/ChannelStats"
import "./ExplorerInfoBlock.css"

import cubeCombIcon from "../../style/images/extra_icons/icon_cube_comb.svg"
import ninjaIcon from "../../style/images/extra_icons/icon_ninja_star.svg"
import familiarIcon from "../../style/images/extra_icons/icon_i_know_this_one.svg"

const ExplorerInfoBlock = () => {
  return (
    <div className="channel-stats-block">
      {/* Network Stats */}
      <div className="section-block">
        <ChannelStats />
      </div>
      {/* App Services */}
      <div className="section-block app-service-table">
        <div className="app-service-title-row">
          <div className="app-service-table-title">
            <span className="font-hilite">App Services</span>
          </div>
          <div className="app-service-description">
            These are the services Conun provides:
          </div>
        </div>
        {/* Full Size Cells */}
        <div className="app-services-full-size">
          <div className="app-service-row">
            <img
              src={ninjaIcon}
              className="app-service-icon-image"
              alt=""
              data-tip={"Coin"}
            />
            <div className="app-service-unit-title">Coin</div>
            <div className="app-service-unit-description">
              Coin token used for payment of services
            </div>
          </div>
          <div className="app-service-row">
            <img
              src={familiarIcon}
              className="app-service-icon-image"
              alt=""
              data-tip={"Drive"}
            />
            <div className="app-service-unit-title">Drive</div>
            <div className="app-service-unit-description">
              Decentralised peer-to-peer file transfer service
            </div>
          </div>
          <div className="app-service-row">
            <img
              src={cubeCombIcon}
              className="app-service-icon-image"
              alt=""
              data-tip={"Engine"}
            />
            <div className="app-service-unit-title">Engine</div>
            <div className="app-service-unit-description">
              Distributed supercomputing service
            </div>
          </div>
        </div>
        {/* Minimized Cells */}
        <div className="app-services-small">
          <div className="app-service-small-row">
            <img
              src={ninjaIcon}
              className="app-service-icon-image"
              alt=""
              data-tip={"Payment of Services"}
            />
            <div className="app-service-unit-title">Coin</div>
          </div>
          <div className="app-service-small-row">
            <img
              src={familiarIcon}
              className="app-service-icon-image"
              alt=""
              data-tip={"Peer-to-peer file transfer"}
            />
            <div className="app-service-unit-title">Drive</div>
          </div>
          <div className="app-service-small-row">
            <img
              src={cubeCombIcon}
              className="app-service-icon-image"
              alt=""
              data-tip={"Distributed Supercomputing"}
            />
            <div className="app-service-unit-title">Engine</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorerInfoBlock
