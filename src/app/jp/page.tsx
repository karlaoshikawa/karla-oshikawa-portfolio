"use client";

import { usePathname } from "next/navigation";
import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Homejp: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const locale = pathSegments[1];

  return (
    <div>
      <Header lang={locale} />
      <Hero />
      <AboutMe lang={locale} />
    </div>
  );
};

export default Homejp;
