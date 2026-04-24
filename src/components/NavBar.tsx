const NavBar = () => {
  return (
    <div className="grid grid-cols-6 justify-items-center w-full p-4 shadow-md">
      <div />
      <h1 className="text-2xl col-span-4 font-semibold">Anime Gacha Pull</h1>
      <div className="flex justify-end w-full">
        <a href="https://github.com/teerapat-ch/AnimeGachaPull">
          <img
            src="github.png"
            alt="github"
            width={30}
          />
        </a>
      </div>
    </div>
  )
}
export default NavBar