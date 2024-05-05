"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";
export default function NavLink({ href, children }) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={pathName.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  );
}
