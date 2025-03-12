import React from "react";
import { MdDelete } from "react-icons/md";

function BookingTable({ formData, handleDelete }) {
  return (
    <>
      <div className="responsive-table-container">
        <table className="table responsive-table ">
          <thead>
            <tr>
              <th scope="col">الاسم</th>
              <th scope="col">رقم الهاتف</th>
              <th scope="col">الايميل</th>
              <th scope="col">الجنس</th>
              <th scope="col">نوع الرحله</th>
              <th scope="col">عدد شهور الاشتراك</th>
              <th scope="col">نوع الشخص</th>
              <th scope="col">طريقه الدفع </th>
              <th>مسح</th>
            </tr>
          </thead>
          <tbody>
            {formData.length > 0 ? (
              formData.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{data.name}</th>
                  <td>{data?.phone}</td>
                  <td>{data?.email}</td>
                  <td>{data?.gender}</td>
                  <td>
                    {data?.trip} {data?.from} {data?.going} {data?.to}
                    {data?.departure}
                  </td>
                  <td>{data?.subscribe}</td>
                  <td>{data?.typePerson}</td>
                  <td>{data?.payment}</td>
                  <td>
                    <span onClick={() => handleDelete(index)}>
                      <MdDelete
                        color="red"
                        style={{ cursor: "pointer" }}
                        size={20}
                      />{" "}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  لا توجد بيانات متاحة
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BookingTable;
