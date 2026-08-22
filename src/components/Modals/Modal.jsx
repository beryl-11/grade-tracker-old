import ModalExitButton from "./ModalExitButton";

function ModalTemplate({ children }) {
  return <div className="modal" onClick={(e) => e.stopPropagation()}>
    <ModalExitButton />
    {children}
  </div>

}

export function SettingsModal() {
  return <ModalTemplate id="settings-modal">
    <div className="modal-header">
      <h1>Settings</h1>
    </div>

    <hr />

    <div className="modal-section">
      <h2>Random Heading</h2>
      <p>There is nothing to tweak.</p>
    </div>
  </ModalTemplate>
}

export function AddCourseModal() {
  return <ModalTemplate id="add-course-modal">
    <div className="modal-header">
      <h1>Add Course</h1>
      <p>You must complete all sections in order to submit this form.</p>
    </div>

    <hr />

    <form id="add-course-form">
      <div className="modal-section">
        <h2>Basic Course Information</h2>
        <label htmlFor="course-code">Course Code: </label>
        <input type="text" name="courseCode" id="course-code" required />

        <label htmlFor="course-name">Course Name: </label>
        <input type="text" name="courseName" id="course-name" required />

        <br />

        <label htmlFor="semester">Semester: </label>
        <select name="semester" id="semester" required>
          <option>Fall 2026</option>
          <option>Spring 2025</option>
        </select>

        <label htmlFor="credits">Number of Credits: </label>
        <input type="number" name="credits" id="credits" required />
      </div>
      <div className="modal-section">
        <h2>Add Components</h2>
        <p>The weight of your components should add to 100%.</p>

        <label htmlFor="component-name">Component Name: </label>
        <input type="text" name="componentName" id="component-name" multiple />
        <label htmlFor="component-weight">Component Weight: </label>
        <input type="number" name="componentWeight" id="component-weight" /><br />
        <button type="button">Add Component</button>

        <h3>You've added:</h3>
        <table className="modal-table" id="components-table-view">
          <thead>
            <tr>
              <th></th>
              <th>Component Name</th>
              <th>Component Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total: </td>
              <td></td>
              <td>0%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button type="submit">Add Course</button>
    </form>
  </ModalTemplate>
}