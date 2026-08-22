import { useParams } from "react-router-dom";
import courses from "../data/courses.json"

export default function CourseDetails() {
    const params = useParams(); // TODO: Use the course ID to access the name, grade, and assignments associated with the course
    const semester = params.semester, courseId = params.courseId;
    const courseToDisplay = courses.find((semesterGroup) => semesterGroup.semester === semester).courseList.find((course) => course.courseId === courseId);
    const { courseName, grade, assignments } = courseToDisplay

    return <section id="grade-details">
        <header>
            <h1 className="page-title" id="course-view-name">{courseName}</h1>
            <p className="overall-grade">Your estimated grade for this course is {grade}.</p>
        </header>

        <hr />

        <section>
            <div className="table-wrapper">
                <table id="course-details-table">
                    <thead>
                        <tr>
                            <th>Assignment Name</th>
                            <th>Category</th>
                            <th>Weight</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((assignment, index) => {
                            return <tr key={`${courseId}-${index}`}>
                                <td>{assignment.assignmentName}</td>
                                <td>{assignment.category}</td>
                                <td>{assignment.weight}</td>
                                <td>{assignment.score / assignment.max}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    </section>
}