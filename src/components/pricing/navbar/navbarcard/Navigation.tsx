import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavListComplData } from "./NavListData.ts";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    opacity: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    opacity: 0,
  },
};

export const Navigation = ({ closeMenu }: { closeMenu: () => void }) => (
  <motion.ul
    variants={variants}
    className="nav-ul  shadow-lg absolute h-screen right-0 w-[280px]  bg-white"
  >
    {NavListComplData.map((item, index: number) => (
      <MenuItem item={item} key={index} closeMenu={closeMenu} />
    ))}
  </motion.ul>
);
