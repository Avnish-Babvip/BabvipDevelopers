import React, { useEffect } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getServiceEnquiry } from "../../features/actions/services";

const ServicePlanEnquiry = () => {
  const dispatch = useDispatch();
  const { serviceEnquiryData } = useSelector((state) => state.services);
  const data = Array.isArray(serviceEnquiryData) ? serviceEnquiryData : [];

  useEffect(() => {
    dispatch(getServiceEnquiry());
  }, []);
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div className=" bg-white rounded-3 shadow-sm">
        <div className="p-4 d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0 fw-500 ">Service Plan Enquiry</h5>
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
              <th className="px-4 py-3 fw-medium ">Plan Type</th>
              <th className="px-4 py-3 fw-medium">Plan Price</th>
              <th className="px-4 py-3 fw-medium">Enquiry Date </th>
              <th className="px-4 py-3 fw-medium">Message</th>
              <th className="px-4 py-3 fw-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #EDEEF3" }}>
                <td
                  className=" px-4 py-3 fw-medium"
                  style={{ color: "#4266FF", cursor: "pointer" }}
                >
                  {item?.plan?.service?.name}
                </td>

                <td className="px-4 fw-medium"> {item?.plan?.name}</td>
                <td className="px-4 fw-medium"> ₹ {item?.plan?.price}</td>
                <td className="px-4 fw-medium">
                  {" "}
                  {formatDate(item?.created_at)}
                </td>
                <td className="px-4 fw-medium">{item.message}</td>
                <td className="px-4 ">
                  <div
                    className="py-1 px-2 rounded-3 fw-semibold  text-capitalize d-inline-block"
                    style={{
                      backgroundColor:
                        item.status === "converted"
                          ? "rgba(34, 201, 164, 0.1)"
                          : item.status === "new"
                            ? "rgba(255, 106, 26, 0.1"
                            : item.status === "progress"
                              ? "rgba(13, 202, 240, 0.1)"
                              : "rgba(255, 59, 59, 0.1)", // secondary

                      color:
                        item.status === "converted"
                          ? "#18BBA2"
                          : item.status === "new"
                            ? "#FF6A1A"
                            : item.status === "progress"
                              ? "#0DCAF0"
                              : "#FF3B3B",
                    }}
                  >
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ServicePlanEnquiry;
