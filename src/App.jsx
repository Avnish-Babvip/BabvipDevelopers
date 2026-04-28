import { RouterProvider } from "react-router-dom";
import "./App.css";
import { appRouter, maintenanceAppRouter } from "./routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { getAllHeadMenu } from "./features/actions/headMenu";
import { getAllFooterMenu } from "./features/actions/footerMenu";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./components/Loader/Loader";
import { Toaster } from "sonner";
import { getAllSiteSettings } from "./features/actions/siteSettings";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.siteSettings);
  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData,
  );

  useEffect(() => {
    dispatch(getAllHeadMenu());
    dispatch(getAllFooterMenu());
    dispatch(getAllSiteSettings());
  }, []);

  useEffect(() => {
    if (siteSetting?.setting_data?.site_favicon) {
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon) {
        favicon.href = `${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
          siteSetting.setting_data.site_favicon
        }`;
      }
    }

    const theme = siteSetting?.setting_data?.navigation_type || "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [siteSetting]);

  useEffect(() => {
    if (siteSetting?.setting_data?.header_script) {
      // Inject html into head
      document.head.innerHTML += siteSetting?.setting_data?.header_script;
    }
  }, [siteSetting]);

  useEffect(() => {
    if (siteSetting?.setting_data?.footer_script) {
      const scriptTag = document.createElement("div");
      scriptTag.innerHTML = siteSetting?.setting_data?.footer_script;
      document.body.appendChild(scriptTag);
    }

    return () => {
      // Cleanup script when component unmounts
      document
        .querySelectorAll("div[script-dynamic]")
        .forEach((el) => el.remove());
    };
  }, [siteSetting]);

  // useEffect(() => {
  //   // Disable Right Click
  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };

  //   // Disable Copy, Paste, Cut & DevTools Shortcuts
  //   const disableKeyboardShortcuts = (event) => {
  //     if (
  //       event.ctrlKey &&
  //       ["c", "v", "x", "u", "s", "p"].includes(event.key.toLowerCase()) // Prevent Copy, Paste, Cut, View Source, Save
  //     ) {
  //       event.preventDefault();
  //     }
  //     if ([123, 73, 74].includes(event.keyCode) && (event.ctrlKey || event.metaKey)) {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", disableRightClick);
  //   document.addEventListener("keydown", disableKeyboardShortcuts);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //     document.removeEventListener("keydown", disableKeyboardShortcuts);
  //   };
  // }, []);

  return (
    <HelmetProvider>
      <Toaster richColors containerClassName="overflow-auto" />
      {isLoading ? (
        <Loader />
      ) : (
        <RouterProvider
          key={siteSetting?.setting_data?.page_is_home || "default"} // Ensures re-render when settings change
          router={
            siteSetting?.setting_data?.page_is_home !== "0"
              ? appRouter
              : maintenanceAppRouter
          }
        />
      )}
    </HelmetProvider>
  );
}

export default App;
