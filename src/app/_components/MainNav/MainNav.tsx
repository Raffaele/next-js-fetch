import Link from "next/link";
import style from "./MainNav.module.css";

export const MainNav = () => {
  return (
    <div className={style.mainWrapper}>
      <h2>Menu</h2>
      <nav className={style.mainNav}>
        <Link href="/" className={style.navLink}>
          Home
        </Link>
        <Link href="/client-fetch" className={style.navLink}>
          Client fetch
        </Link>
        <Link href="/server-fetch" className={style.navLink}>
          Server fetch
        </Link>
        <Link href="/products-db" className={style.navLink}>
          Server action DB
        </Link>
      </nav>
    </div>
  );
};
