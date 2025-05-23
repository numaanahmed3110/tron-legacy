import logo from "../assets/TRON.svg";

const Hero = () => {
  return (
    <div id="hero">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-75"
          src="https://res.cloudinary.com/duzidxl2j/video/upload/v1744234212/TronLegacyVid_compressed_wmy0ow.mp4"
          autoPlay
          preload="auto"
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-50 pointer-events-none"></div>

        {/* Bottom fade effect that blends into #02151b */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#02151b] to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-start pt-8 px-4 text-white">
          <nav className="flex items-center justify-center">
            <img src={logo} alt="Tron Legacy" className="h-17 " />
          </nav>
        </div>
      </div>
      <div className="flex items-center justify-center w-full pt-5">
        <a
          href="https://www.hotstar.com/in/movies/tron-legacy/1260018669"
          target="_blank"
          aria-label="Disney+ Link"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10/11 text-[var(--prim)] border border-[var(--white-icon-tr)]
          gap-2 mt-9 rounded-full p-3
          transition duration-300 ease-in-out hover:border-[var(--white)] 
          hover:text-[var(--white)] hover:cursor-pointer text-sm"
        >
          Watch the movie on Disney+
        </a>
      </div>
    </div>
  );
};

export default Hero;
