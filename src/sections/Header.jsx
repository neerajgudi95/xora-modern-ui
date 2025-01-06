/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [toggleBar, setToggleBar] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    console.log(hasScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScroll]);

  const NavLink = ({ title }) => (
    <LinkScroll
      to={title}
      offset={-100}
      spy
      smooth
      onClick={() => setToggleBar(false)}
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer
     hover:text-p1 max-lg:mt-4 max-lg:h-5">
      {title}
    </LinkScroll>
  );
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 ${
        hasScroll ? "py-2 bg-black-100 backdrop-blur-[8px]" : ""
      }`}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" alt="logo" width={115} height={55} />
        </a>
        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-s2 ${
            toggleBar ? "max-lg:opacity-1" : "max-lg:opacity-0 max-lg:pointer-events-none"
          }`}>
          <div
            className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden
          sidebar-before max-md:p4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Features" closeBar={setToggleBar} />
                  <div className="dot" />
                  <NavLink title="Pricing" closeBar={setToggleBar} />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="max-lg:hidden transition-transform duration-500 cursor-pointer">
                    <img src="/images/xora.svg" alt="logo" width={160} height={55} />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="FAQ" closeBar={setToggleBar} />
                  <div className="dot" />
                  <NavLink title="Download" closeBar={setToggleBar} />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img src="/images/bg-outlines.svg" alt="outline" width={960} height={380} className="relative z-2" />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline-fill"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 flex justify-center items-center rounded-full"
          onClick={() => setToggleBar((prev) => !prev)}>
          <img
            src={`/images/${toggleBar ? "close" : "magic"}.svg`}
            alt="nav-button"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
