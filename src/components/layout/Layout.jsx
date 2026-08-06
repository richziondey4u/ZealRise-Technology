import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import ScrollProgress from "../ui/ScrollProgress.jsx";
import BackToTop from "../ui/BackToTop.jsx";
import CursorGlow from "../ui/CursorGlow.jsx";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative flex flex-col min-h-screen bg-bg text-text">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:text-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <CursorGlow />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex-1 pt-16 md:pt-20"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <BackToTop />
      <Footer />
    </div>
  );
}