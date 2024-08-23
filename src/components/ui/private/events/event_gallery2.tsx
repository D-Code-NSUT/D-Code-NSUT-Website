import Image from "next/image";

export default function Event_gallery2() {
  return (
    <div>
      <div className="px-5 md:px-10 mx-auto max-w-[85rem]">

        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center ">

          <div className="py-6 md:py-10 lg:col-span-3 lg:col-start-5 lg:row-start-1 lg:text-start text-center">
            <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl pb-2">
              Byte Bazaar </h1>
            <p className="mt-3 text-lg md:text-xl xl:text-2xl text-gray-800 ">
              Bid for your problem statement event and other moments</p>
          </div>

          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1 sm:px-3 md:px-5 lg:px-0 flex items-center justify-center">
            <div className="flex flex-wrap md:-m-2 items-center justify-center md:max-w-[45rem] lg:max-w-[40rem]">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <img
                  alt="gallery"
                  className="h-full w-full rounded-lg object-cover object-center"
                  src="/eventHome/byte1.jpeg" />
                <img
                  alt="gallery"
                  className="h-full w-full rounded-lg object-cover object-center"
                  src="/eventHome/byte-2.jpeg" />
                <img
                  alt="gallery"
                  className="h-full w-full rounded-lg object-cover object-center"
                  src="/eventHome/byte-3.jpeg" />
                <img
                  alt="gallery"
                  className="h-full w-full rounded-lg object-cover object-center"
                  src="/eventHome/Bytebazaar.jpg" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}