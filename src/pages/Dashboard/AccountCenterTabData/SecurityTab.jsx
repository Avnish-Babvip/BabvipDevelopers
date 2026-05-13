import { Container, Row, Col, Tab, Card, Button } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import { useNavigate } from "react-router-dom";

const SecurityTab = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <h3 className="mb-4">My Account Center</h3>
      <Tab.Container defaultActiveKey="security">
        <Row>
          {/* Tabs Navigation */}
          <AccountCenterTab />
        </Row>

        {/* Tabs Content */}
        <Row>
          <Col lg={12}>
            <Tab.Content>
              {/* Security Tab */}
              <Tab.Pane eventKey="security">
                <Col lg={6}>
                  {" "}
                  <Card className="mb-3">
                    <Card.Body>
                      <h6>Main password</h6>
                      <p>
                        The main password allows unrestricted access to the
                        account. It is also used for SFTP and SSH. When logged
                        in with the main password, you can change all other
                        passwords.
                      </p>
                      <Button
                        onClick={() => navigate("/customer/changePassword")}
                        variant="primary"
                      >
                        Change password
                      </Button>
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

export default SecurityTab;
