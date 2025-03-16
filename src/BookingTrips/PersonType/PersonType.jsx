import React from "react";

function PersonType({ register, errors }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
          نوع الشخص:
        </label>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <select
            {...register("typePerson", {
              required: "من فضلك ادخل نوع الشخص",
            })}
            className="cstm-input responsive-input"
          >
            <option value=""> نوع الشخص </option>
            <option value="طالب">طالب</option>
            <option value="طالبة">طالبة</option>
            <option value="موظف">موظف</option>
            <option value="موظفة">موظفة</option>
          </select>
          {errors.typePerson && (
            <span className="text-danger px-2">{errors.typePerson.message}</span>
          )}
        </div>
      </div>
    </>
  );
}

export default PersonType;
