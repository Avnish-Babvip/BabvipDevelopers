import { Container, Row, Col, Tab, Card, Form, Button } from "react-bootstrap";
import AccountCenterTab from "../../../components/Dashboard/AccountCenterTab/AccountCenterTab";
import EditProfileModal from "../../../components/Dashboard/EditProfileModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileData,
  updateProfilePhotoDashboard,
} from "../../../features/actions/dashboard";
import { useEffect } from "react";

const ProfileTab = () => {
  // const { updateResponse, isImageLoading } = useSelector(
  //   (state) => state.dashboard,
  // );
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);
  // const { profileData } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  return (
    <Container fluid>
      <h3 className="mb-4">My Account Center</h3>
      <Tab.Container defaultActiveKey="profile">
        <Row>
          {/* Tabs Navigation */}
          <AccountCenterTab />
        </Row>

        <Row>
          <Col lg={12}>
            <Tab.Content>
              {/* Profile Tab */}
              <Tab.Pane eventKey="profile">
                <Row>
                  {/* Contact Information only in Profile */}

                  <EditProfileModal />
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default ProfileTab;
