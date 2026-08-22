// import courses from "./courses.json" with { type: "json" };
// temp courses var to replace import statement
const courses = {
    "Fall 2025": [
        {
            "courseName": "F25C1", "credit": 4, "grade": "A+", "assignments": [
                { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
                { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
            ]
        },
        {
            "courseName": "F25C2", "credit": 2, "grade": "A-", "assignments": [
                { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
                { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
            ]
        }
    ],

    "Spring 2026": [
        {
            "courseName": "S26C1", "credit": 4, "grade": "A+", "assignments": [
                { "assignmentName": "Homework 1", "score": 95, "max": 100, "weight": 1 },
                { "assignmentName": "Midterm", "score": 88, "max": 100, "weight": 1 }
            ]
        }
    ]
}

/*--------------------------------------------Code--------------------------------------------*/
/* Function definitions */
const isEmpty = (obj) => Object.keys(obj).length === 0;

function exitModalButtonHandler(modal) {
    modal.close();
}

function exitModalOutOfBoxHandler(modal) {
    // console.log("running exitModalOutofBoxHandler");

    return function checkClickCoords(event) {
        const rect = modal.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            modal.close();
        }
    }
}

/*---------------------------------------Create Home View---------------------------------------*/
const gradeListContainer = document.getElementById("details-list");

if (isEmpty(courses)) {
    /* TODO: Make this look better using CSS */
    gradeListContainer.textContent = "No courses yet. Add a course to view details.";

} else {
    for (const semester in courses) {
        // create new semester group
        const newSemesterGroup = document.createElement("div");
        newSemesterGroup.classList.add("semester-group");
        gradeListContainer.append(newSemesterGroup);

        // create a collapsible button and table for the semester group
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.classList.add("collapsible-btn");
        newButton.textContent = semester;

        const newCollapsibconstable = document.createElement("table");
        newCollapsibconstable.classList.add("collapsible-content", "collapsed");

        newSemesterGroup.append(newButton, newCollapsibconstable);

        // create the rows of the table
        courses[semester].forEach((course) => {
            const newRow = document.createElement("tr");
            newRow.setAttribute("data-href", `#course-view/${semester}/${course["courseName"]}`);
            newCollapsibconstable.append(newRow);

            // row information
            const newRowCourseName = document.createElement("td"), newRowCourseGrade = document.createElement("td");
            newRowCourseName.textContent = course["courseName"];
            newRowCourseName.classList.add("course-name");

            newRowCourseGrade.textContent = course["grade"];
            newRowCourseGrade.classList.add("course-grade");

            newRow.append(newRowCourseName, newRowCourseGrade);
        })
    }
}
/*--------------------------------------End of Home View--------------------------------------*/

/* Modals & Utilities */
/* Settings */

const modalButtons = document.querySelectorAll(".modal-open-btn");
modalButtons.forEach((modalButton) => {
    // retrieve correlating modal and show
    const modal = document.getElementById(modalButton.dataset.href);
    modalButton.addEventListener("click", () => {
        modal.showModal();
        document.body.style.overflow = "hidden";
    })

    // exit button or on click
    const exitButton = modal.querySelector(".modal-exit-btn");
    exitButton.addEventListener("click", function exitModalButtonHandler() {
        modal.close();
    });
    const outofBoxInnerHandler = exitModalOutOfBoxHandler(modal);
    modal.addEventListener("click", outofBoxInnerHandler);

    // TODO: remove event listener on modal close 
    modal.addEventListener("close", () => {
        // exitButton.removeEventListener("click", exitModalButtonHandler);
        // modal.removeEventListener("click", outofBoxInnerHandler);
        document.body.style.overflow = "hidden auto";
        // console.log("cleanup done");
    })
})


/* Toolbar */
// Add Course Button
// const addCourseButton = document.getElementById("add-course-btn"), addCourseModal = document.getElementById("add-course-modal");
// addCourseButton.addEventListener("click", () => {
//     addCourseModal.showModal();

//     const exitButton = addCourseModal.querySelector(".modal-exit-btn");
//     exitButton.addEventListener("click", () => addCourseModal.close(), { once: true });
// })

/* Collapsible Button and Content Script */
const collapsibles = document.querySelectorAll(".collapsible-btn");
collapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", function () {
        collapsible.classList.toggle("expanded");
        const content = collapsible.nextElementSibling;
        content.classList.toggle("collapsed");
    })
})

/* Link Table Rows Using JQuery */
$(document).ready(function () {
    $(document.body).on("click", "tr[data-href]", function () {
        // load content based on path
        document.getElementById("course-view-name").textContent = "afjaoiqnewj";
        document.getElementById("course-view-grade").textContent = "A";

        // switch the view
        document.getElementById("home-view").toggleAttribute("hidden");
        document.getElementById("course-view").toggleAttribute("hidden");
        window.location.href = this.dataset.href;
    });
});
