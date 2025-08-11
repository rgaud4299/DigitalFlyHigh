import { motion as Motion } from "framer-motion";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";

export default function LeadershipSection({
  headingMain = 'The Minds Behind',
  headingAccent = 'Your Growth',
  quote = `“True digital partnership is about more than just delivering services. It’s about aligning our strategy with our clients' goals to achieve measurable, impactful results together.”`,
  personName = 'Rajesh Arkhel',
  personTitle = 'Director',
  imageSrc = 'https://digitalflyhigh.in/images/team/md.webp', // replace with actual path
  imageAlt = 'Rajesh Arkhel portrait',
}) {
 const { ref, ...motionText } = useFadeInOnView();  
  return (
    <section
      aria-label="Leadership"
      className="section-container"
    >

      <div ref={ref} className="max-w-7xl mx-auto px-8">
        <Motion.div   
        {...motionText} 
          className="text-center mb-12">
          <h1 className="font-semibold text-[1.5rem] md:text-[3rem] leading-none">
            <span className="block">{headingMain}</span>
            <span className="block gradient-text">{headingAccent}</span>
          </h1>
        </Motion.div>

        <div className="mt-12 px-8 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-shrink-0">
            <div className="relative rounded-xl overflow-hidden w-full max-w-[330px]  aspect-[6/5]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="object-cover w-full h-full rounded-xl"
              />
              <div className="absolute top-4 left-full md:left-auto md:right-auto -translate-x-2/3 md:-translate-x-0">
                {/* empty to preserve layout if needed */}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-start gap-6 ">
              <div className="flex-shrink-0">
          
              </div>
              <div>
                <p className="text-white text-3xl md:text-4xl font-normal leading-snug mb-4">
                  {quote}
                </p>
                <div className="mt-2">
                  <p className="font-semibold text-lg">{personName}</p>
                  <p className="text-sm text-gray-400">{personTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
