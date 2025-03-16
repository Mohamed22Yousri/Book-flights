import React from "react";

function DepartuerAndOutbound({ register, errors, selectedTrip }) {
  return (
    <>
      {/* اختيار الرحلة */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
          اختار الرحلة:
        </label>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <select
            {...register("trip", { required: "من فضلك اختر نوع الرحلة" })}
            className="cstm-input responsive-input"
          >
            <option value="">اختار نوع الرحلة</option>
            <option value="ذهاب وعودة">ذهاب وعودة</option>
            <option value="ذهاب">ذهاب</option>
            <option value="عودة">عودة</option>
          </select>
          {errors.trip && (
            <span className="text-danger px-2 mt-1">{errors.trip.message}</span>
          )}
        </div>
      </div>

      {/* الذهاب والعودة جنب بعض */}
      {(selectedTrip === "ذهاب وعودة" ||
        selectedTrip === "ذهاب" ||
        selectedTrip === "عودة") && (
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          {/* الذهاب */}
          {(selectedTrip === "ذهاب وعودة" || selectedTrip === "ذهاب") && (
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <label style={{ textAlign: "right" }}>الذهاب من:</label>
              <select
                {...register("from", { required: "من فضلك اختر الجمعية" })}
                className="cstm-input responsive-input"
              >
                <option value="">اختر الجمعية</option>
                <option value="جمعيه السالميه">جمعيه السالميه</option>
                <option value="جمعيه الفروانيه">جمعيه الفروانيه</option>
                <option value="جمعيه حولي">جمعيه حولي</option>
              </select>
              {errors.from && (
                <span className="text-danger px-2 mt-1">
                  {errors.from.message}
                </span>
              )}

              <label
                style={{
                  textAlign: "right",
                  marginTop: "0.5rem",
                  marginBottom: "10px",
                }}
              >
                موعد الذهاب:
              </label>
              <input
                {...register("going", { required: "من فضلك ادخل موعد الذهاب" })}
                className="custom-date"
                type="datetime-local"
              />
              {errors.going && (
                <span className="text-danger px-2 mt-1">
                  {errors.going.message}
                </span>
              )}
            </div>
          )}

          {/* العودة */}
          {(selectedTrip === "ذهاب وعودة" || selectedTrip === "عودة") && (
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <label style={{ textAlign: "right" }}>العودة من:</label>
              <select
                {...register("to", { required: "من فضلك اختر منطقة العودة" })}
                className="cstm-input responsive-input"
              >
                <option value="">اختر منطقة العودة</option>
                <option value="مجمع مزايا">مجمع مزايا</option>
                <option value="مجمع العاصمه">مجمع العاصمه</option>
                <option value="مجمع الحمرا">مجمع الحمرا</option>
                <option value="مجمع كيبكو">مجمع كيبكو</option>
              </select>
              {errors.to && (
                <span className="text-danger px-2 mt-1">
                  {errors.to.message}
                </span>
              )}

              <label
                style={{
                  textAlign: "right",
                  marginTop: "0.5rem",
                  marginBottom: "10px",
                }}
              >
                موعد المغادرة:
              </label>
              <input
                {...register("departure", {
                  required: "من فضلك ادخل موعد المغادرة",
                })}
                className="custom-date"
                type="datetime-local"
              />
              {errors.departure && (
                <span className="text-danger px-2 mt-1">
                  {errors.departure.message}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DepartuerAndOutbound;
