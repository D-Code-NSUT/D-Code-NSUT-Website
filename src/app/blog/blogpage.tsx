import React from 'react'
import Image from 'next/image'

interface BlogpageProps {
    title: string;
    
    slugurl:string;
    imageUrl:string;
    author:string;
    authorUrl:string;
}

const Blogpage: React.FC<BlogpageProps> = ({ title, slugurl,imageUrl,author,authorUrl }) => {

  return (
    <div>



  

    {/* blog card */}



  
    <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 " href={`/blog/${slugurl}`}>
      <div className="aspect-w-16 aspect-h-11">
        <Image className="w-full object-cover rounded-xl" src={imageUrl} alt="Image Description" width={400} height={275}/>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800 ">
          {title}
        </h3>
        
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <Image className="size-8 rounded-full" src={authorUrl} alt="Image Description" width={32} height={32}/>
        <div>
          <h5 className="text-sm text-gray-800 ">{author}</h5>
        </div>
      </div>
    </a>


  

</div>

  )
}

export default Blogpage