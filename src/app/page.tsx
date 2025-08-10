import AlumniCarousel from "@/components/ui/private/home/AlumniCarousel";
import Roadmap_home from "@/components/ui/private/home/Roadmap_home";
import WallOfWidom from "@/components/ui/private/home/WallOfWidom";
import Card_section from "@/components/ui/private/home/card_section";
import JoinUs from "@/components/ui/private/home/JoinUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="light pt-3 flex flex-col gap-20">
      <div className="px-6 sm:px-8 lg:px-10 ">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div className="flex flex-col justify-center w-full h-full">
            <h1 className="text-3xl font-bold text-blue-600 sm:text-4xl lg:text-6xl lg:leading-tight">
              D&apos;Code
            </h1>
            <h1 className="text-2xl font-bold text-gray-800 sm:text-2xl lg:text-4xl lg:leading-tight">The Competitive Programming Society of NSUT</h1>
            <p className="py-3 text-lg text-gray-800 dark:text-neutral-400">
              Batch of 2024-2025
            </p>

            <JoinUs />

            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5"></div>
          </div>

          <div className="relative ms-4">
            <Image
              className="w-full rounded-md"
              src="/group.jpeg"
              alt="Image Description"
              width={1440}
              height={960}
              unoptimized
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 lg:px-12">
        <WallOfWidom />
      </div>

      <div className="px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-3">
          <div className="flex flex-col items-center lg:items-start lg:gap-1">
            <div className="flex lg:flex-col gap-2 md:gap-3">
              <h1 className="text-4xl sm:text-5xl xl:text-7xl font-semibold">Our</h1>
              <h1 className="text-4xl sm:text-5xl xl:text-7xl font-semibold">Departments</h1>
            </div>
            <blockquote className="text-lg xl:text-xl mt-4 xl:pl-4 italic">&quot;Dedicated teams, diverse expertise.&quot;</blockquote>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 lg:gap-6 xl:gap-8 items-center">
            <a href="/team">
              <Card_section
                title="CP"
                contents="Sharpen your problem-solving skills with coding challenges and algorithmic puzzles. Compete and collaborate with fellow enthusiasts."
              />
            </a>
            <a href="/team">
              <Card_section
                title="Web Dev"
                contents="Learn HTML, CSS, JavaScript, and modern frameworks. Build responsive websites and applications, and collaborate on real-world projects."
              />
            </a>
            <a href="/team">
              <Card_section
                title="AI & ML"
                contents="Discover neural networks, data processing, and predictive analytics. Engage in projects, competitions, and workshops to boost your skill."
              />
            </a>
            <a href="/team">
              <Card_section
                title="Content & Design"
                contents="Master graphic design, UI/UX principles, and content strategy. Create compelling content and designs to build a standout portfolio."
              />
            </a>
          </div>
        </div>
      </div>

      <Roadmap_home />

      <div className="px-16">
        <AlumniCarousel />
      </div>

      <div className="mx-auto px-3 md:px-5 max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">

        <div className="text-5xl font-semibold pb-10 text-center"><a className="hover:underline hover:underline-offset-3" href="\event">Events</a></div>

        <div className="grid grid-cols-6 gap-2">
          <div className=" overflow-hidden rounded-xl col-span-6 sm:col-span-3 max-h-60 sm:max-h-80">
            <Image className="h-full w-full object-cover "
              src="/eventHome/ethnic.jpeg"
              alt=""
              width={640}
              height={320} />
          </div>
          <div className=" overflow-hidden rounded-xl col-span-6 sm:col-span-3 max-h-60 sm:max-h-80">
            <Image className="h-full w-full object-cover  "
              src="/eventHome/ByteBazaar.jpeg"
              alt=""
              width={640}
              height={320} />
          </div>
          <div className=" overflow-hidden rounded-xl col-span-2 max-h-52">
            <Image className="h-full w-full object-cover "
              src="/eventHome/group.jpeg"
              alt=""
              width={213}
              height={208} />
          </div>
          <div className=" overflow-hidden rounded-xl col-span-2 max-h-52">
            <Image className="h-full w-full object-cover "
              src="/eventHome/Hack.jpeg"
              alt=""
              width={213}
              height={208} />
          </div>
          <div className=" overflow-hidden rounded-xl col-span-2 max-h-52">
            <Image className="h-full w-full object-cover "
              src="/eventHome/Hackathon.jpeg"
              alt=""
              width={213}
              height={208} />
          </div>
        </div>
      </div>

    </main>
  );
}
