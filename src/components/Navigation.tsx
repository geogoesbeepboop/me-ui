"use client";
import GooeyNav from "./GooeyNav";
import { useRouter, usePathname } from "next/navigation";
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const items = [
  { icon: <FaHome size={22} />, href: "/" },
  { icon: <FaUser size={22} />, href: "/about" },
  { icon: <FaBriefcase size={22} />, href: "/work" },
  { icon: <FaFolderOpen size={22} />, href: "/projects" },
  { icon: <FaEnvelope size={22} />, href: "/contact" },
  { icon: <GiPerspectiveDiceSixFacesRandom size={22} />, href: "/surprise" },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const activeIndex = items.findIndex(item => item.href === pathname);
  const handleTabChange = (index: number) => {
    router.push(items[index].href);
  };
  return (
    <div style={{ height: "50px", position: "relative", display: "flex", 
    justifyContent: "center", zIndex: 1000}}>
      <GooeyNav
        items={items}
        particleCount={0}
        particleDistances={[90, 10]}
        particleR={100}
        activeIndex={activeIndex === -1 ? 0 : activeIndex}
        animationTime={0}
        timeVariance={0}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        onTabChange={handleTabChange}
      />
    </div>
  );
} 