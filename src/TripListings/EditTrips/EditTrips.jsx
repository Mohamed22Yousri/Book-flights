import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function EditTrips({
  showEdit,
  handleCloseEdit,
  handleSaveEdit,
  handleSubmit,
  register,
  errors,
}) {
  return (
    <>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Title className="p-5 text-center">تعديل الرحلات </Modal.Title>
        <Modal.Body>
          <form onSubmit={handleSubmit(handleSaveEdit)}>
            <div className="text-center">
              <div style={{ fontWeight: "bold" }}>بدايه خط السير</div>
              <input
                {...register("lineStart", {
                  required: "بدايه خط السير مطلوب",
                })}
                className="cstm-input w-75 mb-2"
                type="text"
              />

              <div>
                {errors.lineStart && (
                  <span className="text-danger">
                    {errors.lineStart.message}
                  </span>
                )}
                <div style={{ fontWeight: "bold" }}>نهايه خط السير</div>
                <input
                  {...register("endStart", {
                    required: "نهايه خط السير مطلوب",
                  })}
                  className="cstm-input w-75 my-2"
                  type="text"
                />
              </div>
              {errors.endStart && (
                <span className="text-danger">{errors.endStart.message}</span>
              )}
              <div>
                <div
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  العدد
                </div>
                <input
                  {...register("number", {
                    required: "العدد   مطلوب",
                  })}
                  className="cstm-input w-75"
                  type="text"
                />
              </div>
              {errors.number && (
                <span className="text-danger">{errors.number.message}</span>
              )}

              <div>
                <div style={{ fontWeight: "bold" }}>حاله الرحله </div>
                <input
                  {...register("status", {
                    required: "   حاله الرحله مطلوبه",
                  })}
                  className="cstm-input w-75 mb-3"
                  type="text"
                />
              </div>
              {errors.status && (
                <span className="text-danger mb-3">{errors.status.message}</span>
              )}
            </div>
            <Modal.Footer>
              <Button type="submit" variant="secondary">
                تعديل الرحله{" "}
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditTrips;
