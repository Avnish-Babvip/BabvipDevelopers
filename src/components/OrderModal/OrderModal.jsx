import {
  Card,
  Col,
  Container,
  Modal,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { instance } from "../../services/axiosInterceptor";

export const ViewOrderModal = ({ show, handleClose, orderNumber, token }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  useEffect(() => {
    if (!show || !orderNumber) return;

    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        const toastId = toast.loading("Fetching order details...");

        const res = await instance.get(
          `/customer/customerorderdetail/${orderNumber}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrderDetails(res.data.data);
        toast.success("Order details loaded!", { id: toastId });
      } catch (error) {
        console.error("Error fetching order details:", error);
        toast.error("Failed to fetch order details.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [show, orderNumber]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="order-details-modal"
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fw-semibold fs-5">Order Details</Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-0">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center py-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : orderDetails ? (
          <Container fluid className="px-2 px-md-3">
            <Card className="shadow-sm border-0 mb-3">
              <Card.Body className="p-2 p-md-3">
                <div className="table-responsive">
                  <Table
                    bordered
                    hover
                    responsive
                    className="align-middle mb-0"
                  >
                    <thead className="table-light">
                      <tr>
                        <th>Order Number</th>
                        <th>Software Name</th>
                        <th>Plan</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(orderDetails?.items) &&
                        orderDetails?.items.map((item, idx) => (
                          <tr key={idx}>
                            <td className="text-break">{item?.order_number}</td>
                            <td className="text-break">
                              {item?.software?.software_name}
                            </td>
                            <td>{item?.plan?.plan_name}</td>
                            <td>
                              {item?.plan?.plan_type?.duration_value}{" "}
                              {item?.plan?.plan_type?.duration_type}
                            </td>
                            <td>₹{item?.plan?.plan_price}</td>
                            <td>{formatDate(item?.software_start_date)}</td>
                            <td>{formatDate(item?.software_end_date)}</td>
                            <td className="text-capitalize">{item?.status}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>

                {/* Totals Section */}
                <Row className="justify-content-end mt-3">
                  <Col xs={12} md={6}>
                    <div className="border rounded p-3 bg-light">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Subtotal</span>
                        <strong>₹{orderDetails?.invoice?.subtotal}</strong>
                      </div>

                      {orderDetails?.invoice?.discount_amount && (
                        <div className="d-flex justify-content-between mb-1">
                          <span>Discount</span>
                          <strong className="text-danger">
                            -₹{orderDetails?.invoice?.discount_amount}
                          </strong>
                        </div>
                      )}

                      {orderDetails?.invoice?.cgst !== "0.00" && (
                        <div className="d-flex justify-content-between mb-1">
                          <span>CGST</span>
                          <strong>₹{orderDetails?.invoice?.cgst}</strong>
                        </div>
                      )}

                      {orderDetails?.invoice?.sgst !== "0.00" && (
                        <div className="d-flex justify-content-between mb-1">
                          <span>SGST</span>
                          <strong>₹{orderDetails?.invoice?.sgst}</strong>
                        </div>
                      )}

                      {orderDetails?.invoice?.igst !== "0.00" && (
                        <div className="d-flex justify-content-between mb-1">
                          <span>IGST</span>
                          <strong>₹{orderDetails?.invoice?.igst}</strong>
                        </div>
                      )}

                      <hr className="my-2" />
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-semibold">Payable Amount</span>
                        <h5 className="fw-bold text-success mb-0">
                          ₹{orderDetails?.invoice?.total_amount}
                        </h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        ) : (
          <p className="text-center text-muted py-3">
            No details found for this order.
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
};
