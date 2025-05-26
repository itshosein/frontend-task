"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HomeSVG from "../svgs/home/Home";
import MapSVG from "../svgs/map/Map";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <Image src="/logo.svg" alt="company logo" width={38} height={38} />
      <div className={styles.links}>
        <Link className={`${styles.home} flex-c`} href="/">
          <HomeSVG
            width={24}
            height={24}
            color={`${pathname === "/" ? "green" : "foreground"}`}
          />
          <p className={`${pathname === "/" ? styles.active : ""}`}>Home</p>
        </Link>

        <Link className="flex-c" href="/map">
          <MapSVG
            width={24}
            height={24}
            color={`${pathname === "/map" ? "green" : "foreground"}`}
          />
          <p className={`${pathname === "/map" ? styles.active : ""}`}>Map</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
