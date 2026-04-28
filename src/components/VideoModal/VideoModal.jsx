import React, { useState } from "react";

const VideoModal = ({ videoUrl, setShowVideo }) => {
  // Extract YouTube Video ID
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.includes("youtube.com")
      ? new URL(url).searchParams.get("v")
      : url.includes("youtu.be")
      ? url.split("/").pop()
      : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : "";
  };

  return (
    <>
      {/* Video Popup */}
      <div className="video-popup">
        {/* Close Button (Outside Video) */}
        <button className="close-video" onClick={() => setShowVideo(false)}>
          &times;
        </button>

        <div className="video-popup-content">
          <div className="video-container">
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Popup Styling */}
      <style>{`
        .video-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 0; /* No padding on X-axis */
        }
        .video-popup-content {
          position: relative;
          background: #000;
          border-radius: 10px;
          width: 100%;
          max-width: 900px;
        }
        .video-container {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }

        /* Close Button (Top-Right, Outside Video) */
        .close-video {
          position: absolute;
          top: 15px;
          right: 15px;
          font-size: 30px;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: #fff;
          cursor: pointer;
          z-index: 9999;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }
        .close-video:hover {
          background: rgba(255, 255, 255, 0.8);
          color: #000;
        }

        /* No Padding on X-Axis */
        @media (max-width: 768px) {
          .video-popup-content {
            width: 100vw;
            height: auto;
            max-width: none;
            border-radius: 0;
          }
          .video-container {
            width: 100vw;
            height: auto;
            padding-top: 56.25%;
          }
          .video-container iframe {
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
          .close-video {
            top: 10px;
            right: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default VideoModal;
