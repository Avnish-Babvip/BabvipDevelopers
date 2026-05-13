import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { getRouteDataBySlug } from "../features/actions/dynamicRootPage";
import { useParams } from "react-router-dom";
import { getHomeData } from "../features/actions/home";
import Loader from "../components/Loader/Loader";
import HeroSection from "../components/Styles/HeroSection/HeroSection";
import Testimonial from "../components/Styles/Testimonial/Testimonial";
import CallToAction from "../components/Styles/CallToAction/CallToAction";
import TabStyle from "../components/Styles/TabStyle/TabStyle";
import ServicesStyle from "../components/Styles/ServicesStyle/ServicesStyle";
import WorkProcessStyle from "../components/Styles/WorkProcessStyle/WorkProcessStyle";
import PricingStyle from "../components/Styles/PricingStyle/PricingStyle";
import Accordions from "../components/Styles/Accordions/Accordions";
import Features from "../components/Styles/Features/Features";
import IntegrationStyle from "../components/Styles/IntegrationStyle/IntegrationStyle";
import ContactUs from "../components/Styles/ContactUs/ContactUs";
import Portfolio from "../components/Styles/Portfolio/Portfolio";
import OurTeam from "../components/Styles/OurTeam/OurTeam";
import HelpCenter from "../components/Styles/HelpCenter/HelpCenter";
import BlogStyle from "../components/Styles/BlogStyle/BlogStyle";
import PrivacyAndTerms from "../components/Styles/PrivacyAndTerms/PrivacyAndTerms";
import NotFound from "./NotFound";
import Insight from "../components/Styles/Insight/Insight";

const DynamicRootPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { page_data, data } = useSelector(
    (state) => state.dynamicRootPage.routeData,
  );
  const { isLoading: isDynamicLoading } = useSelector(
    (state) => state.dynamicRootPage,
  );

  const { homeData, isLoading: isHomeLoading } = useSelector(
    (state) => state.home,
  );

  const isLoading = isDynamicLoading || isHomeLoading;

  // Adding meta and scripts
  const mainData = slug ? data : homeData?.page_section_data;

  const metaTitle = slug
    ? page_data?.page_data?.meta_title
    : homeData?.page_data?.page_data?.meta_title;

  const metaDescription = slug
    ? page_data?.page_data?.meta_description
    : homeData?.page_data?.page_data?.meta_description;

  const pageHeadScripts = slug
    ? page_data?.page_data?.page_head_script
    : homeData?.page_data?.page_data?.page_head_script;

  const pageBodyScripts = slug
    ? page_data?.page_data?.page_body_script
    : homeData?.page_data?.page_data?.page_body_script;

  const componentMap = {
    Hero: HeroSection,
    Testimonial: Testimonial,
    "Call To Action": CallToAction,
    Tab: TabStyle,
    Service: ServicesStyle,
    "Work Process": WorkProcessStyle,
    Pricing: PricingStyle,
    Faq: Accordions,
    Feature: Features,
    Integration: IntegrationStyle,
    "Our Team": OurTeam,
    Blog: BlogStyle,
    Contact: ContactUs,
    "Help Center": HelpCenter,
    Portfolio: Portfolio,
    "Privacy & Terms": PrivacyAndTerms,
    Insight: Insight,
  };

  useEffect(() => {
    if (slug) {
      dispatch(getRouteDataBySlug(slug));
    } else {
      dispatch(getHomeData());
    }
  }, [slug]);

  // useEffect(() => {
  //   dispatch(getAllSiteSettings());
  // }, [slug]);

  useEffect(() => {
    const canonicalUrl = window.location.href.split("?")[0]; // remove query params if you want
    let link = document.querySelector("link[rel='canonical']");

    if (link) {
      // update existing
      link.setAttribute("href", canonicalUrl);
    } else {
      // create new
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonicalUrl);
      document.head.appendChild(link);
    }
  }, [slug]);

  useEffect(() => {
    let bodyScriptWrapper;

    if (pageBodyScripts) {
      bodyScriptWrapper = document.createElement("div");
      bodyScriptWrapper.innerHTML = pageBodyScripts;
      bodyScriptWrapper.setAttribute("data-script", "body-script"); // For cleanup
      document.body.prepend(bodyScriptWrapper);
    }

    return () => {
      if (bodyScriptWrapper) document.body.removeChild(bodyScriptWrapper);
    };
  }, [pageBodyScripts]);

  console.log(mainData);

  return (
    <>
      <Helmet>
        <title>{metaTitle || "Babvip"}</title>
        <meta
          name="description"
          content={metaDescription || "Babvip Description"}
        />
        {/* ✅ Open Graph Tags */}
        <meta property="og:title" content={metaTitle || "Babvip"} />
        <meta
          property="og:description"
          content={metaDescription || "Babvip Description"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Babvip" />
        <meta
          property="og:image"
          content={
            slug
              ? `${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  page_data?.page_data?.og_graph_image
                }`
              : `${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  homeData?.page_data?.page_data?.og_graph_image
                }`
          }
        />
        {/* ✅ Inject head script safely */}
        {pageHeadScripts && (
          <script dangerouslySetInnerHTML={{ __html: pageHeadScripts }} />
        )}
        \
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : Array.isArray(mainData) && mainData.length > 0 ? (
        mainData.map((item, idx) => {
          const Component = componentMap[item?.section_name];

          if (!Component) {
            console.warn(
              `Component for section "${item?.section_name}" not found.`,
            );
            return null; // Prevents React from crashing
          }

          return (
            <Component
              key={idx}
              data={item?.page_section_data}
              styleName={item?.section_style_name}
            />
          );
        })
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DynamicRootPage;
