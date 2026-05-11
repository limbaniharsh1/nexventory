"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { RiArrowRightSLine, RiCloseLine } from "react-icons/ri";
import { HeaderItem } from "./types";

interface Props {
  open: boolean;
  onClose: () => void;
  items: HeaderItem[];
  pathname: string;
}

const MobileNav = ({ open, onClose, items, pathname }: Props) => {
  const [openItem, setOpenItem] = useState<string>("");

  // Prevent body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      {/* Offcanvas */}
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-full bg-white shadow-xl transition-transform duration-300 ${
          open
            ? "pointer-events-auto translate-x-0"
            : "pointer-events-none -translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-800 transition hover:bg-gray-100"
          >
            <RiCloseLine className="size-6" aria-hidden />
          </button>
        </div>

        {/* Body */}
        <div className="h-[calc(100vh-73px)] overflow-y-auto p-4">
          <ul className="space-y-3">
            {items.map((item) => {
              const isOpen = openItem === item.id;

              return (
                <li
                  key={item.id}
                  className="overflow-hidden rounded-xl border border-gray-200"
                >
                  {/* Main Item */}
                  <div
                    onClick={() => {
                      if (item.subItems) {
                        setOpenItem(isOpen ? "" : item.id);
                      } else if (item.path) {
                        onClose();
                      }
                    }}
                    className="flex cursor-pointer items-center justify-between p-4"
                  >
                    {item.path ? (
                      <Link
                        href={item.path}
                        onClick={onClose}
                        className={`text-sm font-medium transition ${
                          pathname === item.path
                            ? "text-blue-600"
                            : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <span className="text-sm font-medium text-gray-800">
                        {item.title}
                      </span>
                    )}

                    {item.subItems && (
                      <RiArrowRightSLine
                        className={`size-5 shrink-0 text-neutral-500 transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                        aria-hidden
                      />
                    )}
                  </div>

                  {/* Collapse */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-2 border-t border-gray-100 bg-gray-50 p-4">
                        {item.subItems?.map((sub) => (
                          <li key={sub.path}>
                            <Link
                              href={sub.path}
                              onClick={onClose}
                              className={`block text-sm transition ${
                                pathname === sub.path
                                  ? "text-blue-600"
                                  : "text-gray-700 hover:text-blue-600"
                              }`}
                            >
                              {sub.title}
                            </Link>

                            {/* Nested Items */}
                            {sub.nestedSubItems && (
                              <ul className="mt-2 space-y-2 pl-4">
                                {sub.nestedSubItems.map((nested) => (
                                  <li key={nested.path}>
                                    <Link
                                      href={nested.path}
                                      onClick={onClose}
                                      className={`block text-sm transition ${
                                        pathname === nested.path
                                          ? "text-blue-600"
                                          : "text-gray-500 hover:text-blue-600"
                                      }`}
                                    >
                                      {nested.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
