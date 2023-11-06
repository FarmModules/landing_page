"use client";
import { useState } from "react";
import items from "./item.js";
import { Carousel, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../../Bootstrap.module.css";
import FarmModuleInput from "./FarmModuleInput";
import Link from "next/link";

const Hero = () => {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map((item) => (
          <Carousel.Item key={item.id} className={styles.itemP} interval={2000}>
            <div className={styles.backgroundImage}>
              <img src={item.imageUrl} alt="Carousel Image" width="100%" height="100vh" />
            </div>
            <Carousel.Caption className={`${styles.caption} ${styles.responsiveCaption}`}>
              <div className={`${styles.container} ${styles.responsiveContainer}`}>
                <h3 className={`${styles.heading} ${styles.responsiveHeading}`}>For More Accessible</h3>
                <h4 className={`${styles.subheading} ${styles.responsiveSubheading}`}>{item.title}</h4>
                <p className="p-4">Aquaponic IoT and turnkey farm solutions</p>
                <div className="d-flex flex-row gap-5 mx-auto w-100 justify-content-center ">
                  <button className={`btn btn-lg ${styles.responsiveButton}`} style={buttonStyle} onClick={openModal}>
                    GET FREE CONSULTATION
                  </button>
                  <Link href="#Solution" passHref style={{ textDecoration: "none" }}>
                    <button
                      className={`btn btn-lg border-white rounded bg-transparent ${styles.responsiveButton}`}
                      style={buttonStyle}
                    >
                      Find Out More
                    </button>
                  </Link>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showModal} centered>
        <Modal.Header>
          <Modal.Title>Free Consultation</Modal.Title>
          <button className="close" onClick={closeModal}>
            X
          </button>
        </Modal.Header>
        <Modal.Body>
          <FarmModuleInput />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Hero;
