import { Fragment, useEffect, useState } from "react";
import { Space, Affix, Menu, Dropdown, Avatar, Badge } from "antd";
import Router from "next/router";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
const cookie = require("cookie");

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [me, setMe] = useState({});

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    if (cookies && cookies.hasOwnProperty("token") && cookies.token) {
      setIsLogin(true);
      const userRes: any = import("../../services/user.service").then(
        async (service) => await service.getUserRetrive({})
      );
      userRes.then((res) => {
        if (res.status === 401) {
          setCurrentUser()
        }
        else if (res.status === 200){
          setMe(res.data)
        }
      });
    }
  }, []);

  const setCurrentUser = async () => {
    const response: any = await import("../../services/user.service").then(
      async (service) => await service.getUserRetrive({})
    );
    if (response && response.status === 200){
      setMe(response.data)
    }
    else if (response && response.status === 401) {
      const isRefreshed = await refreshLogin()
      if (isRefreshed == true) {
        setCurrentUser()
      }
      else {
        // something went wrong
      }
    }
  }

  const refreshLogin = async () => {
    const cookies = cookie.parse(document.cookie);
    const refresh = cookies.refresh;
    const response: any = await import("../../services/user.service").then(
      async (service) =>
        await service.postUserLoginRefresh({ data: { refresh: refresh } })
    );
    if (response && response.status === 200) {
      const maxAge = 864000000;
      await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: response.data.access,
          refresh: refresh,
          tokenMaxAge: maxAge,
        }),
      });
      return true
    }
    else {
      return false
    }
  };

  const renderLogoutRightMenu = () => {
    return (
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Space>
          <Link href="/signin" passHref>
            <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              LOGIN
            </a>
          </Link>
          <Link href="/signup" passHref>
            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              SIGNUP
            </a>
          </Link>
        </Space>
      </div>
    );
  };

  const renderLoginRightMenu = () => {
    const name = me["username"];

    const callLogout = async () => {
      try {
        const responseLogout = await fetch("/api/logout", { method: "POST" });
        if (responseLogout) {
          window.location.reload();
        }
      } catch (error) {
        // console.log("error")
      }
    };

    const menu = (
      <Menu className="origin-top-right absolute right-0 uppercase mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item key="5">
          <span className="font-semibold whitespace-normal">
            <Avatar src={"/avatar.jpg"} /> {name}
          </span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4" onClick={() => Router.push("/profile")}>
          <a>Profile</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="6" onClick={() => callLogout()}>
          Logout
        </Menu.Item>
      </Menu>
    );

    return (
      <>
        <Dropdown overlay={menu} trigger={["click"]} className="ml-3 relative">
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <Avatar src={"/avatar.jpg"} />
          </a>
        </Dropdown>
      </>
    );
  };

  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>

          <div className="right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:order-4">
            {isLogin ? renderLoginRightMenu() : renderLogoutRightMenu()}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
