import React from "react";

function SubscribeSelect({ register, errors }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
          اختيار عدد شهور الاشتراك:
        </label>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <select
            {...register("subscribe", {
              required: "من فضلك اختر عدد اشهر الاشتراك",
            })}
            className="cstm-input responsive-input"
          >
            <option value=""> عدد الشهور</option>
            <option value="شهر واحد">شهر واحد </option>
            <option value="شهريين">شهريين</option>
            <option value="ثلاث اشهر">ثلاث اشهر</option>
          </select>
          {errors.subscribe && (
            <span className="text-danger px-2">{errors.subscribe.message}</span>
          )}
        </div>
      </div>
    </>
  );
}

export default SubscribeSelect;
