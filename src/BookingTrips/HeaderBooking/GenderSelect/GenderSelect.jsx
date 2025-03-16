function GenderSelect({ register, errors }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <label style={{ width: "120px", textAlign: "right" }} className="mt-2">
        الجنس:
      </label>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <select
          {...register("gender", { required: "من فضلك اختر الجنس" })}
          className="cstm-input responsive-input"
        >
          <option value="">اختر نوع الجنس</option>
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
          <option value="ذكور وإناث">ذكور وإناث</option>
        </select>
        {errors.gender && (
          <span className="text-danger px-2 mt-1">{errors.gender.message}</span>
        )}
      </div>
    </div>
  );
}

export default GenderSelect;
