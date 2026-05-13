import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { customerLogout } from "../../features/actions/authentication";
import { LuLogOut } from "react-icons/lu";
import { RiBox3Fill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdPayment, MdVpnKey } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { setActiveAccountCenterTab } from "../../features/slices/references";
import { FiCalendar } from "react-icons/fi";

const DashboardSidebar = ({ closeSidebar }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);
  const { activeTab } = useSelector((state) => state.references);

  // All non-dropdown menu items in order
  const menuItems = [
    { label: "Home", icon: IoHomeOutline, url: "/customer/dashboard" },
    {
      label: "My Appointments",
      icon: FiCalendar,
      url: "/customer/appointment",
    },
    {
      label: "Service Plan Enquiry",
      icon: RiBox3Fill,
      url: "/customer/plan-enquiry",
    },
    { label: "My Products", icon: RiBox3Fill, url: "/customer/products" },
    { label: "Profile", icon: FaRegUser, url: "/customer/profile" },
    { label: "Billing", icon: MdPayment, url: "/customer/billing" },
    { label: "Security", icon: MdVpnKey, url: "/customer/security" },
  ];

  return (
    <div className="d-flex flex-column align-items-center w-100 py-4">
      {/* Logo */}
      <Link to={"/"} className="navbar-brand mb-5 text-decoration-none">
        <img
          src={`${assetRoute}/assets/img/dashboardIcons/logo.svg`}
          className="mx-auto d-block"
          height={50}
          width={100}
          alt="Logo"
        />
      </Link>

      {/* Menu */}
      <div className="d-flex flex-column w-100">
        {/* Loop through menu items */}
        {menuItems.map((item) => {
          const ItemLogo = item.icon;
          const isActive = activeTab === item.label;
          return (
            <div
              key={item.label}
              onClick={() => {
                dispatch(setActiveAccountCenterTab(item.label));
                item.url && navigate(item.url);
                if (closeSidebar) closeSidebar();
              }}
              className="d-flex align-items-center gap-3 px-3 py-3"
              style={{
                cursor: "pointer",
                color: isActive ? "#0096FF" : "",
                borderRight: isActive ? "5px solid #0096FF" : "none",
              }}
            >
              <ItemLogo
                style={{
                  height: "20px",
                  width: "20px",
                  filter: isActive ? "" : "grayscale(100%)",
                }}
              />
              <span className="fw-medium">{item.label}</span>
            </div>
          );
        })}

        {/* Logout */}
        <div
          onClick={() => {
            dispatch(customerLogout(customerData?.login_token));
          }}
          className="d-flex align-items-center gap-3 px-4 py-3"
          style={{ cursor: "pointer" }}
        >
          <LuLogOut
            className="text-danger"
            style={{ height: "20px", width: "20px" }}
          />
          <span className="fw-medium text-danger">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
