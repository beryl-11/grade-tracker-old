import { useNavigate } from "react-router-dom";

function ClickableTableRow(props) {
    const navigate = useNavigate();
    
    function rowClickHandler() {
        navigate(`/details/${props.semester}/${props.courseId}`);
    }

    return <tr onClick={rowClickHandler}>
        <td className="course-name">{props.courseName}</td>
        <td className="course-grade">{props.courseGrade}</td>
    </tr>
}

export default ClickableTableRow