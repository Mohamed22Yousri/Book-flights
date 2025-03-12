import React from "react";

function DepartuerAndOutbound({ register, errors, selectedTrip }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
          اختار الرحله:
        </label>
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
          <span className="text-danger">{errors.trip.message}</span>
        )}
      </div>

      {/* تحديد نقطة المغادرة إذا كان الاختيار ذهاب أو ذهاب وعودة */}
      {(selectedTrip === "ذهاب وعودة" || selectedTrip === "ذهاب") && (
        <div
          className="responsive-container"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <label
            style={{ width: "120px", textAlign: "right", marginTop: "20px" }}
          >
            الذهاب من:
          </label>
          <select
            {...register("from", { required: "من فضلك اختر الجمعيه " })}
            className="cstm-input responsive-input mt-0"
          >
            <option value="">اختر الجمعيه </option>
            <option value="جمعيه السالميه">جمعيه السالميه</option>
            <option value="جمعيه الفروانيه">جمعيه الفروانيه</option>
            <option value="جمعيه حولي">جمعيه حولي</option>
          </select>
          {errors.from && (
            <span className="text-danger">{errors.from.message}</span>
          )}
          <input
            {...register("going", {
              required: "من فضلك ادخل موعد الذهاب",
            })}
            className="custom-date"
            type="date"
          />
          {errors.going && (
            <span className="text-danger">{errors.going.message}</span>
          )}
        </div>
      )}

      {/* تحديد نقطة الوصول إذا كان الاختيار عودة أو ذهاب وعودة */}
      {(selectedTrip === "ذهاب وعودة" || selectedTrip === "عودة") && (
        <div
          className="responsive-container"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <label
            style={{ width: "120px", textAlign: "right", marginTop: "20px" }}
          >
            العوده من:
          </label>
          <select
            {...register("to", { required: "من فضلك اختر  منطقه العوده" })}
            className="cstm-input responsive-input mt-0"
          >
            <option value="">اختر منطقه العوده </option>
            <option value="مجمع مزايا">مجمع مزايا</option>
            <option value="مجمع العاصمه">مجمع العاصمه</option>
            <option value="مجمع الحمرا">مجمع الحمرا</option>
            <option value="مجمع كيبكو">مجمع كيبكو</option>
          </select>
          {errors.to && (
            <span className="text-danger">{errors.to.message}</span>
          )}
          <input
            {...register("departure", {
              required: "من فضلك ادخل موعد المغادره",
            })}
            className="custom-date"
            type="date"
          />
          {errors.departure && (
            <span className="text-danger">{errors.departure.message}</span>
          )}
        </div>
      )}
    </>
  );
}

export default DepartuerAndOutbound;
