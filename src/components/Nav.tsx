"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/style.module.scss";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/blog", label: "Посты" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.nav}>
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.item}${active ? ` ${styles.active}` : ""}`}
                prefetch
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
