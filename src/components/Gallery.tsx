import img1 from "../assets/Gallery/sam-flynn.jpg";
import img2 from "../assets/Gallery/kevin-flynn.jpg";
import img3 from "../assets/Gallery/quorra.jpg";
import img4 from "../assets/Gallery/tron.jpg";
import img5 from "../assets/Gallery/draft-punks.jpg";
import img6 from "../assets/Gallery/Clu_Helmet.webp";
import img7 from "../assets/Gallery/Clu.webp";
import img8 from "../assets/Gallery/Gem.webp";
import img9 from "../assets/Gallery/Zuse.webp";

const Gallery = () => {
  const images = [
    { img: img1, alt: "Sam Flynn", filename: "sam-flynn.jpg" },
    { img: img2, alt: "Kevin Flynn", filename: "kevin-flynn.jpg" },
    { img: img3, alt: "Quorra", filename: "quorra.jpg" },
    { img: img4, alt: "Tron", filename: "tron.jpg" },
    { img: img5, alt: "Draft Punks", filename: "draft-punks.jpg" },
    { img: img6, alt: "Clu Helmet", filename: "Clu_Helmet.webp" },
    { img: img7, alt: "Clu", filename: "Clu.webp" },
    { img: img8, alt: "Gem", filename: "Gem.webp" },
    { img: img9, alt: "Zuse", filename: "Zuse.webp" },
  ];
  return (
    <div id="gallery">
      <div className=" relative flex flex-col w-full py-12 px-6 md:px-8 lg:px-16">
        <h3 className="flex items-start text-[var(--prim)] text-3xl ">
          Gallery
        </h3>

        <hr className="mx-auto my-6 w-full h-0.5 border-t-2 mb-8 border-[var(--prim)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map(({ img, alt, filename }) => (
            <div
              key={filename}
              className="relative group aspect-[4/3] overflow-hidden rounded-3xl shadow-xl 
              hover:shadow-2xl transition-shadow duration-300 
              backdrop-blur-2xl border-2 border-[#ffffff15]"
            >
              <img
                src={img}
                alt={alt}
                className="h-full w-full object-cover transform scale-110 lg:scale-100 
                lg:group-hover:scale-110 transition-transform duration-500 ease-in-out"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t 
                from-[var(--background)]/80 to-transparent opacity-100
                lg:opacity-0
                lg:group-hover:opacity-100
                transition-opacity duration-300"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4
              translate-y-0 opacity-100 
              lg:translate-y-2 lg:opacity-0
              lg:group-hover:opacity-100
              lg:group-hover:translate-y-0
              transition-all duration-300"
              >
                <h3 className="text-xl font-medium text-[var(--white)] mb-1">
                  {alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
