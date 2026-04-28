import React, { useState } from "react";
import { Table, Pagination, Dropdown } from "react-bootstrap";
import { DateModal } from "../../components/DateModal/DateModal";

const Payment = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <div className=" bg-white rounded-3 shadow-sm">
        <div className="p-4 d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 fw-500 ">Transaction History</h5>
          <div className="d-flex gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="border rounded-3 fs-md fw-500 px-3 py-1 bg-white d-flex gap-2"
              style={{ color: "#6c7484" }}
            >
              <img
                src={`${assetRoute}/assets/img/dashboardIcons/date.svg`}
                alt="Date"
                style={{ width: "24px" }}
              />
              Select Date
            </button>

            <DateModal
              show={showModal}
              handleClose={() => setShowModal(false)}
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
            <Dropdown>
              <Dropdown.Toggle
                className="border rounded-3 fs-md fw-500 px-3 py-1 me-5 bg-white d-flex gap-2 align-items-center"
                style={{ color: "#6c7484" }}
                variant="light"
              >
                <img
                  src={`${assetRoute}/assets/img/dashboardIcons/filter.svg`}
                  alt="Filter"
                  style={{ width: "24px" }}
                />
                Filters
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => console.log("Latest selected")}>
                  Latest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => console.log("Oldest selected")}>
                  Oldest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => console.log("Delivered Only")}>
                  Delivered Only
                </Dropdown.Item>
                <Dropdown.Item onClick={() => console.log("Processing Only")}>
                  Processing Only
                </Dropdown.Item>
                <Dropdown.Item onClick={() => console.log("Shipped Only")}>
                  Shipped Only
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
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
              <th className="px-4 py-3  fw-medium ">Order ID</th>
              <th className="px-4 py-3 fw-medium ">Product</th>
              <th className="px-4 py-3 fw-medium">Total</th>
              <th className="px-4 py-3 fw-medium">Status</th>
              <th className="px-4 py-3 fw-medium">Date</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                id: "202002",
                product: "Handmade Pouch",
                total: "$120.00",
                status: "Processing",
                date: "12 Dec 2023",
              },
              {
                id: "201901",
                product: "Smartwatch K2",
                total: "$350.00",
                status: "Processing",
                date: "1 Dec 2023",
              },
              {
                id: "201800",
                product: "Smartwatch K1",
                total: "$125.00",
                status: "Shipped",
                date: "18 Nov 2023",
              },
              {
                id: "201881",
                product: "Headphone GH Pro",
                total: "$340.00",
                status: "Shipped",
                date: "2 Nov 2023",
              },
              {
                id: "201643",
                product: "Sphere X",
                total: "$987.00",
                status: "Delivered",
                date: "7 Sep 2023",
              },
              {
                id: "201644",
                product: "Sphere X",
                total: "$987.00",
                status: "Delivered",
                date: "7 Sep 2023",
              },
              {
                id: "201645",
                product: "Sphere X",
                total: "$987.00",
                status: "Delivered",
                date: "7 Sep 2023",
              },
              {
                id: "201646",
                product: "Sphere X",
                total: "$987.00",
                status: "Delivered",
                date: "7 Sep 2023",
              },
            ].map((item, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #EDEEF3" }}>
                <td
                  className=" px-4 py-3 fw-medium"
                  style={{ color: "#4266FF", cursor: "pointer" }}
                >
                  {item.id}
                </td>
                <td className="px-4">
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="bg-secondary rounded"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <span className="text-black fw-medium">{item.product}</span>
                  </div>
                </td>
                <td className="px-4 fw-medium">{item.total}</td>
                <td className="px-4 ">
                  <div
                    className="py-1 px-2 rounded-3 fw-semibold  text-capitalize d-inline-block"
                    style={{
                      backgroundColor:
                        item.status === "Delivered"
                          ? "rgba(34, 201, 164, 0.1)"
                          : item.status === "Processing"
                          ? "rgba(255, 106, 26, 0.1)"
                          : item.status === "Shipped"
                          ? "rgba(13, 202, 240, 0.1)"
                          : "rgba(255, 59, 59, 0.1)", // secondary

                      color:
                        item.status === "Delivered"
                          ? "#18BBA2"
                          : item.status === "Processing"
                          ? "#FF6A1A"
                          : item.status === "Shipped"
                          ? "#0DCAF0"
                          : "#FF3B3B",
                    }}
                  >
                    {item.status}
                  </div>
                </td>
                <td className="px-4 fw-medium">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="d-flex justify-content-between align-items-center mt-3 px-4 ">
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
        </div>
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

export default Payment;
