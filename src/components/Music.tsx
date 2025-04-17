const Music = () => {
  return (
    <div id="music">
      <div className=" relative flex flex-col w-full py-12 px-6 md:px-8 lg:px-16">
        <h3 className="flex items-start text-[var(--prim)] text-3xl ">Music</h3>

        <hr className="mx-auto my-6 w-full h-0.5 border-t-2 mb-8 border-[var(--prim)]" />
        <iframe
          src="https://open.spotify.com/embed/album/3AMXFnwHWXCvNr5NCCpLZI?utm_source=generator"
          className="border border-rounded w-full h-165"
          // allowfullscreen="none"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          tabIndex={-1}
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
