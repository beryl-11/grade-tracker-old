import { useModalContext } from "./ModalManager";
import { QuestionIcon } from "@phosphor-icons/react";

export default function ModalOpenButton({ modalRef, textContent = "" }) {
    const { openModal } = useModalContext();

    const openBtnHandler = () => {
        openModal("open");
    }

    return <button type="button" className="modal-open-btn" onClick={openBtnHandler}>
        <QuestionIcon size={24} className="icon"/>      
        {textContent}
    </button>
}
