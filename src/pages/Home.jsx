import Collapsible from "../components/Collapsible/Collapsible"
import courses from "../data/courses.json"

function Home() {
  return <section id="home">
    <header id="intro">
      <h1 className="page-title">Hello, [name].</h1>
      <p className="overall-grade" id="overall-gpa-statement">Your estimated current GPA is [3.00].</p>
    </header>

    <hr />

    <section id="grade-details">
      <h1>Details</h1>

      <div className="grid-container" id="grade-details-grid">
        <div className="flex-container" id="details-list">
          {(courses) && courses.map((semesterGroup) => <Collapsible key={semesterGroup.semester} semester={semesterGroup.semester} courseList={semesterGroup.courseList} />)}
          {(courses.length === 0) && <p className="empty-course-details-view">No courses yet. Add a course using the "+" in the bottom right of the screen to get started.</p>}
        </div>
        <div className="graph-wrapper">
          <div className="circle-placeholder" id="gpa-breakdown-graph"></div>
        </div>

      </div>
    </section>
  </section>
}

export default Home