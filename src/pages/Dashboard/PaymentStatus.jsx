import { Container, Card, Button } from "react-bootstrap";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa"; // for failure
import { useNavigate, useSearchParams } from "react-router-dom";

export default function PaymentStatus() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const status = searchParams.get("status"); // "Success" or "Failure"
  const orderId = searchParams.get("order_id"); // "BVSCP-25-26-001"

  return (
    <Container className="d-flex justify-content-center align-items-center my-5">
      {status === "Success" ? (
        <Card
          className="text-center shadow-lg p-4 border-0"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-flex justify-content-center align-items-center ">
            <FaRegCircleCheck size={70} className="text-success mb-3" />
          </div>
          <h3 className="fw-bold text-success">Payment Successful!</h3>
          <p className="text-muted mb-4">
            Thank you for your purchase. Your payment has been processed
            successfully with order id <strong>{orderId}</strong>.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="success" onClick={() => navigate("/")}>
              Go to Home
            </Button>
            {/* <Button variant="outline-primary" onClick={() => navigate("/orders")}>
              View Orders
            </Button> */}
          </div>
        </Card>
      ) : (
        <Card
          className="text-center shadow-lg p-4 border-0"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-flex justify-content-center align-items-center ">
            <FaTimesCircle size={70} className="text-danger mb-3" />
          </div>
          <h3 className="fw-bold text-danger">Payment Failed!</h3>
          <p className="text-muted mb-4">
            Unfortunately, your payment could not be processed. Please try again
            or contact support with order id <strong>{orderId}</strong>.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-danger" onClick={() => navigate("/")}>
              Go to Home
            </Button>
          </div>
        </Card>
      )}
    </Container>
  );
}
