import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export function ModalContextProvider({ children }) {
    const [modalState, setModalState] = useState("closed");

    // Modal state control functions
    const openModal = (modalName) => setModalState(modalName);
    const closeModal = () => setModalState("closed");

    return <ModalContext.Provider value={{modalState, openModal, closeModal}}>
        {children}
    </ModalContext.Provider>
}

export function useModalContext() {
    return useContext(ModalContext);
}