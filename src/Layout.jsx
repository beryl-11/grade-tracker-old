import { Outlet } from "react-router-dom"
import GlobalHeaderBar from "./components/GlobalHeaderBar/GlobalHeaderBar"
import QuickActionToolbar from "./components/QuickActions/QuickActionToolbar"
import './css/style.css' // do something about this
import { ModalContainer } from "./components/Modals/ModalContainer"
import { ModalContextProvider } from "./components/Modals/ModalManager"


function Layout() {

  return <>
    <ModalContextProvider>
      <div id="body">
        <GlobalHeaderBar />
        <main>
          <Outlet />
        </main>
        <QuickActionToolbar />
      </div>
      <div id="overlays"> {/* TODO: Render the Modal in the overlays div instead of somewhere random */}
        <ModalContainer />
        </div>

    </ModalContextProvider>
  </>
}

export default Layout