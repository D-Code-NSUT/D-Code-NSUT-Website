import React from 'react'
import Image from 'next/image'


interface BlogtemplateProps {
  title: string;
  content: string;
  imageUrl:string;
  author:string;
  authorUrl:string;
}

const Blogtemplate: React.FC<BlogtemplateProps> = ({ title, content,imageUrl,author,authorUrl }) => {

  return (
    <>
    <div>



<div className="max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div className="max-w">
 
    <div className="flex justify-between items-center mb-6">
      <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        <div className="flex-shrink-0">
          <Image className="size-12 rounded-full" src={authorUrl} alt="Image ds" width={48} height={48}/>
        </div>

        <div className="grow">
          <div className="flex justify-between items-center gap-x-2">
            <div>
  
              <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                  <span className="font-semibold text-gray-800">
                    {author}
                  </span>

              
                  <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl" role="tooltip">
              
                    <div className="p-4 sm:p-5">
                      <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                        <div className="flex-shrink-0">
                          <Image className="size-8 rounded-full" src={authorUrl} alt="Image Description" width={32} height={32}/>
                        </div>

                        
                      </div>
                      
                    </div>

                    <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                      

                      
                    </div>
             
                  </div>
                </div>
              </div>


              
            </div>

          
      
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-5 md:space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>

      </div>


      <figure>
        <Image className="w-full object-cover rounded-xl" src={imageUrl} alt="Image Description" width={800} height={450}/>
        <figcaption className="mt-3 text-sm text-center text-gray-500">
          A woman sitting at a table.
        </figcaption>
      </figure>

      
     

     

      <div className="space-y-3">
       
      </div>


      <p className="text-lg text-gray-800">{content}</p>

      <div>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
          Plan
        </a>
        <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200" href="#">
          Web development
        </a>

      </div>
    </div>

  </div>
</div>

<div className="sticky bottom-6 inset-x-0 text-center">
  <div className="inline-block bg-white shadow-md rounded-full py-3 px-4">



  </div>
</div>




</div>
</>
  )
}

export default Blogtemplate