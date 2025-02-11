import { NavLink } from "react-router";

export function Navbar() {
  return (
    <nav className="flex h-12 items-center justify-start bg-slate-900 px-12 text-white">
      <ul className="flex gap-3">
        <li className="hover:underline hover:text-blue-400">
          <NavLink to={"mails"}>Mails</NavLink>
        </li>
        <li className="hover:underline hover:text-blue-400">
          <NavLink to={"newsletter"}>Newsletter</NavLink>
        </li>
      </ul>
    </nav>
  );
}
