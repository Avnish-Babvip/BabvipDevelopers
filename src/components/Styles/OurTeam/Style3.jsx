import { Link } from "react-router-dom";
import { getTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style3 = ({ data }) => {
  const dispatch = useDispatch();
  const { teamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);
  return (
    <>
      <section class="speaker-list bg-light-subtle pt-120 pb-80">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="text-center mb-5">
                <h2>{data?.title}</h2>
              </div>
            </div>
          </div>
          <div class="row">
            {Array.isArray(teamData) &&
              teamData?.map((item, idx) => (
                <div class="col-lg-3 col-md-6">
                  <div class="single-speaker bg-white mb-4">
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.team_image
                      }`}
                      alt="speaker"
                      width="100"
                      class="mb-3"
                    />
                    <h5 class="h6 m-0">
                      {item?.name} {item?.lastname || ""}
                    </h5>
                    <span class="small fw-bold">{item?.designation}</span>
                    <div class="sp-social mt-3">
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
        </div>
      </section>
    </>
  );
};

export default Style3;
