import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { customerLogout } from "../../features/actions/authentication";
import { FaRegUser } from "react-icons/fa";
import { MdDelete, MdPayment, MdVpnKey } from "react-icons/md";
import { RiBox3Fill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { getProfileData } from "../../features/actions/dashboard";

const DashboardHeader = ({ onHamburgerClick }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const dispatch = useDispatch();
  const { customerData } = useSelector((state) => state.authentication);
  const { profileData, isLoading } = useSelector((state) => state.dashboard);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  function useOutsideClick(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler();
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  return (
    <header className="w-100 z-10 p-3 pe-4 bg-white">
      <div className="d-flex justify-content-between align-items-center">
        {/* Hamburger icon only on small screens */}
        <button
          className="border-0 bg-white d-lg-none"
          onClick={onHamburgerClick}
        >
          <img
            src={`${assetRoute}/assets/img/dashboardIcons/logo.svg`}
            alt="Menu"
            style={{ width: "48px", height: "28px" }}
          />
        </button>

        <div className="d-flex align-items-center gap-4 ms-auto">
          {/* Profile with dropdown */}
          <div className="position-relative" ref={dropdownRef}>
            <div
              className="d-flex align-items-center gap-2"
              style={{ cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={
                  profileData?.profile_image
                    ? `${profileData?.profile_image}`
                    : `${assetRoute}/placeholder.webp`
                }
                height={40}
                width={40}
                className="rounded-circle"
                alt="Profile"
              />
              <span className="fw-semibold text-black">
                {profileData?.first_name} {profileData?.last_name}
              </span>
            </div>

            {dropdownOpen && (
              <div
                className="dropdown-menu show mt-2 p-2 shadow rounded-3"
                style={{
                  right: 0,
                  left: "auto",
                  minWidth: "160px",
                  position: "absolute",
                }}
              >
                <Link
                  to="/"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <IoArrowBackOutline /> <span>Back to Main Site</span>
                </Link>
                <Link
                  to="/customer/profile"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <FaRegUser /> <span>Profile</span>
                </Link>
                <Link
                  to="/customer/billing"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <MdPayment /> <span>Billing</span>
                </Link>
                <Link
                  to="/customer/products"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <RiBox3Fill /> <span>Products</span>
                </Link>
                <Link
                  to="/customer/security"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <MdVpnKey /> <span>Security</span>
                </Link>
                <Link
                  to="/customer/changePassword"
                  className="dropdown-item d-flex gap-4 align-items-center"
                >
                  <FaRegUser /> <span>Change Password</span>
                </Link>
                <Link
                  onClick={() => dispatch(customerLogout(customerData?.token))}
                  className="dropdown-item d-flex gap-4 align-items-center text-danger"
                >
                  <LuLogOut /> <span>Logout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
