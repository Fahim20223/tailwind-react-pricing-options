import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";
const urls = [
  {
    id: 1,
    name: "Home",
    url: "https://example.com/",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    url: "https://example.com/about",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "https://example.com/services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    url: "https://example.com/blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    url: "https://example.com/contact",
    path: "/contact",
  },
];

const NavBar = () => {
  // const [data, setData] = useState(false);
  // const links = urls.map((route) => <Link key={route.id} route={route}></Link>);
  const links = urls.map((route) => <Link key={route.id} route={route}></Link>);
  const [show, setShow] = useState(false);
  return (
    <nav className="flex justify-between">
      <span className="flex" onClick={() => setShow(!show)}>
        {show ? <X></X> : <Menu className="md:hidden "></Menu>}
        <h1 className="ml-1">Nav</h1>
        <ul className={`md:hidden absolute ${show ? "top-9" : "-top-50"}`}>
          {links}
        </ul>
      </span>

      <ul className="md:flex hidden">{links}</ul>
      <button className="btn btn-success">Sign up</button>
    </nav>
  );
};

export default NavBar;
// <nav className="flex justify-between mx-1">
//   <span className="flex " onClick={() => setData(!data)}>
//     {data ? (
//       <X className="md:hidden"></X>
//     ) : (
//       <Menu className="md:hidden"></Menu>
//     )}

//     <h1 className="ml-2">My Navbar</h1>
//     <ul
//       className={`md:hidden absolute duration-1000s bg-amber-200 ${
//         data ? "top-8" : "-top-40"
//       }`}
//     >
//       {links}
//     </ul>
//   </span>

//   <ul className="md:flex hidden">{links}</ul>
//   {/* <ul className="flex">
//     {urls.map((route) => (
//       <li className="mr-10">
//         <a href={route.path}>{route.name}</a>
//       </li>
//     ))}
//   </ul> */}
//   {/* <ul className="flex">
//     <li className="mr-10">
//       <a href="/home">Home</a>
//     </li>
//     <li className="mr-10">
//       <a href="/about">About</a>
//     </li>
//     <li className="mr-10">
//       <a href="/blog">Blog</a>
//     </li>
//   </ul> */}
//   <button className="btn">Sign in</button>
// </nav>
