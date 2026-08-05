import { NavLink } from "react-router";

const NavLinkItem = ({ text, to, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) => {
          const base =
            "block rounded-lg px-3 py-2 text-sm font-bold transition-colors";

          return isActive
            ? `${base} bg-[#f2a33a] text-[#202020]`
            : `${base} text-neutral-700 hover:bg-neutral-100 hover:text-[#c97820]`;
        }}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavLinkItem;
