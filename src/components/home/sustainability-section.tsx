'use client';

export default function SustainabilitySection() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex justify-center items-center">
        <div className="w-full h-[912px] bg-[url('/sustainability-bg.png')] bg-no-repeat bg-right bg-contain rounded-[40px] flex items-center px-12">
          <div className="w-1/2 mt-20">
            <h1 className="text-4xl font-bold text-gray-600 mb-4">Sustainability for all.</h1>
            <p className="text-lg text-gray-500 mb-2">
              The UAE Green Agenda 2030 is a government-led initiative that aims to make the UAE a global leader in sustainable development.
              Gulf Ticket is proud to be a part of this initiative, and we are committed to doing our part to create a better future for the planet.
            </p>
            <p className="text-lg text-gray-500">
              We believe that everyone has a part to play in making the world a more livable place, and that we all need to work together to
              ensure that we leave a healthy planet for future generations.
            </p>
            <button className="mt-10 px-6 py-3 bg-[#F39C12] text-white text-xl rounded-full">Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
