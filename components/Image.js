import Image from 'next/image'
import React from 'react'

function ImagePic() {
  return (
    <div className="flex items-center justify-end w-full">
        <Image 
          src='/lofi-window-pfp.png'
          alt='pfp-sachin'
          width={110}
          height={138}
          className="rounded-full shadow-md"
        />
    </div>
  )
}

export default ImagePic;