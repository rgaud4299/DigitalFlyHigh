import Card from "./Card";

import List from "./data"
// data array




export default function ProductSection({title,description,believeIn,beingDifferent,serviceId}) {
  
  const services=List[+serviceId]
  return (
<div>

<section className="relative bg-page-bg pt-36 ">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20"
    style={{ backgroundImage: "url('/images/your-image.png')" }}
  ></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
    {/* Left Part */}
    <div className="px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white  pt-2 ">
        {title}
      </h2>
      <p className="mt-6 text-gray-300 leading-relaxed">
      {description}
      </p>
    </div>

    {/* Right Part */}
    <div className="relative px-6">
      <h2 className="text-3xl md:text-4xl font-bold flex flex-col">
        <span className="text-pink-500">{believeIn}</span>
        <span className="text-white relative inline-block my-1">
          {beingDifferent}
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500"></span>
        </span>
      </h2>
    </div>
  </div>
</section>

 <section className="bg-page-bg py-16 px-6 ">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* <div className="space-y-6 p-6 bg-page-bg min-h-screen"> */}
     
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
          Icon={service.Icon}
        />
      ))}
      </div>
    </section>
</div>
  );
}


