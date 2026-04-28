import { Container, Row, Col, Tab, Card, Table } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import { getCustomerProducts } from "../../../features/actions/authentication";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductTab = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  const dispatch = useDispatch();
  const { customerData, productData } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    dispatch(getCustomerProducts(customerData?.login_token));
  }, []);

  return (
    <Container fluid>
      <h3 className="mb-4">My Account Center</h3>
      <Tab.Container defaultActiveKey="products">
        <Row>
          {/* Tabs Navigation */}
          <AccountCenterTab />
        </Row>

        {/* Tabs Content */}
        <Row>
          <Col md={12}>
            <Tab.Content>
              {/* Billing Tab */}
              <Tab.Pane eventKey="products">
                <Col md={12}>
                  <Card className="mb-3 h-100">
                    <Card.Body>
                      <h6 className="pb-2">My Products</h6>

                      <Table responsive bordered={false} hover>
                        <thead>
                          <tr>
                            <th>Product name</th>
                            <th>Expiration date</th>
                            <th>Plan</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.isArray(productData) &&
                            productData.map((d, i) => (
                              <tr key={i}>
                                <td>{d?.software?.software_name}</td>
                                <td>{formatDate(d?.software_end_date)}</td>
                                <td>{d?.plan?.plan_name}</td>
                                <td
                                  className="text-primary"
                                  style={{ cursor: "pointer" }}
                                >
                                  <Link
                                    to={`/customer/renew-checkout`}
                                    state={{
                                      productId: d?.id,
                                    }}
                                  >
                                    Renew Now
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                </Col>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ProductTab;
