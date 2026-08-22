import '../../css/modal.css';
import { createPortal } from "react-dom";
import { AddCourseModal, SettingsModal } from "./Modal";
import { ModalContextProvider, useModalContext } from './ModalManager';

export function ModalContainer() {
    const { modalState } = useModalContext();
    const overlaysDiv = document.getElementById("overlays");

    function selectModal() {
        switch (modalState) {
            case ("settings"):
                return <SettingsModal/>;
            case ("add-course"):
                return <AddCourseModal/>;
            default:
                return <em>ERROR: No existing modal.</em> // TODO: Create an error modal for this default
        }
    }

    return createPortal(
        <>
            {/* TODO: Close modal from backdrop without having onClick read clicks from child elements */}
            {modalState !== "closed" && <div className='modal-backdrop'>
                {selectModal()}
            </div>}
        </>,
        document.body
    )

}
