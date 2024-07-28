"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/solid";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className=" bg-gray-200 md:py-4">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-red-500 p-3">
            <Bars3Icon className="h-6" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="gap-4">
              <SheetClose asChild>
                <Link
                  className={`${
                    pathname == "/" ? "text-red-500" : "text-gray-500 "
                  }  hover:text-gray-300  uppercase text-sm font-bold `}
                  href="/"
                >
                  Home
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  className={`${
                    pathname == "/about" ? "text-red-500" : "text-gray-500 "
                  }  hover:text-gray-300  uppercase text-sm font-bold `}
                  href="/about"
                >
                  About
                </Link>
              </SheetClose>

              <SheetClose asChild></SheetClose>

              <SheetClose asChild>
                <Link
                  className={`${
                    pathname == "/resume" ? "text-red-500" : "text-gray-500 "
                  }  hover:text-gray-300  uppercase text-sm font-bold `}
                  href="/resume"
                >
                  Resume
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  className={`${
                    pathname == "/works" ? "text-red-500" : "text-gray-500 "
                  }  hover:text-gray-300  uppercase text-sm font-bold `}
                  href="/works"
                >
                  Works
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  className={`${
                    pathname == "/testimonials"
                      ? "text-red-500"
                      : "text-gray-500 "
                  }  hover:text-gray-300  uppercase text-sm font-bold `}
                  href="testimonials"
                >
                  testimonials
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  className={`${
                    pathname == "/contacts" ? "text-red-500" : "text-white "
                  }  hover:text-gray-300  uppercase text-sm font-bold `}
                  href="/contacts"
                >
                  Contacts
                </Link>
              </SheetClose>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop size menu */}

      <div className="hidden md:flex max-w-6xl mx-auto space-x-8 items-center justify-center">
        <Link
          className={`${
            pathname == "/" ? "text-red-500" : "text-black "
          } menu_option`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${
            pathname == "/about" ? "text-red-500" : "text-black "
          } menu_option`}
          href="/about"
        >
          About
        </Link>

        <Link
          className={`${
            pathname == "/resume" ? "text-red-500" : "text-black "
          } menu_option`}
          href="/resume"
        >
          Resume
        </Link>
        <Link
          className={`${
            pathname == "/works" ? "text-red-500" : "text-black "
          } menu_option`}
          href="/works"
        >
          Works
        </Link>

        <Link
          className={`${
            pathname == "/testimonials" ? "text-red-500" : "text-black "
          } menu_option`}
          href="testimonials"
        >
          testimonials
        </Link>

        <Link
          className={`${
            pathname == "/contacts" ? "text-red-500" : "text-black "
          } menu_option`}
          href="/contacts"
        >
          Contacts
        </Link>
      </div>
    </header>
  );
}

export default Header;
