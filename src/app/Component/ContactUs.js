"use client";
import { useState } from "react";
import styles from "../../../Bootstrap.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import FarmModuleInput from "./FarmModuleInput";

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);

  // Change the button from red to green
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <footer className="bg-gray-200 py-10">
        <div className="container mx-auto" id="Contact">
          <div className="section-title-area">
            <h2 className="section-title text-center">
              Let&lsquo;s build the farm of your dreams together
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full sm:w-1/2 px-4">
              <h3 className="text-center">Join our Aquaponics Revolution</h3>
              <p className="text-center">
                <button
                  className={`btn btn-lg ${styles.responsiveButton}`}
                  style={buttonStyle}
                  onClick={openModal}
                >
                  GET FREE CONSULTATION
                </button>
              </p>
              <br />
              <br />
              <div className="address-box fle">
                <h3 className="text-center">FarmModules.tech s.r.o.</h3>
                <div className="address-contact">
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                  </span>
                  <div className="address-content text-center">
                    Pod viaduktem 2783/58 <br />
                    Stodůlky (Prague 13) <br />
                    155 00 Prague
                  </div>
                </div>
                <div className="address-contact">
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                  </span>
                  <div className="address-content text-center">
                    +420 774 588 710
                  </div>
                </div>
                <div className="address-contact">
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                  </span>
                  <div className="address-content text-center">
                    <a href="mailto:info@farmmodules.tech">
                      info@farmmodules.tech
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Free Consultation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FarmModuleInput />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUs;
