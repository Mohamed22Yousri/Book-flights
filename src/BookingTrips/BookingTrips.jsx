import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import HeaderBooking from "./HeaderBooking/HeaderBooking";
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
    const storedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    const updatedData = [...storedTrips, data];
    localStorage.setItem("trips", JSON.stringify(updatedData));
    navigate("/Lists", { state: { formData: updatedData } });
  };

  return (
    <>
      <HeaderBooking />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* الاسم ثلاثي */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label
            style={{ width: "120px", textAlign: "right" }}
            className="mt-2"
          >
            الاسم ثلاثي:
          </label>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <input
              {...register("name", {
                required: "من فضلك ادخل الاسم ثلاثي",
                validate: (value) =>
                  value.trim().split(" ").length >= 3 ||
                  "يجب إدخال الاسم ثلاثي",
              })}
              className="cstm-input responsive-input"
              placeholder="ادخل الاسم ..."
              type="text"
            />
            {errors.name && (
              <span className="text-danger px-2 mb-2">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>

        {/* رقم الهاتف */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label
            style={{ width: "120px", textAlign: "right" }}
            className="mt-2"
          >
            رقم الهاتف:
          </label>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <input
              {...register("phone", {
                required: "من فضلك ادخل رقم الهاتف",
              })}
              className="cstm-input responsive-input"
              placeholder="ادخل رقم الهاتف ..."
              type="text"
            />
            {errors.phone && (
              <span className="text-danger px-2 mb-2">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* الايميل */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label
            style={{ width: "120px", textAlign: "right" }}
            className="mt-2"
          >
            الايميل:
          </label>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <input
              {...register("email", {
                required: "من فضلك ادخل الايميل",
              })}
              className="cstm-input responsive-input"
              placeholder="ادخل الايميل ..."
              type="text"
            />
            {errors.email && (
              <span className="text-danger px-2 mb-2">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Gender */}
        <GenderSelect errors={errors} register={register} />

        {/* Trip */}
        <DepartuerAndOutbound
          errors={errors}
          register={register}
          selectedTrip={selectedTrip}
        />

        {/* Subscribe الاشتراك */}
        <SubscribeSelect errors={errors} register={register} />

        {/* نوع الشخص */}
        <PersonType errors={errors} register={register} />

        {/* Payment طريقه الدفع */}
        <Payment errors={errors} register={register} />

        {/* القوانين و اللوائح */}
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
