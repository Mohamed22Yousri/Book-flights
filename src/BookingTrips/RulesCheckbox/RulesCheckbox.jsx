import React from 'react'

function RulesCheckbox({register, errors}) {
  return (
    <>
      <div
          className="d-flex align-items-center my-2"
          style={{ gap: ".5rem" }}
        >
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: "يجب الموافقة على الشروط" })}
            style={{ width: "18px", height: "18px" }}
          />
          <label style={{ fontSize: "1rem" }} htmlFor="terms">
            الموافقة على الشروط واللوائح والقوانين.
          </label>
        </div>

        {/* عرض الخطأ لو المستخدم لم يحدد الـ checkbox */}
        {errors.terms && <p className="text-danger">{errors.terms.message}</p>}

    </>
  )
}

export default RulesCheckbox