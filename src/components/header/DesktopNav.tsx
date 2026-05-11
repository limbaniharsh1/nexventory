"use client";

import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { HeaderItem } from "./types";

interface Props {
  items: HeaderItem[];
  pathname: string;
}

const DesktopNav = ({ items, pathname }: Props) => {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {items.map((item) => (
        <div key={item.id} className="group relative">
          <Link
            href={item.path || "#"}
            className={`flex items-center gap-1 text-base font-semibold transition ${
              pathname === item.path
                ? "text-blue-600"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            {item.title}

            {item.subItems && (
              <RiArrowDownSLine
                className="size-4 shrink-0 text-neutral-500"
                aria-hidden
              />
            )}
          </Link>

          {/* Dropdown */}
          {item.subItems && (
            <div className="invisible absolute left-0 top-full mt-3 min-w-[220px] rounded-xl border bg-white p-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              <ul className="space-y-2">
                {item.subItems.map((sub) => (
                  <li key={sub.path}>
                    <Link
                      href={sub.path}
                      className="block text-sm font-medium text-gray-700 transition hover:text-blue-600"
                    >
                      {sub.title}
                    </Link>

                    {/* Nested */}
                    {sub.nestedSubItems && (
                      <ul className="mt-2 space-y-1 pl-4">
                        {sub.nestedSubItems.map((nested) => (
                          <li key={nested.path}>
                            <Link
                              href={nested.path}
                              className="text-sm text-gray-500 hover:text-blue-600"
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
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;
