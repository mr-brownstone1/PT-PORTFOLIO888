"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ConfigProvider, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FolderOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { projectCategories } from "@/config/projectCategories";

type MenuItem = Required<MenuProps>["items"][number];

const keyToPath: Record<string, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  ...Object.fromEntries(
    projectCategories.map((c) => [`projects-${c.slug}`, `/projects#${c.slug}`])
  ),
  stack: "/stack",
};

const items: MenuItem[] = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "about",
    label: "About",
    icon: <UserOutlined />,
  },
  {
    key: "projects",
    label: "Project",
    icon: <FolderOutlined />,
    children: projectCategories.map((c) => ({
      key: `projects-${c.slug}`,
      label: c.label,
    })),
  },
  {
    type: "divider",
  },
  {
    key: "stack",
    label: "Stacks",
    icon: <SettingOutlined />,
  },
];

function pathToSelectedKey(pathname: string): string {
  if (pathname === "/" || pathname === "") return "home";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/stack")) return "stack";
  return "home";
}

export default function Sidebar() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const selectedKey = pathToSelectedKey(pathname);
  const openKeys = pathname.startsWith("/projects") ? ["projects"] : undefined;

  const onClick: MenuProps["onClick"] = (e) => {
    const path = keyToPath[e.key];
    if (path) router.push(path);
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-zinc-800 bg-[var(--sidebar)] shadow-xl">
      <div className="flex items-center gap-3 border-b border-zinc-800/80 p-6">
        <div className="shrink-0">
          <Image
            src="/avatar.png"
            alt="Suphaphorn"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-zinc-700"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate font-semibold text-white">Suphaphorn</p>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">UX/UI Designer</p>
        </div>
      </div>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "var(--accent)",
            motionDurationMid: "0.25s",
            motionEaseInOut: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          },
          components: {
            Menu: {
              itemBorderRadius: 8,
              itemMarginInline: 0,
              motionDurationSlow: "0.25s",
              itemSelectedBg: "var(--accent)",
              itemSelectedColor: "#ffffff",
            },
          },
        }}
      >
        <Menu
          theme="dark"
          onClick={onClick}
          selectedKeys={[selectedKey]}
          defaultOpenKeys={openKeys}
          mode="inline"
          items={items}
          className="!border-0 min-h-full px-2 py-4 [&_.ant-menu-item]:!rounded-lg [&_.ant-menu-submenu-title]:!rounded-lg"
          style={{ width: "100%" }}
        />
      </ConfigProvider>
    </aside>
  );
}
