import ProjectBasedCard from "../Components/ProjectBasedCard";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";
import { motion as Motion } from "framer-motion";

export default function ProjectBasedSolutions() {
  const { ref, ...motionText } = useFadeInOnView();

  return (
    <div className="section-container">
      <Motion.div ref={ref} {...motionText} className="max-w-4xl text-center mb-0">
        <h4 className="text-4xl font-semibold text-slate-100 leading-tight drop-shadow-md my-0">
          Project-Based Solutions
        </h4>
      </Motion.div>
      <section className="py-16 px-4 sm:px-6 md:px-24 lg:px-28 ">

        <ProjectBasedCard />
      </section>
    </div>
  );
}
