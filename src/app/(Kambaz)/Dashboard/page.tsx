"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RootState } from "../store";
import { CardBody, Row, Col, Card, CardImg, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { addEnrollment, deleteEnrollment } from "../enrollmentReducer";

export default function Dashboard() {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentReducer);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const dispatch = useDispatch();
  const isFaculty = currentUser?.role === "FACULTY";

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some((e) => e.user === currentUser._id && e.course === courseId);
  };

  const handleAddNewCourse = () => dispatch(addNewCourse(course));
  const handleDeleteCourse = (courseId: string) => dispatch(deleteCourse(courseId));
  const handleUpdateCourse = () => dispatch(updateCourse(course));
  const handleEnroll = (courseId: string) => dispatch(addEnrollment({ userId: currentUser._id, courseId }));
  const handleUnenroll = (courseId: string) => dispatch(deleteEnrollment({ userId: currentUser._id, courseId }));

  const coursesDisplay = showAllCourses ? courses : courses.filter((c) => isEnrolled(c._id));

  return (
    <div id="wd-dashboard" style={{ marginLeft: 130, marginRight: 20 }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <button
        className="btn btn-primary float-end mb-3"
        onClick={() => setShowAllCourses(!showAllCourses)}
      >
        {showAllCourses ? "Enrolled" : "Available"}
      </button>

      {isFaculty && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end me-2" onClick={handleAddNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse}>
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2>
        {showAllCourses ? "Published Courses" : "Enrolled Courses"} ({coursesDisplay.length})
      </h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {coursesDisplay.map((course) => (
          <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <CardImg variant="top" src={course.image} alt={course.name} width="100%" height={160} />
              <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  {course.description}
                </CardText>

                <div className="d-flex flex-wrap gap-2 mt-2 justify-content-between">
                  {/* Go button for enrolled courses */}
                  {!showAllCourses && (
                    <Link href={`/Courses/${course._id}/Home`} className="text-decoration-none">
                      <Button variant="primary">Go</Button>
                    </Link>
                  )}

                  <div className="d-flex gap-2 ms-auto">
                    {/* Enroll/Unenroll only visible on Available Courses */}
                    {showAllCourses && (
                      isEnrolled(course._id) ? (
                        <Button variant="danger" onClick={() => handleUnenroll(course._id)}>Unenroll</Button>
                      ) : (
                        <Button variant="success" onClick={() => handleEnroll(course._id)}>Enroll</Button>
                      )
                    )}

                    {/* Faculty Edit/Delete buttons always visible */}
                    {isFaculty && (
                      <>
                        <Button variant="warning" onClick={() => setCourse(course)}>Edit</Button>
                        <Button variant="danger" onClick={() => handleDeleteCourse(course._id)}>Delete</Button>
                      </>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
