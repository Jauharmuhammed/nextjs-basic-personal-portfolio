import Link from "next/link";
import { motion as m } from "framer-motion";
import { container, item } from "../animation";

export default function Contact() {
  return (
    <m.main
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="text-gray-200 absolute top-0 left-0 w-full h-full bg-gray-900 lg:px-48 px-16"
    >
      <div className="my-96 p-1 font-archivo overflow-hidden ">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="lg:text-9xl text-6xl lg:text-right text-center"
        >
          Let&apos;s Talk
        </m.h1>
      </div>
      <div className="font-latoBold  lg:text-6xl text-2xl ">
          <m.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link target='_blank' href="https://www.linkedin.com/in/jauharmuhammed/">Linkedin </Link>
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link target='_blank' href="https://github.com/Jauharmuhammed">Github</Link>
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                <Link target='_blank' href="mailto:jauharmuhammedk@gmail.com"> Email</Link>
              </m.li>
            </div>
          </m.ul>
        </div>
    </m.main>
  );
}