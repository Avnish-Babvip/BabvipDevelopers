import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrivacyDataStyle2 } from "../../../features/actions/privacy";
import parse from "html-react-parser";

const Style2 = ({ data }) => {
  const dispatch = useDispatch();
  const { privacyData, isLoading } = useSelector((state) => state.privacy);

  console.log(privacyData);

  useEffect(() => {
    dispatch(getPrivacyDataStyle2());
  }, []);
  return (
    <>
      <section class="support-content ptb-120">
        <div class="container">
          <div class="row justify-content-between">
            <div class="support-article-wrap text-center pb-4">
              <h2>{data?.title}</h2>
            </div>
            <div class="col-lg-3 col-md-3 d-none d-md-block d-lg-block p-3 ">
              <div class="support-article-sidebar sticky-sidebar">
                <div class="nav flex-column nav-pills support-article-tab bg-light-subtle rounded-custom py-3 ">
                  {Array.isArray(privacyData) &&
                    privacyData?.map((item, idx) => (
                      <button
                        key={idx}
                        class={`nav-link ${!idx && "active"}`}
                        data-bs-target={`#support-tab-${idx + 1}`}
                        data-bs-toggle="pill"
                        type="button"
                        role="tab"
                        aria-selected={`${!idx && "true"}`}
                        style={{
                          display: "block",
                          paddingLeft: "20px",
                          textAlign: "left",
                        }}
                      >
                        {item?.category_name}
                      </button>
                    ))}
                </div>
              </div>
            </div>

            <div class="col-lg-9 col-md-9">
              <div class="tab-content" id="v-pills-supportContent">
                {Array.isArray(privacyData) &&
                  privacyData?.map((item, idx) => (
                    <div
                      key={idx}
                      class={`tab-pane fade show ${!idx && "active"}`}
                      id={`support-tab-${idx + 1}`}
                      role="tabpanel"
                    >
                      {Array.isArray(item?.privacy_policies) &&
                        item.privacy_policies?.map((item2, idx2) => (
                          <p>{parse(String(item2?.description))}</p>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style2;
