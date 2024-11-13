export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex  items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 12l4 4L19 7"
                />
              </svg>
            </div>
            <h1
              className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600 tracking-wide"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              TaskRadar
            </h1>
          </div>
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
}
