
export default function Event_gallery1() {
  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">

          <div className="lg:col-span-3 lg:text-start text-center">
            <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl pb-2">
              Innohacks&apos;24</h1>
            <h1 className="mt-3 text-lg md:text-xl xl:text-2xl text-gray-800 ">
              The actual hackathon where teams thrive for their last breathe</h1>
          </div>

          <div className="lg:col-span-4 mt-12 sm:px-3 md:px-5 lg:mt-0 lg:px-0">
              <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full md:w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="/eventHome/Hackathon.jpeg" />
                  </div>
                  <div className="w-full md:w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="/eventHome/Hack.jpeg" />
                  </div>
                  <div className="hidden md:block w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="/eventHome/hack-3.jpeg" />
                  </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="/eventHome/hack-5.jpeg" />
                  </div>
                  <div className="hidden md:block w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="/eventHome/hack-2.jpeg" />
                  </div>
                  <div className="w-full md:w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center"
                      src="/eventHome/hack-6.jpeg" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}