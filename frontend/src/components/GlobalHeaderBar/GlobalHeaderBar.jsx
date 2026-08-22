import { Link } from "react-router-dom"
import ModalOpenButton from "../Modals/ModalOpenButton"

export default function GlobalHeaderBar() {
  return <>
    <header className="global-header flex-container">
      <div className="logo-wrapper">
        <Link to="/">[Grade Tracker]</Link>
      </div>

      <div className="header-btn-wrapper flex-container">
        <ModalOpenButton className="global-header-btn" id="settings-btn" modalRef={"settings"}/>  {/* TODO: Fix style of global header buttons*/}
      </div>
    </header>
    </>
}