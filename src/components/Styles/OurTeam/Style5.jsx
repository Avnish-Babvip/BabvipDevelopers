import { Link } from "react-router-dom";
import { getTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style5 = ({ data }) => {
  const dispatch = useDispatch();
  const { teamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);
  return (
    <>
      <div class="it-company-team-area it-company-bg-two ptb-120 position-relative z-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <h2 class="it-company-title it-company-color fs-40 fw-600 flh-56 mb-30">
                  {data?.title}
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            {Array.isArray(teamData) &&
              teamData?.map((item, idx) => (
                <div class="col-xl-3 col-md-6">
                  <div class="it-company-team-item bg-white text-center p-50 rounded-12 mt-20 position-relative">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.team_image
                      }`}
                      alt=""
                      class="mb-30 img-fluid"
                    />
                    <h5 class="it-company-color fs-20 fw-700">
                      {item?.name} {item?.lastname || ""}
                    </h5>
                    <p class="clr-paragraph flh-24 mb-0">
                      {" "}
                      {item?.designation}
                    </p>
                    <div class="it-company-team-social">
                      {item?.linkedin_url && (
                        <Link
                          to={item?.linkedin_url}
                          target="_blank"
                          class="it-company-team-social-icon it-company-bg text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </Link>
                      )}
                      {item?.instagram_url && (
                        <Link
                          to={item?.instagram_url}
                          target="_blank"
                          class="it-company-team-social-icon it-company-bg-four text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                        >
                          <i class="fab fa-instagram"></i>
                        </Link>
                      )}
                      {item?.facebook_url && (
                        <Link
                          to={item?.facebook_url}
                          target="_blank"
                          class="it-company-team-social-icon it-company-bg-five text-white d-inline-flex align-items-center justify-content-center rounded-circle"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Style5;
