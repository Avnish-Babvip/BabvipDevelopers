import React, { useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelAppointment,
  getMyAppointments,
} from "../../features/actions/services";

const MyAppointments = () => {
  const dispatch = useDispatch();
  const { appointmentData } = useSelector((state) => state.services);
  const data = Array.isArray(appointmentData) ? appointmentData : [];

  const handleCancel = (appointment_id) => {
    const payload = {
      appointment_id,
    };

    dispatch(cancelAppointment(payload))
      .unwrap()
      .then(() => {
        dispatch(getMyAppointments()); // refresh list
      });
  };

  useEffect(() => {
    dispatch(getMyAppointments());
  }, []);

  return (
    <>
      <div className=" bg-white rounded-3 shadow-sm">
        <div className="p-4 d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 fw-500 ">My Appointments</h5>
        </div>

        <Table
          responsive
          hover
          className="align-middle"
          style={{ fontSize: "0.85rem" }}
        >
          <thead
            style={{ backgroundColor: "#F9F9FC", color: "black" }}
            className=" border-top border-bottom"
          >
            <tr
              style={{
                borderTop: "1px solid #EDEEF3",
                borderBottom: "1px solid #EDEEF3",
              }}
            >
              <th className="px-4 py-3  fw-medium ">Service Name</th>
              <th className="px-4 py-3 fw-medium ">Appointment Time</th>
              <th className="px-4 py-3 fw-medium">Appointment Date</th>
              <th className="px-4 py-3 fw-medium">Message</th>
              <th className="px-4 py-3 fw-medium">Status</th>
              <th className="px-4 py-3 fw-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #EDEEF3" }}>
                <td
                  className=" px-4 py-3 fw-medium"
                  style={{ color: "#4266FF", cursor: "pointer" }}
                >
                  {item.service.name}
                </td>

                <td className="px-4 fw-medium">{item.appointment_time}</td>
                <td className="px-4 fw-medium">{item.appointment_date}</td>
                <td className="px-4 fw-medium">{item.message}</td>
                <td className="px-4 ">
                  <div
                    className="py-1 px-2 rounded-3 fw-semibold  text-capitalize d-inline-block"
                    style={{
                      backgroundColor:
                        item.status === "completed"
                          ? "rgba(34, 201, 164, 0.1)"
                          : item.status === "pending"
                            ? "rgba(255, 106, 26, 0.1"
                            : item.status === "confirmed"
                              ? "rgba(13, 202, 240, 0.1)"
                              : "rgba(255, 59, 59, 0.1)", // secondary

                      color:
                        item.status === "completed"
                          ? "#18BBA2"
                          : item.status === "pending"
                            ? "#FF6A1A"
                            : item.status === "confirmed"
                              ? "#0DCAF0"
                              : "#FF3B3B",
                    }}
                  >
                    {item.status}
                  </div>
                </td>
                <td className="px-4">
                  <button
                    onClick={() => handleCancel(item.id)}
                    disabled={
                      item.status === "cancelled" || item.status === "completed"
                    }
                    className="btn btn-sm"
                    style={{
                      background:
                        item.status === "cancelled" ||
                        item.status === "completed"
                          ? "#e0e0e0"
                          : "rgba(255, 59, 59, 0.1)",
                      color:
                        item.status === "cancelled" ||
                        item.status === "completed"
                          ? "#999"
                          : "#FF3B3B",
                      border: "none",
                      cursor:
                        item.status === "cancelled" ||
                        item.status === "completed"
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    {item.status === "cancelled"
                      ? "Cancelled"
                      : item.status === "completed"
                        ? "Completed"
                        : "Cancel Appointment"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* <div className="d-flex justify-content-between align-items-center mt-3 px-4 ">
          <small className="text-muted">Showing 1-5 from 2,400</small>
          <Pagination size="sm" className="">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div> */}
      </div>

      <style>{`.pagination .page-item .page-link {
  border: none;
  background-color: #f5f5f5;     /* light gray background */
  color: #888;                   /* text color */
  border-radius: 12px;           /* rounded corners */
  margin: 0 4px;
  padding: 6px 12px;
  transition: all 0.2s ease-in-out;
}

/* Hover effect */
.pagination .page-item .page-link:hover {
  background-color: #e0e0e0;
  color: #333;
}

/* Active page */
.pagination .page-item.active .page-link {
  background-color: #4266FF;     /* solid blue */
  color: #fff;
  font-weight: bold;
}

/* Disabled buttons */
.pagination .page-item.disabled .page-link {
  background-color: #f5f5f5;
  color: #ccc;
}`}</style>
    </>
  );
};

export default MyAppointments;
