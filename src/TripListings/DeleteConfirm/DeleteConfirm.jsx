import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deletIcon from "../../assets/delete.png";
function DeleteConfirm({ showDelete, handleDeleteConfirm , handleCloseDelete  }) {
  return (
    <>
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Title className="p-5 text-center"> حذف الرحلة</Modal.Title>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <h3 className="text-danger my-2">هل تريد ازاله هذه الرحله ؟</h3>
            <img src={deletIcon} alt="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteConfirm}>
            مسح
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirm;
