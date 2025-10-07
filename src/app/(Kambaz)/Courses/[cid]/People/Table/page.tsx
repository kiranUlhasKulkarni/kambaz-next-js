import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
     <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tony</span>{" "}
          <span className="wd-last-name">Stark</span></td>
      <td className="wd-login-id">001234561S</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-10-01</td>
      <td className="wd-total-activity">10:21:32</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Wayne</span></td>
      <td className="wd-login-id">0012071808</td>
      <td className="wd-section">S102</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-10-06</td>
      <td className="wd-total-activity">10:21:42</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Owen</span>{" "}
          <span className="wd-last-name">Williams</span></td>
      <td className="wd-login-id">0012072211</td>
      <td className="wd-section">S103</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2024-26-04</td>
      <td className="wd-total-activity">10:11:32</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Natasha</span>{" "}
          <span className="wd-last-name">Romanoff</span></td>
      <td className="wd-login-id">0012070921</td>
      <td className="wd-section">S108</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2023-11-01</td>
      <td className="wd-total-activity">10:21:12</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Karen</span>{" "}
          <span className="wd-last-name">Rogers</span></td>
      <td className="wd-login-id">0016072211</td>
      <td className="wd-section">F103</td>
      <td className="wd-role">FACULTY</td>
      <td className="wd-last-activity">2020-26-04</td>
      <td className="wd-total-activity">10:11:32</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Steven</span>{" "}
          <span className="wd-last-name">Thomas</span></td>
      <td className="wd-login-id">0012072711</td>
      <td className="wd-section">S107</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2022-26-04</td>
      <td className="wd-total-activity">10:11:32</td></tr>
      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bianca</span>{" "}
          <span className="wd-last-name">Anthony</span></td>
      <td className="wd-login-id">0012072411</td>
      <td className="wd-section">F102</td>
      <td className="wd-role">FACULTY</td>
      <td className="wd-last-activity">2024-26-04</td>
      <td className="wd-total-activity">10:11:32</td></tr>
    </tbody>
   </Table>
  </div> );}