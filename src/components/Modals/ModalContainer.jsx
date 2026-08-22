import '../../css/modal.css';
import { createPortal } from "react-dom";
import { AddCourseModal, SettingsModal } from "./Modal";
import { ModalContextProvider, useModalContext } from './ModalManager';

export function ModalContainer() {
    const { modalState, closeModal } = useModalContext();
    const overlaysDiv = document.getElementById("overlays");

    function selectModal() {
        switch (modalState) {
            case ("settings"):
                return <SettingsModal />;
            case ("add-course"):
                return <AddCourseModal />;
            default:
                return <em>ERROR: No existing modal.</em> // TODO: Create an error modal for this default
        }
    }

    return createPortal(
        <>
            {modalState !== "closed" && <div className='modal-backdrop' onClick={closeModal}>
                {selectModal()}
            </div>}
        </>,
        document.body
    )

}
