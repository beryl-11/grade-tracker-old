import {PlusIcon} from "@phosphor-icons/react"

function QuickActionToolbar() {
    return <aside className="toolbar">
        <button type="button" className="toolbar-btn modal-open-btn" id="add-course-btn" data-href="add-course-modal" aria-label="Add Course">
            <PlusIcon size={24} weight="bold" className="icon"/>
        </button>
    </aside>
}

export default QuickActionToolbar