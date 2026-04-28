import { useEffect } from "react";
import { Container, Row, Col, Card, Badge, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DashboardDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // const { software, plan } = useSelector(
  //   (state) => state.dashboard.detailDashboardData
  // );

  // useEffect(() => {
  //   dispatch(getDetailDashboardData(id));
  // }, [dispatch, id]);

  return (
    <Container className="my-5">
      <Row>
        {/* Left Side - Software Info */}
        {/* <Col md={7}>
          <h2 className="fw-bold">{software.software_name}</h2>
          <Badge
            bg={software.status ? "success" : "secondary"}
            className="mb-3"
          >
            {software.status ? "Active" : "Inactive"}
          </Badge>
          <p className="text-muted">{software.short_description}</p>

          <Card className="shadow-sm border-0 mt-3">
            <Card.Body>
              <div dangerouslySetInnerHTML={{ __html: software.description }} />
            </Card.Body>
          </Card>
        </Col> */}

        {/* Right Side - Image + Plan */}
        <Col md={5} className="mb-4">
          {/* Software Image */}
          {/* <Card className="shadow-sm border-0 mb-3">
            <Card.Body className="text-center">
              <Image
                src={`${
                  import.meta.env.VITE_REACT_APP_IMAGE_PATH
                }/software-images/${software.software_image}`}
                alt={software.software_name}
                fluid
                rounded
              />
            </Card.Body>
          </Card> */}

          {/* Plan Pricing */}
          {/* {plan && (
            <Card className="shadow-sm border-0">
              <Card.Body className="text-center">
                <h5 className="fw-bold">{plan.plan_name}</h5>
                <h4 className="text-success fw-bold">
                  ₹{parseFloat(plan.plan_price).toLocaleString()}
                </h4>
                {parseFloat(plan.plan_discount) > 0 && (
                  <p className="text-danger">
                    Discount: ₹{parseFloat(plan.plan_discount).toLocaleString()}
                  </p>
                )}
              </Card.Body>
            </Card>
          )} */}
        </Col>
      </Row>
    </Container>
  );
}
