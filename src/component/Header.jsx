export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex  items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}

        <a href="/">
          <div className="flex items-center  justify-center border-2 border-yellow-500 p-1 pr-2 rounded-lg">
            {/* Icon */}
            <div className="rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#facc15" /* Hex code for yellow-500 */
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-9 h-9"
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            {/* Text */}
            <h1 className="text-yellow-400 font-bold text-2xl">TaskCraft</h1>
          </div>
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
}
