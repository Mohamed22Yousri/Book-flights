import React from "react";

function Payment({ register, errors }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
          اختر طريقة الدفع:
        </label>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <select
            {...register("payment", {
              required: "من فضلك اختر طريقة الدفع",
            })}
            className="cstm-input responsive-input"
          >
            <option value="">طريقة الدفع</option>
            <option value="كي نت">كي نت</option>
            <option value="فيزا">فيزا</option>
            <option value="ماستر كارد">ماستر كارد</option>
          </select>
          {errors.payment && (
            <span className="text-danger px-2">{errors.payment.message}</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Payment;
