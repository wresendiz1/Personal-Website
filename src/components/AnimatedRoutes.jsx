import { useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={location.pathname}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default AnimatedRoutes;
