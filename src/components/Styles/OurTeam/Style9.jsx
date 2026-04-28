import { Link } from "react-router-dom";
import { getFourInTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style9 = ({ data }) => {
  const dispatch = useDispatch();
  const { fourTeamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getFourInTeam());
  }, []);
  return (
    <>
      <style>{`
     .iconPadding {
     padding-left: 0 !important;
     }

.plummet-team-section {
  padding-bottom: 0;
  background: #fff;
}
.plummet-team-section .wpo-section-title {
  text-align: left;
}
@media (max-width: 991px) {
  .plummet-team-section .wpo-section-title {
    text-align: center;
    margin-bottom: 20px;
  }
}
@media (max-width: 1399px) {
  .plummet-team-section .wpo-section-title h2 {
    font-size: 34px;
    line-height: 40px;
  }
}
@media (max-width: 767px) {
  .plummet-team-section .wpo-section-title h2 {
    font-size: 30px;
    line-height: 35px;
  }
}
@media (max-width: 767px) {
  .plummet-team-section .wpo-section-title h2 {
    font-size: 25px;
    line-height: 35px;
  }
}
.plummet-team-section .wpo-section-title.s2 {
  text-align: center;
}
.plummet-team-section .team-btn-top {
  text-align: right;
  margin-bottom: 60px;
}
@media (max-width: 991px) {
  .plummet-team-section .team-btn-top {
    text-align: center;
  }
}

.team-wrap {
  background: #121A22;
  padding-top: 120px;
  padding-bottom: 90px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
@media (max-width: 991px) {
  .team-wrap {
    padding-top: 90px;
    padding-bottom: 60px;
  }
}
@media (max-width: 767px) {
  .team-wrap {
    padding-top: 80px;
    padding-bottom: 50px;
  }
}
.team-wrap .shape {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background: #107CDF;
}
@media (max-width: 991px) {
  .team-wrap .shape {
    display: none;
  }
}

.team-single-item {
  margin-bottom: 30px;
}
.team-single-item .image {
  position: relative;
  overflow: hidden;
  border-radius: 7px;
}
.team-single-item .image img {
  width: 100%;
  border-radius: 7px;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}
.team-single-item .image ul {
  position: absolute ;
  left: 0 ;
  bottom: 0;
  transform: translateY(-70%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}
@media (max-width: 1199px) {
  .team-single-item .image ul {
    bottom: 0;
  }
}
.team-single-item .image ul li {
  list-style: none;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #107CDF;
  text-align: center;
  border-bottom: 1px solid #a6cbf1;
  transition: all 0.3s ease-in-out;
}
.team-single-item .image ul li:nth-child(1) {
  margin-left: 10px;
  transition: all 0.7s ease-in-out;
}
.team-single-item .image ul li:nth-child(2) {
  margin-left: 8px;
  transition: all 0.5s ease-in-out;
}
.team-single-item .image ul li:nth-child(3) {
  margin-left: 6px;
  transition: all 0.3s ease-in-out;
}
.team-single-item .image ul li:nth-child(4) {
  margin-left: 0;
  border-bottom: transparent;
  transition: all 0s ease-in-out;
}
.team-single-item .image ul li:hover {
  background: #F7F2EE;
}
.team-single-item .image ul li:hover a i {
  color: #107CDF;
}
.team-single-item .image ul li a i {
  font-size: 14px;
  color: #fff;
  transition: all 0.3s ease-in-out;
}
.team-single-item .text {
  margin-top: 20px;
}
.team-single-item .text h2 {
  margin-bottom: 0;
}
.team-single-item .text h2 a {
  color: #FFF;
  font-family: "Nunito", sans-serif;
  font-size: 25px;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
}
.team-single-item .text h2:hover a {
  color: #107CDF;
}
.team-single-item .text span {
  color: #FFF;
  font-family: "Nunito", sans-serif;
  font-size: 17px;
  font-weight: 300;
  text-decoration-line: underline;
  text-transform: capitalize;
}
.team-single-item:hover .image img {
  transform: scale(1.1);
  border-radius: 7px;
}
.team-single-item:hover .image ul {
  opacity: 1;
  visibility: visible;
}
.team-single-item:hover .image ul li:nth-child(1) {
  margin-left: 0;
}
.team-single-item:hover .image ul li:nth-child(2) {
  margin-left: 0;
}
.team-single-item:hover .image ul li:nth-child(3) {
  margin-left: 0;
}`}</style>
      <section class="plummet-team-section section-padding">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-12">
              <div class="">
                <h5 className="">{data?.sub_title}</h5>
                <h2>{data?.title}</h2>
              </div>
            </div>
            {data?.button_text && (
              <div class="col-lg-6 col-12">
                <div class="team-btn-top">
                  <Link
                    to={data?.button_url}
                    target="_blank"
                    className={`btn text-white btn-primary
                   rounded mt-3 mt-lg-0 mt-md-0`}
                  >
                    {data?.button_text}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div class="team-wrap">
          <div class="container">
            <div class="row">
              {Array.isArray(fourTeamData) &&
                fourTeamData?.map((item, idx) => (
                  <div class="col-lg-3 col-md-6 col-12">
                    <div class="team-single-item">
                      <div class="image">
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.team_image
                          }`}
                          alt="team member"
                        />
                        <ul className="iconPadding">
                          {item?.facebook_url && (
                            <li>
                              <Link to={item?.facebook_url} target="_blank">
                                <i class="fab fa-facebook-f"></i>
                              </Link>
                            </li>
                          )}
                          {item?.instagram_url && (
                            <li>
                              <Link to={item?.instagram_url} target="_blank">
                                <i class="fab fa-instagram"></i>
                              </Link>
                            </li>
                          )}
                          {item?.linkedin_url && (
                            <li>
                              <Link to={item?.linkedin_url} target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                      <div class="text">
                        <h2>
                          <a href="team-single.html">
                            {" "}
                            {item?.name} {item?.lastname || ""}
                          </a>
                        </h2>
                        <span> {item?.designation}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div class="shape">
            <img
              src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                data?.banner_bg_image
              }`}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Style9;
