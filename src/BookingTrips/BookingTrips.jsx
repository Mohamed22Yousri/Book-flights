import { useForm } from "react-hook-form";
import HeaderBooking from "./HeaderBooking/HeaderBooking";
import { useNavigate } from "react-router-dom";
import GenderSelect from "./HeaderBooking/GenderSelect/GenderSelect";
import DepartuerAndOutbound from "./DepartureAndOutboundTime/DepartuerAndOutbound";
import SubscribeSelect from "./SubscribeSelect/SubscribeSelect";
import PersonType from "./PersonType/PersonType";
import RulesCheckbox from "./RulesCheckbox/RulesCheckbox";
import Payment from "./Payment/Payment";

function BookingTrips() {
  const navigate = useNavigate();

  let {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const selectedTrip = watch("trip");

  const onSubmit = (data) => {
    // استرجاع البيانات القديمة لو موجودة
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];

    // إضافة الرحلة الجديدة
    const updatedData = [...storedTrips, data];

    // تخزينها في Local Storage
    localStorage.setItem("trips", JSON.stringify(updatedData));

    // إرسال البيانات للصفحة التالية
    navigate("/Lists", { state: { formData: updatedData } });
  };

  return (
    <>
      {/* header */}
      <HeaderBooking />
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label
            style={{ width: "120px", textAlign: "right" }}
            className="mt-2"
          >
            الاسم ثلاثي:
          </label>
          <input
            {...register("name", {
              required: "من فضلك ادخل الاسم ثلاثي",
              validate: (value) =>
                value.trim().split(" ").length >= 3 || "يجب إدخال الاسم ثلاثي",
            })}
            className="cstm-input"
            placeholder=" ادخل الاسم ..."
            type="text"
          />
          {errors.name && (
            <span className="text-danger px-2 mb-2 d-block">
              {errors.name.message}
            </span>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label
            style={{ width: "120px", textAlign: "right" }}
            className="mt-2"
          >
            رقم الهاتف:
          </label>
          <input
            {...register("phone", {
              required: "من فضلك ادخل رقم الهاتف ",
            })}
            className="cstm-input"
            placeholder="ادخل رقم الهاتف ..."
            type="text"
          />
          {errors.phone && (
            <span className="text-danger px-2 mb-2 d-block">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label
            style={{ width: "120px", textAlign: "right" }}
            className="mt-2"
          >
            الايميل:
          </label>
          <input
            {...register("email", {
              required: "من فضلك ادخل الايميل  ",
            })}
            className="cstm-input"
            placeholder="ادخل الايميل ..."
            type="text"
          />
          {errors.email && (
            <span className="text-danger px-2 mb-2 d-block">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Gender */}
        <GenderSelect errors={errors} register={register} />
        {/* Trip */}
        <DepartuerAndOutbound
          errors={errors}
          register={register}
          selectedTrip={selectedTrip}
        />
        {/* subscribe الاشتراك */}
        <SubscribeSelect errors={errors} register={register} />
        {/* نوع الشخص */}
        <PersonType errors={errors} register={register} />
        {/* Payment طريقه الدفع */}
        <Payment errors={errors} register={register} />
        {/*  القوانيين  و اللوائح*/}
        <RulesCheckbox errors={errors} register={register} />

        <div className="text-center my-4">
          <button className="btn btn-success" style={{ width: "50%" }}>
            ادفع الان
          </button>
        </div>
      </form>
    </>
  );
}

export default BookingTrips;
