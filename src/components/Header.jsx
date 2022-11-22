const Header = () => {
  return (
    <header>
      <nav className="mb-5">
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="max-w-[150px] md:max-w-[200px]">
              <img
                src="./cpdh_logo.png"
                alt="Logo"
                width="500"
                height="250"
                className="max-w-full h-auto"
              />
            </div>
          </a>
          <a
            href="#simulator"
            className="flex items-center space-x-2 bg-indigo-400 hover:bg-indigo-500 text-white py-1 px-2 md:py-2 md:px-4 rounded"
          >
            SIMULAR
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
