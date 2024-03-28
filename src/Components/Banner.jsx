const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:p-12 lg:px-36 bg-[#1313130D] rounded-3xl mt-2 lg:mt-8">
      <div className="flex flex-col gap-5 lg:gap-24">
        <h2 className="text-3xl lg:text-6xl font-bold primary-font text-black flex flex-col lg:gap-4">
          <span>Books to freshen up</span> your bookshelf
        </h2>
        <a className="btn bg-[#23BE0A] lg:px-8 lg:text-xl font-semibold text-white w-36 lg:w-48">View The List</a>
      </div>
      <img className="w-36 lg:w-64"
        src="/public/banner-cover-book.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
