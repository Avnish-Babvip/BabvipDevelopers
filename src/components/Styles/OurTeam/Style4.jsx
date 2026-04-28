import { Link } from "react-router-dom";
import { getTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style4 = ({ data }) => {
  const dispatch = useDispatch();
  const { teamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);
  return (
    <>
      <section class="ins-team-section ptb-120">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5">
              <div class="ins-title text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="subtitle fw-bold">{data?.sub_title}</span>
                  <span class="ms-1">
                    <svg
                      width="103"
                      height="13"
                      viewBox="0 0 103 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.696533 6.60583L93.3054 6.60584"
                        stroke="#0EE7C5"
                        stroke-width="1.49369"
                      ></path>
                      <path
                        d="M102.266 6.60263L93.3036 11.7769L93.3036 1.42833L102.266 6.60263Z"
                        fill="#0EE7C5"
                      ></path>
                    </svg>
                  </span>
                </div>
                <h2 class="ins-heading mb-0 mt-2">
                  {data?.title} <mark>{data?.highlighted_title}</mark>
                </h2>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center g-4">
              {Array.isArray(teamData) &&
                teamData?.map((item, idx) => (
                  <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="ins-team-card text-center bg-white rounded">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.team_image
                        }`}
                        class="img-fluid rounded-circle"
                      />
                      <h6 class="ins-heading mt-4 mb-0">
                        {item?.name} {item?.lastname || ""}
                      </h6>
                      <span class="designation fs-sm ins-text">
                        {item?.designation}
                      </span>
                      <p class="mt-3 mb-4"> </p>
                      <div class="ins-team-social d-flex align-items-center flex-wrap justify-content-center">
                        {item?.linkedin_url && (
                          <Link to={item?.linkedin_url} target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                          </Link>
                        )}
                        {item?.instagram_url && (
                          <Link to={item?.instagram_url} target="_blank">
                            <i class="fab fa-instagram"></i>
                          </Link>
                        )}
                        {item?.facebook_url && (
                          <Link to={item?.facebook_url} target="_blank">
                            <i class="fab fa-facebook-f"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <p class="mb-0 mt-5 ins-center-explore ins-text text-center">
              {data?.description}{" "}
              {data?.link_text && (
                <Link
                  to={data?.link_text}
                  target="_blank"
                  class="fw-semibold text-decoration-underline"
                >
                  {data?.link_text}
                </Link>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style4;
