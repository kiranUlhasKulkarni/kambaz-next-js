export default function Modules() {
  return (
    <div>
      <div className="wd-controls mb-4">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select id="wd-group" defaultValue="Publish All">
          <option>Publish All</option>
        </select>
        <button>+ Module</button>
      </div>

      <ul id="wd-modules">
        {/* Week 1 */}
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
                <li className="wd-content-item">Overview of tools and software</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENTS</span>
              <ul className="wd-content">
                <li className="wd-content-item">A1 - Environment Setup + HTML</li>
                <li className="wd-content-item">Practice: Create a basic HTML page</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 2 */}
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Fundamentals</li>
                <li className="wd-content-item">Selectors, Box Model, and Layout</li>
                <li className="wd-content-item">Responsive Design Basics</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENTS</span>
              <ul className="wd-content">
                <li className="wd-content-item">A2 - Styling your HTML Page</li>
                <li className="wd-content-item">Practice: Create a CSS layout</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 3 */}
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">JavaScript Basics</li>
                <li className="wd-content-item">Variables, Functions, and Loops</li>
                <li className="wd-content-item">DOM Manipulation</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENTS</span>
              <ul className="wd-content">
                <li className="wd-content-item">A3 - Interactive HTML Page</li>
                <li className="wd-content-item">Practice: Add JS events to HTML elements</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
