"use client";

import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import {
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@heroui/react";
import { AlignLeft, DoorOpen } from "lucide-react";
// import Theme from "@/components/theme";
// import Logo from "./logo";
import { useState } from "react";
import { usePathname } from "next/navigation";
// import SelectedTerm from "../app/[lang]/(user)/manager/(term)/selectedTerm";
// import useData from "@/hooks/useData";
// import { getUser } from "@/actions/common/user";
// import { CSkeleton } from "./heroui";

export default function UserLayout({
  children,
  menu,
  isManager,
}: {
  children: React.ReactNode;
  menu: {
    label: string;
    url: string;
    icon: React.ReactNode;
  }[];
  isManager?: boolean;
}) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="grid lg:grid-cols-[auto_1fr] overflow-hidden ">
      <Sidebar {...{ sidebar, setSidebar, menu, isManager }} />
      <div className="flex gap-2 flex-col overflow-hidden ">
        <Header setSidebar={setSidebar} />
        <div className="min-h-[calc(100dvh-3.6rem)] p-2 rounded-xl overflow-hidden grid">
          {children}
        </div>
      </div>
    </div>
  );
}

function Sidebar({
  sidebar,
  setSidebar,
  menu,
  isManager,
}: {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  menu: {
    label: string;
    url: string;
    icon: React.ReactNode;
  }[];
  isManager?: boolean;
}) {
  const pathname = usePathname(),
    [, lang, role, selected] = pathname.split("/");

  return (
    <aside
      className={cn(
        "z-50 accent3 grid grid-cols-[auto_1fr] overflow-hidden  ",
        sidebar ? "max-lg:absolute max-md:inset-0 " : "max-lg:hidden"
      )}
    >
      <div className="max-xl:lg:w-60 w-80 bg-default-100 grid grid-rows-[auto_1fr_auto] overflow-hidden">
        {/* <Logo /> */}
        <div className="max-xl:lg:px-2 px-5 pt-10 grid gap-2 auto-rows-min overflow-auto">
          {menu.map(({ label, url, icon }, i) => (
            <Button
              key={i + ""}
              color="primary"
              variant={(selected ?? "") == url ? "solid" : "light"}
              className="justify-start capitalize"
              startContent={icon}
              as={Link}
              href={`/${lang}/${role}/${url}`}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="p-5 max-xl:lg:p-2 grid gap-2">
          {/* {isManager && <SelectedTerm />} */}
          {/* <User /> */}
        </div>
      </div>
      <div
        onClick={() => setSidebar((prev) => !prev)}
        className="md:hidden bg-foreground-500/50 backdrop-blur-xs"
      />
    </aside>
  );
}

function Header({
  setSidebar,
}: {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="z-30 h-12 p-2 flex gap-4 items-center max-lg:shadow-sm">
      <Button
        isIconOnly
        variant="light"
        color="primary"
        className="lg:hidden"
        onPress={() => setSidebar((prev) => !prev)}
      >
        <AlignLeft className="size-7" />
      </Button>
      <div className="flex-1 "></div>
      {/* <Theme /> */}
    </header>
  );
}

// function User() {
//   const pathname = usePathname(),
//     [, lang] = pathname.split("/"),
//     [data, isLoading] = useData(getUser, () => {});

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         {isLoading || !data ? (
//           <CSkeleton className="h-10" />
//         ) : (
//           <Button
//             color="primary"
//             variant="flat"
//             startContent={<Avatar src="/suffah.png" className="" />}
//             className="w-full h-fit py-1 grid grid-cols-[auto_1fr]"
//           >
//             <p className="grid justify-start">
//               <span className="text-medium overflow-hidden whitespace-nowrap ">
//                 {data.firstName} {data.fatherName} {data.lastName}
//               </span>
//               <span className="text-xs text-start">{data.role}</span>
//             </p>
//           </Button>
//         )}
//       </DropdownTrigger>
//       <DropdownMenu color="primary" variant="flat" className="">
//         <DropdownItem
//           key={"signout"}
//           startContent={<DoorOpen className="size-4" />}
//           color="danger"
//           as={Link}
//           href={`/${lang}/signout`}
//         >
//           Sign Out
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
