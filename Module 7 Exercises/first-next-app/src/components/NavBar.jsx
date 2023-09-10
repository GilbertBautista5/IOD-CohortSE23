"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const path = usePathname(); 

  return (
    <nav className="NavBar" style={{ backgroundColor: "#09193b", color: "#14bbe5" }}>
      <ul className="menu">

        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login" className={path.startsWith("/login") ? "active" : null}>
            Login
          </Link>
        </li>
        <li>
          <Link href="/bitcoin" className={path.startsWith("/bitcoin") ? "active" : null}>
            Bitcoin Rates
          </Link>
        </li>    
        </ul>
    </nav>
  );
}
export default NavBar;