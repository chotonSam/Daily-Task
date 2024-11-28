export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex  items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}

        <a href="/">
          <div className="flex items-center">
            {/* Icon */}
            <div className="bg-light-cyan rounded-full p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="rgb(245, 191, 66)" /* Applying the same RGB color to the icon's stroke */
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            {/* Text with the desired RGB color */}
            <h1 className="text-[rgb(245,191,66)] font-bold text-3xl">
              TaskCraft
            </h1>
          </div>
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
}
