'use client';
import { useState } from "react";
import { items } from "../../../public/data/item.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../../Bootstrap.module.css";

export default function Hero() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Change the button from red to green
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={2000}>
          <div
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
          <Carousel.Caption className={`${styles.caption} ${styles.responsiveCaption}`}>
            <div className={`${styles.container} ${styles.responsiveContainer}`}>
              <h3 className={`${styles.heading} ${styles.responsiveHeading}`}>For More Accessible</h3>
              <h4 className={`${styles.subheading} ${styles.responsiveSubheading}`}>{item.title}</h4>
              <p className="p-4">Aquaponic IoT and turnkey farm solutions</p>
              <div className="d-flex flex-row gap-5 mx-auto w-100 justify-content-center ">
              <button
                className={`btn btn-lg ${styles.responsiveButton}`}
                style={buttonStyle}
              >
                GET FREE CONSULTATION
              </button>
              <button
                className={`btn btn-lg border-white rounded bg-transparent ${styles.responsiveButton}`}
                style={buttonStyle}
              >
                GET STARTED
              </button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
