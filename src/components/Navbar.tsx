import { useEffect, useState } from "react";
import clsx from "clsx";

import { Home, Images, Music, Info } from "lucide-react";

const navItems = [
  {
    id: "hero",
    label: "Home",
    Icon: Home, // Use the imported component
  },
  {
    id: "gallery",
    label: "Gallery",
    Icon: Images,
  },
  {
    id: "music",
    label: "Music",
    Icon: Music,
  },
  {
    id: "footer",
    label: "Footer",
    Icon: Info,
  },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "fixed z-[100] border border-white/20 rounded-tl-2xl rounded-tr-2xl md:rounded-2xl backdrop-blur-xl transition-all duration-300 shadow-md",
        "md:top-1/2  md:right-4 md:-translate-y-1/2 md:flex md:flex-col md:gap-4 md:p-3",
        "bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-4 md:w-auto",
        "bg-white/10 px-4 py-2 flex justify-around md:justify-start",
        scrolling && "md:bg-[var(--component-bg)] md:border-white/20"
      )}
    >
      {navItems.map((item) => {
        const { Icon } = item;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`w-7 h-13 flex items-center justify-center hover:scale-110 transition-transform ${
              active === item.id ? "text-white" : "text-[color:var(--prim)]"
            }`}
            aria-label={item.label}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
