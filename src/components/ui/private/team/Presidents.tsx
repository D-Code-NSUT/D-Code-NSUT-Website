import Image from 'next/image'

function President() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-10 px-6 md:px-12 xl:px-32">
        <div className="text-center">
          <h2 className="text-center mb-4 text-2xl text-gray-900 font-bold md:text-4xl">Meet our Team</h2>
          <p className="text-gray-600 lg:w-3/4 lg:mx-auto">Our team at D&apos;Code NSUT comprises passionate and dedicated individuals committed to fostering a vibrant tech community. Each member brings unique skills and expertise, working collaboratively to organize events, workshops, and projects. Together, we strive to create an inclusive environment where members can learn, innovate, and excel. Meet the brilliant minds behind our initiatives, always ready to support and guide you on your journey in the tech world.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 items-center">
          <div className="space-y-4 text-center order-2 sm:order-1">
            <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-48 lg:w-64 lg:h-64"
              src="/core/YashiPitti.webp" alt="woman" width={256} height={256} />
              <div>
              <a href="https://www.linkedin.com/in/yashi-pitti-19023423a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADt6hvwBewa_RLF6XjBzeKiXDhUFfY750hk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BoxETLQsPTey6cdzlTm61Qg%3D%3D" target="_blank" className="text-2xl font-bold">Yashi Pitti</a>
              <span className="block text-sm text-gray-500">Vice-President</span>
            </div>
          </div>
          <div className="space-y-4 text-center sm:order-1">
            <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              src="/president.jpg"  alt="man" width={256} height={320} />
            <div>
              <a href="https://www.linkedin.com/in/anshul-goyal-a9b537254?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD66JFcBl9RnrmvNTULJfwv4pdySAsSUFDw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B6Hphmv6hS%2B2t9RPuP1Q9mQ%3D%3D" target="_blank" className="text-2xl font-bold">Anshul Goyal</a>
              <span className="block text-sm text-gray-500">President</span>
            </div>
          </div>
          <div className="space-y-4 text-center order-2 sm:order-1">
            <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-48 lg:w-64 lg:h-64"
              src="/core/MuskanGupta.jpeg" alt="woman" width={256} height={256} />
            <div>
            <a href="https://www.linkedin.com/in/muskan-gupta-96028b251?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD4nv5gB5zgpVmHsBSHNuq8CfRAAXoqnk94&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BEqXEbFcXR%2Fma6wHqJfKFZg%3D%3D" target="_blank" className="text-2xl font-bold">Muskan Gupta</a>
              <span className="block text-sm text-gray-500">Vice-President</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default President;
