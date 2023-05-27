import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Disclosure, Transition } from "@headlessui/react";

const NavbarOffline = () => {
  const [Search, setSearch] = useState("");
  const handleSearch = (SearchValue) => {
    console.log(SearchValue);
  };
  return (
    <div className="w-full bg-white flex flex-row items-center px-16 py-4 justify-between">
      <img
        src="/images/numidia-noir.png"
        alt="numidia"
        className="cursor-pointer md:h-20 sm:h-16 h-12"
      />
      <div className="relative items-center text-gray-600 w-1/3 hidden lg:flex">
        <input
          className="w-full pl-4 border-2 border-gray-300 bg-white h-12 rounded-lg focus:outline-none text-lg font-GothamMedium focus:border-numidiaOrange"
          type="text"
          name="search"
          placeholder="Rechercher un lieu"
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
        <button
          type="submit"
          className="absolute right-4"
          onClick={(e) => {
            e.preventDefault();
            handleSearch(Search);
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <button className="bg-numidiaOrange text-white px-10 py-2 rounded-xl text-lg font-GothamMedium hidden lg:flex">
        Se connecter
      </button>
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
