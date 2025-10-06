import Link from "next/link";
import { FaSearch, FaPlus, FaCheckCircle, FaEllipsisV, FaRegFileAlt, FaCaretDown } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-4">
      <div className = "d-flex justify-content-between mb-3">
      <div className ="input-group me-2 w-50">
      <span className ="input-group-text">
            <FaSearch />
      </span>
      <input
        className="form-control"
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />
      </div>
      <div className="d-flex">
          <Button variant="secondary" id="wd-add-assignment-group" className="me-1">
            <FaPlus /> Group
          </Button>
          <Button variant = "danger" id="wd-add-assignment" className="me-1">
            <FaPlus /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0">
        <ListGroupItem variant = "secondary" className="p-2">
          <div className="d-flex align-items-center">
            <div className="flex-grow-1 d-flex align-items-center">
              <BsGripVertical className="m-2 fs-4" /> 
              <span className="fw-bold text-uppercase m-2">ASSIGNMENTS</span>
              <FaCaretDown className="m-2" />
            </div>
            <div className="d-flex align-items-center">
              <span className="fw-bold align-items-center m-2">40% of Total</span>
              <FaPlus className="text-muted m-2" />
              <FaEllipsisV className="text-muted m-2" />
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-status-border p-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center flex-grow-1">
              <BsGripVertical className="me-2 fs-2" />
              <FaRegFileAlt className="text-success me-3 fs-2" /> 
              <div>
              <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold">
                  A1 - ENV + HTML
              </Link>
              <div className="text-secondary fs-5">
              <span className = "text-danger">Multiple Modules </span>| <span className = "text-muted fw-bold">Not available until </span> May 6 at 12:00am <span className="fw-bold">Due </span> May 13 at 11:59pm | 100 pts
              </div>
            </div>
            </div>
              <div className="d-flex align-items-center ms-3">
          <FaCheckCircle className="text-success me-3 fs-4" />
          <FaEllipsisV className="text-muted me-3 fs-4" />
        </div>
        </div>
        </ListGroupItem>
        <ListGroupItem className="wd-assignment-status-border p-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center flex-grow-1">
              <BsGripVertical className="me-2 fs-2" />
              <FaRegFileAlt className="text-success me-3 fs-2" /> 
              <div>
              <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold">
                  A2 - CSS + BOOTSTRAP
              </Link>
              <div className="text-secondary fs-5">
              <span className = "text-danger">Multiple Modules </span>| <span className = "text-muted fw-bold">Not available until </span> May 13 at 12:00am <span className="fw-bold">Due </span> May 20 at 11:59pm | 100 pts
              </div>
            </div>
            </div>
              <div className="d-flex align-items-center ms-3">
          <FaCheckCircle className="text-success me-3 fs-4" />
          <FaEllipsisV className="text-muted me-3 fs-4" />
        </div>
        </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
