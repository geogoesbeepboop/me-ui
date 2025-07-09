"use client";
import GooeyNav from "./GooeyNav";
import { useRouter, usePathname } from "next/navigation";
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaUserCircle, FaEnvelope } from "react-icons/fa";

const items = [
  { icon: <FaHome size={22} />, href: "/" },
  { icon: <FaUser size={22} />, href: "/about" },
  { icon: <FaBriefcase size={22} />, href: "/work" },
  { icon: <FaFolderOpen size={22} />, href: "/projects" },
  { icon: <FaUserCircle size={22} />, href: "/personal" },
  { icon: <FaEnvelope size={22} />, href: "/contact" },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const activeIndex = items.findIndex(item => item.href === pathname);
  const handleTabChange = (index: number) => {
    router.push(items[index].href);
  };
  return (
    <div style={{ height: "120px", position: "relative", marginBottom: "var(--space-xlarge)", display: "flex", justifyContent: "center" }}>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        activeIndex={activeIndex === -1 ? 0 : activeIndex}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        onTabChange={handleTabChange}
      />
    </div>
  );
} 