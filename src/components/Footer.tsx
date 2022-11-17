import github_icon from "../assets/github_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 mt-5 py-5 border-t-2 border-primary">
      <p className="text-center"> Feel free to reach out to me:</p>
      <div className="flex items-center justify-center text-center">
        <a href="https://github.com/Konzti" target="_blank" className="hover:text-primary">
          <img src={github_icon} alt="github" className="w-6 h-6 inline-block" /> github.com/Konzti
        </a>
      </div>
    </div>
  );
};

export default Footer;
