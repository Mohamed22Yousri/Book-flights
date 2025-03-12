import React from "react";

function Payment({ register, errors }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
           اختر طريقه الدفع
        </label>
        <select
          {...register("payment", {
            required: "من فضلك ادخل  طريقه الدفع   ",
          })}
          className="cstm-input responsive-input"
        >
          <option value=""> طريقه الدفع  </option>
          <option value=" كي نت">كي نت </option>
          <option value="فيزا">فيزا</option>
          <option value=" مستر كارد"> مستر كارد </option>
        </select>
        {errors.payment && (
          <span className="text-danger">{errors.payment.message}</span>
        )}
      </div>
    </>
  );
}

export default Payment;
