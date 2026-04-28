import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  resendVerifyEmailRegister,
  verifyEmailRegister,
} from "../../features/actions/authentication";

const VerifyEmailSignup = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;

  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const token = queryParams.get("token");

  const { isEmailVerified, isLoading } = useSelector(
    (state) => state.authentication,
  );

  const navigate = useNavigate();

  const handleResend = () => {
    dispatch(resendVerifyEmailRegister({ email }));
  };

  useEffect(() => {
    if (token && email) {
      dispatch(verifyEmailRegister({ token, email }));
    }
  }, []);

  useEffect(() => {
    if (isEmailVerified) {
      navigate("/login--signup");
    }
  }, [isEmailVerified]);

  return (
    <>
      <section
        className="sign-up-in-section bg-dark pb-40 d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background:
            "url('assets/img/page-header-bg.svg') no-repeat right bottom",
        }}
      >
        <div className="bg-white p-5 rounded-4 text-center shadow-sm">
          <h3 className="mb-3">Verify Your Email</h3>

          <p className="text-muted mb-4">
            We’re verifying your email. If it takes too long, you can resend the
            verification link.
          </p>

          {/* ✅ RESEND BUTTON */}
          <button
            onClick={handleResend}
            disabled={isLoading}
            className="btn w-100 text-white border-0"
            style={{
              background: "linear-gradient(90deg, #ff6600, #ff8533)",
            }}
          >
            {isLoading ? "Sending..." : "Resend Verification Email"}
          </button>

          {/* Optional: show email */}
          {email && (
            <p className="mt-3 text-muted small">
              Sent to: <strong>{email}</strong>
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default VerifyEmailSignup;
