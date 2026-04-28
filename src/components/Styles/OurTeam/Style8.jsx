import { Link } from "react-router-dom";
import { getFourInTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style8 = ({ data }) => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  const dispatch = useDispatch();
  const { fourTeamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getFourInTeam());
  }, []);
  return (
    <>
      <section class="sc-team-section ptb-120 bg-white position-relative z-1 overflow-hidden ">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="section-title text-center">
                <h2 class="mb-40">{data?.title}</h2>
              </div>
            </div>
          </div>
          <div class="sc-team-filter">
            <div class="text-center">
              <div class="tab-content mt-5">
                <div
                  class="tab-pane fade show active"
                  id="founder"
                  role="tabpanel"
                >
                  <div class="row g-4">
                    {Array.isArray(fourTeamData) &&
                      fourTeamData?.map((item, idx) => (
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                          <div class="sc-team-card bg-white rounded text-center rounded">
                            <div class="thumbnail d-inline-block position-relative z-1">
                              <img
                                src={`${
                                  import.meta.env.VITE_REACT_APP_IMAGE_PATH
                                }/${item?.team_image}`}
                                alt="team member"
                                class="img-fluid"
                              />
                              <img
                                src={`${assetRoute}/assets/img/software-company/team-shape.png`}
                                alt="not found"
                                class="position-absolute z--1 thumb-shape"
                              />
                            </div>
                            <h5 class="mt-4 mb-2">
                              {" "}
                              {item?.name} {item?.lastname || ""}
                            </h5>
                            <span class="d-inline-block mb-4 text-dg-color fs-sm">
                              {item?.designation}
                            </span>
                            <div class="sc-team-social d-flex justify-content-center align-items-center flex-wrap">
                              {item?.facebook_url && (
                                <Link to={item?.facebook_url} target="_blank">
                                  <i class="fab fa-facebook-f"></i>
                                </Link>
                              )}
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
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style8;
