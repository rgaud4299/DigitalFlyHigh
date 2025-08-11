// FAQAccordion.tsx
import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { defaultOptions, fadeInUpScale } from "../utils/Animations/animations";
import { useFadeInOnView } from "../utils/Animations/useFadeInOnView";

const faqData = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with a wide range of businesses—from early-stage startups to established enterprises—across industries like tech, e-commerce, professional services, and more. Our approach adapts to your size and goals.",
  },
  {
    question: "How much do your digital marketing services cost?",
    answer:
      "Pricing varies depending on scope, channels, and goals. We offer bespoke packages that align with your budget and desired outcome. Typically, we start with a discovery call to define needs and then present tiered options.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Early indicators can appear within a few weeks, but meaningful, sustainable results usually take 2-4 months depending on the channel and competitiveness of the market.",
  },
  {
    question: "How do you measure the success of a campaign?",
    answer:
      "Success is measured against agreed KPIs—such as traffic growth, conversion rate improvement, ROI, lead quality, and revenue impact—using analytics tools and regular reporting.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "We believe in earning your trust through performance. While some engagements have minimum terms for effectiveness, we’re transparent up front and offer flexibility based on the project.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start with a free consultation. We'll audit your current presence, align on goals, and propose a tailored plan. From there, onboarding is smooth and structured.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };
  const { ref, ...motionProps } = useFadeInOnView();

  return (
    <div ref={ref}
      className="min-h-[60vh] flex flex-col md:flex-row bg-page-bg bg-gradient-to-b from-page-bg to-color-contact text-white px-6 sm:px-10 md:px-36 py-16 sm:py-20 md:py-28 md:pt-36 gap-10 sm:gap-14">
      {/* Left Title */}
      <Motion.div

        {...motionProps}
        className="md:flex-2 flex flex-col justify-start md:w-1/2">
        <div className="mb-3 text-sm text-sky-400 font-medium tracking-wide">
          [ <span className="text-white font-medium">Everything You Need to Know</span> ]
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Frequently Asked
          <span className="block text-gray-300 -mt-2">Questions</span>
        </div>
      </Motion.div>

      {/* Right Accordion */}
      <Motion.div

        {...motionProps}
        className="md:flex-1 w-full max-w-3xl md:px-5 md:ms-5">
        <div className="space-y-6">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-gray-600 pb-2">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="text-base sm:text-lg font-medium">{item.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="ml-3 flex-shrink-0"
                  >
                    <ChevronDown size={20} strokeWidth={2} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: "auto", opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden text-gray-300"
                    >
                      <div className="pt-3 pb-2 text-sm sm:text-base">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Motion.div>
    </div>
  );
}