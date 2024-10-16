import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="text-center py-[15px] bg-blue-300 flex justify-between items-center px-[35px]">
        <div className="text-[30px] font-semibold text-blue-700" ><Link href="/" >Logo</Link></div>
        <div className="flex gap-4 text-[18px] text-white">
            <Link href="/about" >About</Link>
            <Link href="/blogs" >Blogs</Link>
            <Link href="/contact" >Contact</Link>
        </div>
        <div className="flex gap-3" >
            <button className="px-[18px] py-[7px] bg-blue-600 rounded-md text-white">SIgn In</button>
            <button className="px-[18px] py-[7px] bg-blue-600 rounded-md text-white">SIgn Up</button>
        </div>
    </div>
  )
}

export default Header