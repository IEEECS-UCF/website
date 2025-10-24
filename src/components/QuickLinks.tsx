// src/components/QuickLinks.tsx
import { motion } from "framer-motion";

interface Link {
  href: string;
  label: string;
}

const links: Link[] = [
  { href: "/about", label: "About" },
  { href: "/connect", label: "Connect" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/sponsorship", label: "Sponsorship" },
];

export default function QuickLinks() {
  return (
    <motion.nav
      className="flex flex-wrap justify-center gap-4 py-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {links.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          className="px-6 py-3 rounded-lg bg-ieee-blue text-white font-semibold shadow hover:bg-ieee-orange transition"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          {link.label}
        </motion.a>
      ))}
    </motion.nav>
  );
}
