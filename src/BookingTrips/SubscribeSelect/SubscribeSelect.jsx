import React from "react";

function SubscribeSelect({ register, errors }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
          اختيار عدد شهور الاشتراك
        </label>
        <select
          {...register("subscribe", {
            required: "من فضلك اختر عدد اشهر الاشتراك",
          })}
          className="cstm-input"
        >
          <option value=""> عدد الشهور</option>
          <option value="شهر واحد">شهر واحد </option>
          <option value="شهريين">شهريين</option>
          <option value=" ثلاث اشهر"> ثلاث اشهر</option>
        </select>
        {errors.subscribe && (
          <span className="text-danger">{errors.subscribe.message}</span>
        )}
      </div>
    </>
  );
}

export default SubscribeSelect;
