import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { SiFreelancer } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="mt-6">
      <hr className="my-4 border-black-400" />
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center justify-center text-sm space-x-4 mb-2 md:mb-0">
          <img
            src="https://img.shields.io/static/v1?label=license&message=MIT&color=green&logo=github"
            alt="MIT License"
            className="inline"
          />
          <a className="hover:text-yellow-400" href="/">
            cuantopagodehipoteca
          </a>
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className="flex space-x-4 text-center justify-center">
          <a
            className="text-gray-400 hover:text-yellow-300"
            href="https://jamodev.com"
          >
            <RiComputerLine />
          </a>
          <a
            className="text-gray-400 hover:text-yellow-300"
            href="https://github.com/JaMoLpE88"
          >
            <BsGithub />{" "}
          </a>
          <a
            className="text-gray-400 hover:text-yellow-300"
            href="https://www.linkedin.com/in/jamolpe88/"
          >
            <BsLinkedin />{" "}
          </a>
          <a
            className="text-gray-400 hover:text-yellow-300"
            href="https://www.freelancer.com/u/JaMoLpE88"
          >
            <SiFreelancer />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
