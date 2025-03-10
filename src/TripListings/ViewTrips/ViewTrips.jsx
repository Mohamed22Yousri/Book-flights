import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ViewTrips({ show, handleClose, showTrips }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title className="p-5 text-center">عرض الرحلات</Modal.Title>
        <Modal.Body>
          <div>
            <span style={{ fontWeight: "bold" }}>بدايه خط السير:</span>
            {showTrips.lineStart}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}>نهايه خط السير:</span>
            {showTrips.endStart}
          </div>
          <div>
            <span style={{ fontWeight: "bold" }}> العدد :</span>
            {showTrips.number}
          </div>

          <div>
            <span style={{ fontWeight: "bold" }}>حاله الرحله :</span>
            {showTrips.status}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewTrips;
