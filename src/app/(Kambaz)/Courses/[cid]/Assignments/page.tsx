import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>

      {/* Assignments Section */}
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <div>
            Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/234"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <div>
            Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>

      {/* Quizzes Section */}
      <h3 id="wd-quizzes-title">
        QUIZZES <button>+</button>
      </h3>
      <ul id="wd-quiz-list">
        <li className="wd-quiz-list-item">
          <Link
            href="/Courses/1234/Quizzes"
            className="wd-quiz-link"
          >
            Quiz 1 - HTML Basics
          </Link>
        </li>
        <li className="wd-quiz-list-item">
          <Link
            href="/Courses/1234/Quizzes"
            className="wd-quiz-link"
          >
            Quiz 2 - CSS Fundamentals
          </Link>
        </li>
      </ul>

      {/* Exams Section */}
      <h3 id="wd-exams-title">
        EXAMS <button>+</button>
      </h3>
      <ul id="wd-exam-list">
        <li className="wd-exam-list-item">
          <Link
            href="/Courses/1234/Quizzes"
            className="wd-exam-link"
          >
            Midterm Exam
          </Link>
        </li>
      </ul>

      {/* Project Section */}
      <h3 id="wd-projects-title">
        PROJECT <button>+</button>
      </h3>
      <ul id="wd-project-list">
        <li className="wd-project-list-item">
          <Link
            href="/Courses"
            className="wd-project-link"
          >
            Final Project - Portfolio Website
          </Link>
        </li>
      </ul>
    </div>
  );
}
