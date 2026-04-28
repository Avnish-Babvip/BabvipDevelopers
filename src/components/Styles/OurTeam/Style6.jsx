import { Link } from "react-router-dom";
import { getFourInTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style6 = ({ data }) => {
  const dispatch = useDispatch();
  const { fourTeamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getFourInTeam());
  }, []);
  return (
    <>
      <section class="crypto-team bg-dark-black ptb-60">
        <div class="container">
          <div class="row align-items-center mb-30">
            <div class="col-lg-5 col-md-8">
              <div class="section-title">
                <h2 class="text-white mb-4">{data?.title}</h2>
                <p class="">{data?.description}</p>
              </div>
            </div>
            {data?.button_text && (
              <div class="col-lg-7 col-md-4">
                <div class="team-btn text-lg-end">
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    class="btn btn-primary rounded-pill"
                  >
                    {data?.button_text}
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div class="row">
            {Array.isArray(fourTeamData) &&
              fourTeamData?.map((item, idx) => (
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="single-crypto-team bg-soft-black mb-30 mb-lg-0">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.team_image
                      }`}
                      alt="team member"
                      class="img-fluid"
                    />
                    <div class="crypto-team-info pt-4 pb-1">
                      <h4 class="text-white h5 text-capitalize">
                        {" "}
                        {item?.name} {item?.lastname || ""}
                      </h4>
                      <p class="m-0 py-1"> {item?.designation}</p>
                      <ul class="crypto-team-social list-unstyled list-inline">
                        {item?.linkedin_url && (
                          <li class="list-inline-item">
                            <Link
                              to={item?.linkedin_url}
                              target={"_blank"}
                              class="text-decoration-none"
                            >
                              Linkedin
                            </Link>
                          </li>
                        )}
                        {item?.facebook_url && (
                          <li class="list-inline-item">
                            <Link
                              to={item?.facebook_url}
                              target={"_blank"}
                              class="text-decoration-none"
                            >
                              Facebook
                            </Link>
                          </li>
                        )}
                        <li class="list-inline-item">
                          {item?.instagram_url && (
                            <Link
                              to={item?.instagram_url}
                              target={"_blank"}
                              class="text-decoration-none"
                            >
                              Instagram
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Style6;
