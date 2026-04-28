const Loader = () => {
  const assetRoute = `${
    import.meta.env.VITE_PRODUCTION === "true"
      ? import.meta.env.VITE_ASSETS
      : ""
  }`;
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-white">
      {/* <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
      <img
        src={`${assetRoute}/assets/img/loader-white.gif`}
        class="img-fluid preloader-icon object-fit-contain"
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
    </div>
  );
};

export default Loader;
