import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { sendInternInfo } from "../features/actions/intern";
import ButtonLoader from "../components/Loader/ButtonLoader";
import { useEffect, useRef, useState } from "react";
import { instance } from "../services/axiosInterceptor";
import { clearInternData } from "../features/slices/intern";

const getDownloadCertificate = async (id, setIsDownloading) => {
  try {
    setIsDownloading(true); // start loading

    const response = await instance.get(`/site/downloadcertificate/${id}`, {
      responseType: "blob",
    });

    const blob = new Blob([response.data], { type: "application/pdf" });

    const fileURL = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = fileURL;
    link.setAttribute("download", `certificate-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Failed to download certificate", error);
  } finally {
    setIsDownloading(false); // stop loading
  }
};

const DownloadCertificate = () => {
  const dispatch = useDispatch();
  const [isDownloading, setIsDownloading] = useState(false);

  const { internData, isLoading, response } = useSelector(
    (state) => state.intern
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(sendInternInfo(data));
  };

  const dataSectionRef = useRef(null);

  useEffect(() => {
    if (internData && dataSectionRef.current) {
      dataSectionRef.current.scrollIntoView({ behavior: "smooth" });
      reset();
    }
  }, [internData]);

  useEffect(() => {
    dispatch(clearInternData());
  }, []);

  return (
    <div style={{ background: "linear-gradient(90deg, #2811eb, #010110e3)" }}>
      <div className="py-10   container d-flex flex-column justify-content-center align-items-center gap-4 px-3">
        <h2 className="text-center mt-20 mt-md-1 text-white">
          Download Your Certificate
        </h2>

        <p className="text-center w-100 w-md-50 text-white">
          Download your official certificate to showcase your accomplishment.
          It's a proof of your successful completion of the course and can be
          used for resumes, portfolios, or future academic and career
          opportunities.
        </p>

        {response.status === 202 && (
          <p className="text-center fw-600 w-100 w-md-50 text-danger">
            ⏳ You're still in progress! Please complete your program to
            download your certificate.
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
          <div className="row g-3 justify-content-center">
            <div className="col-12 col-md-5">
              <input
                {...register("intern_code", {
                  required: "Intern ID is required",
                })}
                type="text"
                className="form-control"
                placeholder="Enter Your Intern ID"
              />
              {errors.intern_code && (
                <small className="text-danger">
                  {errors.intern_code.message}
                </small>
              )}
            </div>

            <div className="col-12 col-md-5">
              <input
                {...register("dob", {
                  required: "Date of birth is required",
                })}
                type="date"
                className="form-control"
              />
              {errors.dob && (
                <small className="text-danger">{errors.dob.message}</small>
              )}
            </div>
          </div>

          <div ref={dataSectionRef} className="text-center mt-3">
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-primary px-4 py-2"
            >
              {isLoading ? <ButtonLoader /> : "Submit"}
            </button>
          </div>
        </form>

        {/* Show intern data if available */}
        {internData && (
          <div
            className="mt-5 w-100 p-4 rounded shadow"
            style={{
              background: "linear-gradient(to bottom right, #fffefc, #fdf6ec)",
              border: "1px solid #e0dcd0",
            }}
          >
            <h4 className="text-center mb-4">Intern Information</h4>
            <div className="row g-3 mb-2">
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">
                    Certificate Number:
                  </strong>{" "}
                  {internData?.certificate_number}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Course Name:</strong>{" "}
                  {internData?.course?.course_name}
                </div>
              </div>
            </div>
            <div className="row g-3 mb-2">
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Course duration:</strong>{" "}
                  {internData?.course?.course_duration}{" "}
                  {internData?.course?.course_duration_type === "m"
                    ? internData?.course?.course_duration > 1
                      ? "Months"
                      : "Month"
                    : internData?.course?.course_duration_type === "y"
                    ? internData?.course?.course_duration > 1
                      ? "Years"
                      : "Year"
                    : internData?.course?.course_duration_type === "w"
                    ? internData?.course?.course_duration > 1
                      ? "Weeks"
                      : "Week"
                    : ""}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Intern ID:</strong>{" "}
                  {internData?.intern_code}
                </div>
              </div>
            </div>
            <div className="row g-3 mb-2">
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Start Date:</strong>{" "}
                  {internData?.start_date}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">End Date:</strong>{" "}
                  {internData?.end_date}
                </div>
              </div>
            </div>
            <div className="row g-3 mb-2">
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">First Name:</strong>{" "}
                  {internData?.first_name}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Last Name:</strong>{" "}
                  {internData?.last_name}
                </div>
              </div>
            </div>

            <div className="row g-3 mb-2">
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Email:</strong>{" "}
                  {internData?.email}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Gender:</strong>{" "}
                  {internData?.gender}
                </div>
              </div>
            </div>
            <div className="row g-3 mb-2">
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Country:</strong>{" "}
                  {internData?.country}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">State:</strong>{" "}
                  {internData?.state}
                </div>
              </div>
            </div>
            <div className="row g-3 mb-2">
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">City:</strong>{" "}
                  {internData?.city}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="border p-3 rounded bg-light">
                  <strong className="text-capitalize">Address:</strong>{" "}
                  {internData?.address}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  if (internData) {
                    getDownloadCertificate(internData?.id, setIsDownloading);
                  } else {
                    alert(
                      "Intern data is not available or Try Again submitting the data!"
                    );
                  }
                }}
                className={`btn  btn-primary
        rounded mt-3 `}
              >
                {" "}
                {isDownloading ? (
                  <ButtonLoader />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"
                        fill="#1C274C"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z"
                        fill="#1C274C"
                      />
                    </svg>{" "}
                    <span className="ps-2 pe-2">Download</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadCertificate;
