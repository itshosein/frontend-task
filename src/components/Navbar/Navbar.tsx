import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image src="/logo.svg" alt="company logo" width={38} height={38} />
      <div className={styles.links}>
        <div className={`${styles.home} flex-c`}>
          <Image src="/home.svg" alt="home logo" width={24} height={24} />
          <p>Home</p>
        </div>

        <div className="flex-c">
          <Image src="/map.svg" alt="map logo" width={24} height={24} />
          <p>Map</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
