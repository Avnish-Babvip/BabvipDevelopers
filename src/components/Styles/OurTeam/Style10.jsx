import { Link } from "react-router-dom";
import { getTeam } from "../../../features/actions/team";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Style10 = ({ data }) => {
  const dispatch = useDispatch();
  const { teamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);
  return (
    <>
      <style>{`
.pos-vertical-center {
	position: relative;
	top: 50%;
	-webkit-transform: perspective(1px) translateY(-50%);
	-moz-transform: perspective(1px) translateY(-50%);
	-o-transform: perspective(1px) translateY(-50%);
	transform: perspective(1px) translateY(-50%);
}
      .mb-50 {
	margin-bottom: 50px !important;
}
      .team {
	padding-bottom: 80px;
}
      .section-padding {
  padding: 120px 0;
}
@media (max-width: 991px) {
  .section-padding {
    padding: 90px 0;
  }
}
@media (max-width: 767px) {
  .section-padding {
    padding: 80px 0;
  }
}


/* Team shadow */
.team-shadow .member {
	-webkit-box-shadow: 0 0 18px rgba(40, 40, 40, 0.12);
	-moz-box-shadow: 0 0 18px rgba(40, 40, 40, 0.12);
	-ms-box-shadow: 0 0 18px rgba(40, 40, 40, 0.12);
	box-shadow: 0 0 18px rgba(40, 40, 40, 0.12);
	border-radius: 2px;
}

.member {
	text-align: center;
	overflow: hidden;
}

.member:hover .member-img img {
	-webkit-transform: scale(1.1);
	-moz-transform: scale(1.1);
	-o-transform: scale(1.1);
	transform: scale(1.1);
}

.member .member-img {
	position: relative;
	margin-bottom: 0;
	overflow: hidden;
}

.member .member-img img {
	max-width: 100%;
	height: auto;
	-webkit-transition: all 0.35s;
	-moz-transition: all 0.35s;
	-o-transition: all 0.35s;
	transition: all 0.35s;
}

.member .member-overlay {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}

.member .member-overlay .member-hover {
	border-radius: 2px;
	background-color: rgba(34, 34, 34, 0.9);
	width: 100%;
	height: 100%;
	-webkit-transition: all 0.35s;
	-moz-transition: all 0.35s;
	-o-transition: all 0.35s;
	transition: all 0.35s;
	opacity: 0;
}

.member:hover .member-overlay .member-hover {
	opacity: 1;
}

.member .member-hover a {
	height: 42px;
	width: 42px;
	line-height: 42px;
	background-color: #bb9356;
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
	margin-right: 10px;
	display: inline-block;
}

.member .member-hover a:last-child {
	margin-right: 0;
}

.member .member-hover a:hover {
	color: #bb9356;
	background-color: #ffffff;
}

.member .member-desc {
	padding: 15px;
	font-size: 15px;
	color: #9b9b9b;
	margin-bottom: 0;
}

.member .member-desc p {
	font-size: 14px;
	line-height: 23px;
}

.member .member-info {
	padding-top: 30px;
}

.member .member-info h5 {
	color: #282828;
	font-size: 17px;
	font-weight: 600;
	line-height: 1;
	text-transform: capitalize;
	margin-bottom: 14px;
}

.member .member-info h6 {
	color: #a5a5a5;
	font-size: 13px;
	font-weight: 400;
	line-height: 1;
	margin-bottom: 0;
}

/*  team 3 */
.team-3 .member {
	text-align: center;
}

.team-3 .member .member-social {
	position: relative;
	-webkit-transform: translateY(80px);
	-moz-transform: translateY(80px);
	-o-transform: translateY(80px);
	transform: translateY(80px);
	-webkit-transition: all 0.35s;
	-moz-transition: all 0.35s;
	-o-transition: all 0.35s;
	transition: all 0.35s;
}

.team-3 .member .member-info {
	position: relative;
	-webkit-transform: translateY(140px);
	-moz-transform: translateY(140px);
	-o-transform: translateY(140px);
	transform: translateY(140px);
	-webkit-transition: all 0.35s;
	-moz-transition: all 0.35s;
	-o-transition: all 0.35s;
	transition: all 0.35s;
}

.team-3 .member .member-info h5 {
	color: #ffffff;
}

.team-3 .member:hover .member-overlay .member-hover .member-social {
	transform: translateY(30px);
}

.team-3 .member:hover .member-overlay .member-hover .member-info {
	transform: translateY(170px);
}

/*  team 4 */
.team-4 .member .member-desc {
	padding: 0;
}

.team-4 .member .member-desc p {
	padding: 0 18px;
}

.team-4 .member .member-hover {
	margin-top: 25px;
}

.team-4 .member .member-hover a {
	color: #333333;
}

.team-4 .member .member-hover a:hover {
	color: #bb9356;
}

.team-4 .divider--line {
	margin-top: 18px;
	margin-bottom: 15px;
	width: 100%;
	height: 16px;
	background: url(../images/background/shapes/shape-4.png) center no-repeat;
}

.team-4 .divider--line:after {
	display: none;
}

.team-4 .member .member-hover a {
	height: auto;
	width: auto;
	line-height: 1;
	background-color: transparent;
	color: #333333;
	font-size: 14px;
	font-weight: 400;
	margin-right: 10px;
	display: inline-block;
}

.team-4 .member .member-hover a:hover {
	color: #bb9356;

  @media only screen and (min-width: 320px) and (max-width: 991px) {
  .member {
    margin-bottom: 30px;
  }
  .member .member-img {
    max-width: 270px;
    margin-right: auto;
    margin-left: auto;
  }
}

}
`}</style>
      <section class="team ">
        <div class="container ">
          <div class="row container  align-items-center mt-3 mt-sm-0 mb-50">
            <div class="col-lg-6 col-12">
              <div class="text-center text-lg-start">
                <h2>{data?.title}</h2>
              </div>
            </div>
            {data?.button_text && (
              <div class="col-lg-6 col-12 pr-0 d-flex  justify-content-center justify-content-lg-end">
                <Link
                  to={data?.button_url}
                  target="_blank"
                  className={`btn text-white btn-primary
                   rounded mt-3 mt-lg-0 mt-md-0`}
                >
                  {data?.button_text}
                </Link>
              </div>
            )}
          </div>

          <div class="row  g-5">
            {Array.isArray(teamData) &&
              teamData?.map((item, idx) => (
                <div class="col-xs-12 col-sm-6 col-md-3">
                  <div class="member">
                    <div class="member-img">
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                          item?.team_image
                        }`}
                        alt="team member"
                      />
                      <div class="member-overlay">
                        <div class="member-hover">
                          <div class="pos-vertical-center">
                            <div class="member-social iconPosition">
                              {item?.linkedin_url && (
                                <Link to={item?.linkedin_url} target="_blank">
                                  <i class="fab fa-linkedin-in"></i>
                                </Link>
                              )}
                              {item?.facebook_url && (
                                <Link to={item?.facebook_url} target="_blank">
                                  <i class="fab fa-facebook-f"></i>
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
                      </div>
                    </div>

                    <div class="member-info">
                      <h5>
                        {" "}
                        {item?.name} {item?.lastname || ""}
                      </h5>
                      <h6> {item?.designation}</h6>
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

export default Style10;
