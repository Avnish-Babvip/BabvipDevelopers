import { Link } from "react-router-dom";
import { getTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style1 = ({ data }) => {
  const dispatch = useDispatch();
  const { teamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);
  return (
    <section class="team-section ptb-80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-12">
            <div class="section-heading text-center">
              <h5 class="h6 text-primary">{data?.subtitle}</h5>
              <h2>{data?.title}</h2>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
        <div class="row">
          {Array.isArray(teamData) &&
            teamData?.map((item, idx) => (
              <div key={idx} class="col-lg-3 col-md-6">
                <div class="team-single-wrap mt-5">
                  <div class="team-img rounded-custom">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.team_image
                      }`}
                      alt="team"
                      class="img-fluid position-relative"
                    />
                    <ul class="list-unstyled team-social-list d-flex flex-column mb-0">
                      {item?.linkedin_url && (
                        <li class="list-inline-item">
                          <Link to={item?.linkedin_url} target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                      )}
                      {item?.instagram_url && (
                        <li class="list-inline-item">
                          <Link to={item?.instagram_url} target="_blank">
                            <i class="fab fa-instagram"></i>
                          </Link>
                        </li>
                      )}

                      {item?.facebook_url && (
                        <li class="list-inline-item">
                          {" "}
                          <Link to={item?.facebook_url} target="_blank">
                            <i class="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div class="team-info mt-4 text-center">
                    <h5 class="h6 mb-1">
                      {item?.name} {item?.lastname || ""}
                    </h5>
                    <p class="text-muted small mb-0">{item?.designation}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Style1;
