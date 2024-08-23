import Event_carousel from "@/components/ui/private/events/event_carousel";
import Event_gallery1 from "@/components/ui/private/events/event_gallery1";
import Event_gallery2 from "@/components/ui/private/events/event_gallery2";

export default function Event() {
  return (
    <div>
      
      <div className="flex justify-center items-center gap-2 flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-10 lg:pb-14 px-5">
        <h1 className=" flex justify-center text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600 ">
          OUR PAST
        </h1>
        <h1 className="flex justify-center font-extrabold text-gray-900 dark:text-white">EVENTS</h1>
      </div>

      <Event_gallery1 />
      <div className="py-4 lg:py-10"></div>
      <Event_gallery2 />
    </div>
  );
}