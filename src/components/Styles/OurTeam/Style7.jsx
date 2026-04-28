import { Link } from "react-router-dom";
import { getFourInTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style7 = ({ data }) => {
  const dispatch = useDispatch();
  const { fourTeamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getFourInTeam());
  }, []);
  return (
    <>
      <section class="cyber-store-product">
        <div
          class="store-bg-header"
          style={{
            background: `url(${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
              data?.banner_bg_image
            })no-repeat center center`,
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-6">
                <div class="section-heading text-center mb-5">
                  <h5 class="h6 text-white">{data?.sub_title}</h5>
                  <h2 class="text-white">{data?.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row product-row">
            {Array.isArray(fourTeamData) &&
              fourTeamData?.map((item, idx) => (
                <div class="col-lg-3 col-md-6 col-sm-12">
                  <div class="single-product position-relative mb-30">
                    <div class="product-img">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.team_image
                        }`}
                        alt="team member"
                        class="img-fluid"
                      />
                    </div>
                    <div class="product-cart-wishlist-icon">
                      {item?.linkedin_url && (
                        <Link
                          to={item?.linkedin_url}
                          target={"_blank"}
                          class="cart"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </Link>
                      )}
                      {item?.facebook_url && (
                        <Link
                          to={item?.facebook_url}
                          target={"_blank"}
                          class="heart"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                      )}
                      {item?.instagram_url && (
                        <Link
                          to={item?.instagram_url}
                          target={"_blank"}
                          style={{
                            position: "absolute",
                            top: "115px",
                            right: "15px",
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#fff",
                            lineHeight: "40px",
                            display: "inline-block",
                            textAlign: "center",
                            color: "var(--bs-primary)", // or just "#175cff" if not using CSS variables
                          }}
                        >
                          <i class="fab fa-instagram"></i>
                        </Link>
                      )}
                    </div>
                    <div class="bg-white text-center shadow-sm py-4 product-info">
                      <h6>
                        <a class="text-decoration-none">
                          {item?.name} {item?.lastname || ""}
                        </a>
                      </h6>
                      <span class="fw-bold">{item?.designation} </span>
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

export default Style7;
