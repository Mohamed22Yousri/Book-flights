function GenderSelect({ register, errors }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
          الجنس:
        </label>
        <select
          {...register("gender", { required: "من فضلك اختر الجنس" })}
          className="cstm-input"
        >
          <option value="">اختر نوع الجنس</option>
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
          <option value="ذكور وإناث">ذكور وإناث</option>
        </select>
        {errors.gender && (
          <span className="text-danger">{errors.gender.message}</span>
        )}
      </div>
    </>
  );
}

export default GenderSelect;
