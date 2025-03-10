function HeaderBooking() {
  return (
    <>
      <div>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
        >
          عدد المقاعد المتبقيه محدوده جدا, سارع بحجز مقعدك الان ... (تمشي من
          اقصي اليسار الي اقصي اليمين ثم نقف){" "}
        </p>
        <p>
          قيمه الاشتراك الشهري : 25 دينار{" "}
          <span style={{ fontWeight: "bold", paddingRight: "2rem" }}>
            عداد بعدد العملاء يبدا من 9150 شخص
          </span>
        </p>
      </div>
    </>
  );
}

export default HeaderBooking;
