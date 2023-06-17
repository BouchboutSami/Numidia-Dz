import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Disclosure, Transition } from "@headlessui/react";

const NavbarOffline = (props) => {
  const [Lieux, setLieux] = useState(props.Lieux);
  const [Search, setSearch] = useState({});
  const [input, setinput] = useState("");

  const handleSearch = () => {
    props.search(Search);
  };
  const handleOpenLogin = (e) => {
    props.LoginBtn();
  };

  useEffect(() => {
    setLieux(props.Lieux);
  }, [props]);

  return (
    <div className="w-full bg-white flex flex-row items-end px-16 pb-4 pt-2 justify-between relative z-[1000]">
      <img
        src="/images/numidia-noir.png"
        alt="numidia"
        className="cursor-pointer md:h-16 sm:h-14 h-12"
      />
      <div className="relative w-1/3 flex flex-col">
        <div className="relative items-center text-gray-600 w-full hidden sm:flex">
          <input
            className="w-full pl-4 border-2 border-gray-300 bg-white h-12 rounded-lg focus:outline-none text-lg font-GothamMedium focus:border-numidiaOrange"
            type="text"
            name="search"
            placeholder="Rechercher un lieu"
            onChange={(e) => {
              setSearch({});
              e.preventDefault();
              setinput(e.target.value);
            }}
            autoComplete="off"
            value={Search.Nom ? Search.Nom : input}
          />
          <button
            type="submit"
            className="absolute right-4"
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="absolute bottom-0 bg-white flex flex-col translate-y-full z-50 w-full gap-2 px-3 py-2 rounded-lg">
          {Lieux.length > 0 && !Search.Nom
            ? Lieux.filter((lieu) => {
                const searchvalue = input.toLowerCase(lieu.value);
                const NomLieu = lieu.Nom.toLowerCase();
                return (
                  searchvalue &&
                  NomLieu.startsWith(searchvalue) &&
                  NomLieu != searchvalue
                );
              }).map((lieu, index) => {
                return (
                  <div
                    className="flex flex-col gap-1 cursor-pointer hover:text-numidiaOrange"
                    key={lieu.idLieu}
                    onClick={() => {
                      setSearch(lieu);
                    }}
                  >
                    <p>{lieu.Nom}</p>
                    <div className="w-full h-[1px] bg-slate-300"></div>
                  </div>
                );
              })
            : null}
        </div>
      </div>

      {props.user.pseudo ? (
        <p className="mb-2 text-xl font-GothamBlack">
          Hello{" "}
          <span className="text-numidiaOrange uppercase">
            {props.user.pseudo}
          </span>
        </p>
      ) : (
        <button
          className="bg-numidiaOrange text-white px-10 py-2 rounded-xl text-lg font-GothamMedium hidden lg:flex"
          onClick={(e) => handleOpenLogin(e)}
        >
          Se connecter
        </button>
      )}
      <Disclosure
        className="flex lg:hidden outline outline-numidiaOrange rounded-lg p-2"
        as="div"
      >
        <Disclosure.Button>
          <FontAwesomeIcon icon={faBars} className="text-3xl xs:text-4xl" />
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-100 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel>
            <div className="absolute right-0 bg-white p-4 rounded-lg  mt-2 z-[200] border-2 border-numidiaOrange">
              <div className=" flex flex-auto justify-end items-center flex-col lg:hidden">
                <ul className=" flex gap-6 flex-col items-center pt-3 w-full">
                  <li className="hover:underline decoration-numidiaOrange">
                    test1
                  </li>
                  <li className="hover:underline decoration-numidiaOrange">
                    test1
                  </li>
                  <li className="hover:underline decoration-numidiaOrange">
                    test1
                  </li>
                </ul>
              </div>
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

export default NavbarOffline;
