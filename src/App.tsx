import HeadBlock from "./ui/HeadBlock/HeadBlock"
import { InterfaceMain } from "./components/MainPage/InterfaceMain/InterfaceMain"
import WebSocketProvider from "./components/WebSocketProvider/WebSocketProvider"
import { Disconnected } from "./components/Disconnected/Disconnected"
import { DetailedViewSection } from "./components/DetailedView/DetailedViewSection/DetailedViewSection"
import { HeadBar } from "./ui/HeadBar/HeadBar"
import { Footer } from "./ui/Footer/Footer"

import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="app-container">
      <WebSocketProvider />
      <div className="app">
        <HeadBar />
        <HeadBlock />
        <Switch>
          <Route path="/disconnected" component={Disconnected} />
          {/* DetailsContainer handles both blocks/txns routes */}
          <Route
            path={["/blocks/:detail_id", "/txns/:detail_id"]}
            component={DetailedViewSection}
          />
          <Route path="/" component={InterfaceMain} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}
export default App
