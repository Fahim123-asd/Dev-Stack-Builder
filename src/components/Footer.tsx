import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <div>
      <div className="flex justify-between items-center container mx-auto my-35 px-5 py-5">
        <div>
          <img src={logo} alt="Logo" className="mt-4" />
          <p className="mt-4">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <ul className="flex gap-6 mt-4 font-semibold">
            <li>Github</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Product</h2>
          <p className="mt-4">Home</p>
          <p className="mt-4">Technologies</p>
          <p className="mt-4">Project</p>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Company</h2>
          <p className="mt-4">About</p>
          <p className="mt-4">Contact</p>
          <p className="mt-4">Careers</p>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Legal</h2>
          <p className="mt-4">Privacy Policy</p>
          <p className="mt-4">Terms of Service</p>
        </div>
      </div>
      <div className="flex justify-between container mx-auto m-11">
        <h2>© 2026 Dev Stack. All rights reserved.</h2>
        <div className="flex gap-6">
            <p>Privacy</p>
            <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
