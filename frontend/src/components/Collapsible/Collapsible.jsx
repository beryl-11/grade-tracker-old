import "../../css/Collapsible.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClickableTableRow from "./ClickableTableRow";

function Collapsible({ semester, courseList }) {
    const [collapsedState, setCollapsedState] = useState("expanded");

    //TODO: Find more elegant way of toggling states
    function toggleCollapsible() {
        setCollapsedState(prevState => (prevState === "collapsed" ? "expanded" : "collapsed"));
    }

    return <div className="collapsible">
        <button type="button" className="collapsible-btn" onClick={toggleCollapsible}>{semester.replace("-", " ")}</button>

        <div className={`collapsible-content ${collapsedState}`}>
            <table>
                <tbody>
                    {courseList.map((courseObject) => {
                        const currId = courseObject.courseId;
                        return <ClickableTableRow
                            key={currId}
                            courseId={currId}
                            semester={semester}
                            courseName={courseObject.courseName}
                            courseGrade={courseObject.grade}
                        />
                    })}
                </tbody>
            </table>
        </div>
    </div>
}

export default Collapsible