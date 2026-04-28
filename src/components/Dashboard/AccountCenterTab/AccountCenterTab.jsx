import { Col, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveAccountCenterTab } from "../../../features/slices/references";

const AccountCenterTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Col sm={12}>
      <Nav variant="tabs" className="mb-4">
        <Nav.Item>
          <Nav.Link
            eventKey="profile"
            onClick={() => {
              dispatch(setActiveAccountCenterTab("Profile"));
              navigate("/customer/profile");
            }}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="billing"
            onClick={() => {
              dispatch(setActiveAccountCenterTab("Billing"));
              navigate("/customer/billing");
            }}
          >
            Billing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="products"
            onClick={() => {
              dispatch(setActiveAccountCenterTab("My Products"));
              navigate("/customer/products");
            }}
          >
            My Products
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="security"
            onClick={() => {
              dispatch(setActiveAccountCenterTab("Security"));
              navigate("/customer/security");
            }}
          >
            Security
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default AccountCenterTab;
