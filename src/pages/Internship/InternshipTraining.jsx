import React, { useEffect, useState } from "react";
import { getDepartmentWithCourses } from "../../features/actions/intern";
import { useDispatch, useSelector } from "react-redux";
import CourseEnquiryModal from "../../components/CourseEnquiryModal";

const InternshipTraining = () => {
  const dispatch = useDispatch();
  const { courseData } = useSelector((state) => state.intern);
  const [modalData, setModalData] = useState(null);
  const data = Array.isArray(courseData) ? courseData : [];

  const [activeDept, setActiveDept] = useState(null);

  useEffect(() => {
    dispatch(getDepartmentWithCourses());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      setActiveDept(data[0]); // default first department
    }
  }, [data]);

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container-fluid">
          {/* Heading */}
          <div className="text-center mb-5">
            <h4 className="text-primary">Our Courses</h4>
            <h2 className="fw-bold">We Provide Best Courses</h2>
          </div>

          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="bg-white p-3 rounded shadow-sm">
                {data.map((dept) => (
                  <button
                    key={dept.department_id}
                    className={`w-100 btn mb-2 ${
                      activeDept?.department_id === dept.department_id
                        ? "btn-primary"
                        : "btn-light"
                    }`}
                    onClick={() => setActiveDept(dept)}
                  >
                    {dept.department_name}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="col-lg-9">
              <div className="row">
                {(activeDept
                  ? activeDept.courses
                  : data.flatMap((d) => d.courses)
                )?.map((course) => (
                  <div key={course.id} className="col-xl-4 col-md-6 mb-4">
                    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                      {/* Image */}
                      <img
                        src={course.image}
                        className="card-img-top"
                        style={{ height: "180px", objectFit: "cover" }}
                        alt={course.course_name}
                      />

                      {/* Body */}
                      <div className="card-body d-flex flex-column">
                        <h5 className="fw-bold">{course.course_name}</h5>

                        <p className="text-muted small mb-2">
                          {course.short_description?.slice(0, 150)}...
                        </p>

                        {/* Pricing */}
                        <div className="mb-2">
                          <span className="text-muted text-decoration-line-through me-2">
                            ₹{course.price}
                          </span>
                          <span className="fw-bold text-success">
                            ₹{course.final_price}
                          </span>
                        </div>

                        {/* Duration */}
                        <span className="badge bg-warning py-2 text-dark mb-3">
                          {course.duration}
                        </span>

                        {/* Button */}
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#btn-enquiry-1" // ✅ use # not .
                          onClick={() =>
                            setModalData({ course_id: course?.id })
                          }
                          className="btn btn-primary mt-auto"
                        >
                          Enquiry Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {activeDept && activeDept.courses.length === 0 && (
                <div className="text-center py-5">
                  <h5>No courses available</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CourseEnquiryModal modalData={modalData} />
    </>
  );
};

export default InternshipTraining;
