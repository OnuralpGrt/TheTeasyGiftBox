"use client";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  
  { name: "Ana Sayfa", href: "/" },
  { name: "Projeler", href: "/projects" },
  { name: "Galeri", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Hakkımızda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname()

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cezeri</span>
            <img
              className="h-24 w-26 object-cover"
              src="/Cezeri.jpeg"
              alt="Cezeri"
            />
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex lg:hidden mb-4">
          <a href = "https://www.itu.edu.tr" > <img src="/itu-logo.jpeg" width={84} height={84} alt="itü" /> </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={"text-sm font-semibold leading-6 text-gray-900 hover:border-b-2 hover:border-cezeri-light" + (pathname === item.href ? " border-b-2 border-cezeri-light" : "")}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block mb-4">
            <Image src="/itu-logo.jpeg" width={84} height={84} alt="itü" />
        </div>
       
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cezeri</span>
              <img
                className="h-24 w-26 object-cover"
                src="/Cezeri.jpeg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:border-b-2 hover:border-cezeri-light" + (pathname === item.href ? " border-b-2 border-cezeri-light" : "")}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
