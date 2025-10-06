export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{aid: string }>;
}) {
  const { aid } = await params;

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-assignment-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br /><br />

      <textarea id="wd-assignment-description" rows={5} cols={50}>
        The assignment is available online Submit a link to the landing page of
      </textarea>

      <br /><br />
      <table>
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input type="number" id="wd-points" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option>Percentage</option>
                <option>Marks</option>
                <option>Grades</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="Online">
                <option>Online</option>
                <option>OnSite</option>
              </select>
              <br />
              <label htmlFor="wd-online-options">Online Entry Options</label>
              <br />
              <input type="checkbox" id="wd-text-entry" /> Text Entry <br />
              <input type="checkbox" id="wd-website-url" /> Website URL <br />
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings <br />
              <input type="checkbox" id="wd-student-annotation" /> Student Annotation <br />
              <input type="checkbox" id="wd-file-upload" /> File Uploads <br />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">Assign</td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" defaultValue="Everyone" />
              <br /><br />
              <label htmlFor="wd-due-date">Due</label><br />
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
              <br /><br />
              <label>Available from</label><br />
              <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
              <br /><br />
              <label> Until </label><br />
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      
      <button id="wd-cancel-btn">Cancel</button>
      <button id="wd-save-btn">Save</button>
    </div>
  );
}
