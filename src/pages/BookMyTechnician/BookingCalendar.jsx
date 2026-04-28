import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { getTechnicianSlotsTime } from "../../features/actions/services";
import { useLocation, useParams } from "react-router-dom";

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const { id } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { slotTimeData } = useSelector((state) => state.services);

  const slots = Array.isArray(slotTimeData) ? slotTimeData : [];

  // ✅ FIXED DATE FORMAT (NO TIMEZONE ISSUE)
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // ✅ CALL API WHEN DATE CHANGES
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate);

      dispatch(getTechnicianSlotsTime({ date: formattedDate, id: id }));
    }
  }, [selectedDate, dispatch]);

  // ✅ RESET TIME WHEN DATE CHANGES
  useEffect(() => {
    setSelectedTime(null);
  }, [selectedDate]);

  console.log(state);

  return (
    <div className="container py-5">
      <h2 className="mb-2">Schedule your service</h2>
      <p className="text-muted">Check availability and book your slot</p>

      <div className="row mt-4">
        {/* LEFT */}
        <div className="col-md-8">
          <h5>Select a Date</h5>

          {/* Calendar */}
          <div
            className="p-3 shadow-sm mt-3"
            style={{ borderRadius: "12px", background: "#fff" }}
          >
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
              tileClassName={({ date }) =>
                date.toDateString() === selectedDate.toDateString()
                  ? "selected-date"
                  : ""
              }
            />
          </div>

          {/* Time Slots */}
          <h5 className="mt-5">Select Time</h5>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {slots.length > 0 ? (
              slots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTime(slot)}
                  className="btn"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    background:
                      selectedTime === slot ? "#ff6600" : "transparent",
                    color: selectedTime === slot ? "#fff" : "#000",
                    opacity: slot ? 1 : 0.4,
                    pointerEvents: slot ? "auto" : "none",
                  }}
                >
                  {slot}
                </button>
              ))
            ) : (
              <p className="text-muted">No slots available</p>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-md-4">
          <div
            className="p-4 shadow-sm"
            style={{
              background: "#fff",
              borderRadius: "12px",
              position: "sticky",
              top: "100px",
            }}
          >
            <h5>Service Details</h5>

            <p className="mb-1 fw-semibold">{state?.name}</p>

            <small className="text-muted">{state?.description}</small>

            {/* Selected */}
            <div className="mt-3">
              <small className="text-muted">Selected:</small>
              <div>
                <b>
                  {selectedDate
                    ? `${selectedDate.toDateString()} ${selectedTime || ""}`
                    : "None"}
                </b>
              </div>
            </div>

            {/* Button */}
            <button
              disabled={!selectedTime}
              className="btn w-100 mt-4"
              style={{
                background: "linear-gradient(90deg, #ff6600, #ff8533)",
                color: "#fff",
                border: "none",
                opacity: selectedTime ? 1 : 0.6,
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Styling */}
      <style>
        {`
        .react-calendar {
          border: none;
          width: 100%;
        }

        .react-calendar__tile {
          border-radius: 8px;
        }

        .react-calendar__tile--now {
          background: #ffe6d5;
        }

        .selected-date {
          background: #ff6600 !important;
          color: #fff !important;
        }

        .react-calendar__tile:hover {
          background: #fff1e6;
        }
        `}
      </style>
    </div>
  );
};

export default BookingCalendar;
