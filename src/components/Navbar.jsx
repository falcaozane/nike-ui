

export const Navbar = () => {
  return (
    <div className='mx-auto my-4 items-center'>
        <nav className='flex justify-between h-[72px] lg:max-w-7xl mx-auto'>
            <div className='logo mt-2'>
                <img src='images/brand_logo.png' alt='Nike'/>
            </div>
            <div className='flex'>
                <ul className='flex gap-6 items-baseline mt-5 font-semibold'>
                    <li href="" className="hover:underline">Menu</li>
                    <li href="" className="hover:underline">Location</li>
                    <li href="" className="hover:underline">About</li>
                    <li href="" className="hover:underline">Contact</li>
                </ul>
            </div>
            <button className="rounded-full bg-red-600 text-white px-3 h-[34px] w-[72px] mt-4 place-items-center text-xl">Login</button>
        </nav>
    </div>
  )
}
