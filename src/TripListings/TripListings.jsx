import { useLocation } from "react-router-dom";
import BookingTable from "./BookingTable/BookingTable";
import { useState, useEffect } from "react";
import ViewTrips from "./ViewTrips/ViewTrips";
import DeleteConfirm from "./DeleteConfirm/DeleteConfirm";

import { useForm } from "react-hook-form";
import EditTrips from "./EditTrips/EditTrips";

function TripListings() {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteTrip, setDeleteTrip] = useState("");
  const [showTrips, setShowTrips] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editTrip, setEditTrip] = useState(null);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const [trips, setTrips] = useState([]);

  const handleShowEdit = (id) => {
    const selectedTrip = trips.find((trip) => trip.id === id);
    if (selectedTrip) {
      setEditTrip(id);
      // ضبط القيم في الـ input باستخدام setValue
      setValue("lineStart", selectedTrip.lineStart);
      setValue("endStart", selectedTrip.endStart);
      setValue("number", selectedTrip.number);
      setValue("status", selectedTrip.status);
      setShowEdit(true);
    }
  };
  const handleCloseEdit = () => {
    setShowEdit(false);
    setEditTrip(null);
    reset(); // إعادة القيم الافتراضية
  };
  // تعديل الرحلات
  const handleSaveEdit = (data) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === editTrip ? { ...trip, ...data } : trip
      )
    );
    handleCloseEdit(); // إغلاق المودال بعد الحفظ
  };

  const handleCloseDelete = () => {
    if (deleteTrip) {
      const updatedTrips = trips.filter((trip) => trip.id !== deleteTrip); //  حذف الرحلة بناءً على الـ id
      setTrips(updatedTrips); //  تحديث حالة الرحلات
    }

    setDeleteTrip(""); //  مسح بيانات الرحلة المختارة
    setShowDelete(false); // إغلاق المودال
  };
  // تخزين الـ id فقط
  const handleShowDelete = (id) => {
    setDeleteTrip(id);
    setShowDelete(true);
  };

  // عرض الرحلات
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    const selectedTrip = trips.find((trip) => trip.id === id);
    setShowTrips(selectedTrip);
    setShow(true);
  };

  const storedData = JSON.parse(localStorage.getItem("trips")) || [];
  const [formData, setFormData] = useState(
    location.state?.formData || storedData
  );

  // حذف العنصر
  const handleDelete = (index) => {
    const updatedTrips = formData.filter((_, i) => i !== index);
    localStorage.setItem("trips", JSON.stringify(updatedTrips));
    setFormData(updatedTrips);
  };

  useEffect(() => {
    const newTrips = [
      {
        id: 1,
        lineStart: " حولي- جمعيه حولي",
        endStart: "الكويت -برج مزايا",
        number: "2",
        status: "العدد مكتمل",
      },
      {
        id: 2,
        lineStart: " حولي- جمعيه حولي",
        endStart: "الكويت -برج مزايا",
        number: "2",
        status: "باقي 3 اشخاص ",
      },
      {
        id: 3,
        lineStart: " السالميه - جمعيه السالميه",
        endStart: "الكويت - برج العاصمه",
        number: "3",
        status: "العدد مكتمل",
      },
      {
        id: 4,
        lineStart: " السالميه - جمعيه السالميه",
        endStart: "الكويت - برج العاصمه",
        number: "1",
        status: "باقي 5 اشخاص",
      },
    ];

    setTrips(newTrips);
  }, []);

  return (
    <>
      {/* حجز الرحله */}
      <div>
        <h2
          className="py-1"
          style={{ background: "#ff000096", textAlign: "center" }}
        >
          حجز رحله
        </h2>
        <BookingTable formData={formData} handleDelete={handleDelete} />
      </div>
      {/* الرحلات */}
      <h2
        className="py-1"
        style={{ background: "#ff000096", textAlign: "center" }}
      >
        الرحلات
      </h2>
      <div>
        <table class="table table-columns">
          <thead>
            <tr>
              <th scope="col">بدايه خط السير</th>
              <th scope="col">نهايه خط السير</th>
              <th scope="col">العدد</th>
              <th scope="col">حاله الرحله</th>
              <th scope="col">تفاصيل </th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => {
              return (
                <tr>
                  <th scope="row">{trip?.lineStart}</th>
                  <td>{trip?.endStart}</td>
                  <td>{trip?.number}</td>
                  <td>{trip?.status}</td>
                  <td>
                    <button
                      onClick={() => handleShow(trip.id)}
                      className="btn btn-success"
                    >
                      عرض
                    </button>
                    <button
                      className="mx-3 btn btn-primary"
                      onClick={() => handleShowEdit(trip.id)}
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleShowDelete(trip.id)}
                      className="btn btn-warning"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* عرض الرحلات */}
      <ViewTrips handleClose={handleClose} show={show} showTrips={showTrips} />

      {/* حذف رحله */}
      <DeleteConfirm
        handleCloseDelete={handleCloseDelete}
        showDelete={showDelete}
      />

      {/* تعديل الرحله */}
      <EditTrips
        handleCloseEdit={handleCloseEdit}
        handleSaveEdit={handleSaveEdit}
        handleSubmit={handleSubmit}
        register={register}
        showEdit={showEdit}
        errors={errors}
      />
    </>
  );
}

export default TripListings;
