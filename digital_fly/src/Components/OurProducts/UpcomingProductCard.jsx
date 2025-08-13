import {motion as Motion  } from "framer-motion";


export default function UpcomingProductCard({product}) {
  return (
    <Motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-card-bg2 rounded-xl overflow-hidden p-5 text-white shadow-lg"
    >
      {/* Teaser Image */}
      <div className="relative w-full h-48 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover filter blur-sm opacity-70"
        />
        <span className="absolute top-3 left-3 bg-btn-color px-2 py-1 text-xs rounded">
          {product.status}
        </span>
      </div>

      {/* Content */}
      <h3 className="mt-4 text-xl font-bold">{product.name}</h3>
      <p className="text-sm opacity-80">{product.tagline}</p>
      <p className="mt-2 text-sm"><strong>Launch:</strong> {product.timeline}</p>

      <ul className="mt-3 list-disc list-inside text-sm space-y-1">
        {product.mainFeatures.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <a
        href={product.signupLink}
        className="mt-4 inline-block bg-btn-color hover:bg-btn-color-hover px-4 py-2 rounded-md text-sm font-medium"
      >
        Sign Up for Updates
      </a>
    </Motion.div>
  );
}
