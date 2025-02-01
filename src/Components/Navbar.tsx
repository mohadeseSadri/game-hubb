import logo from "../assets/photo_2024-12-31_14-29-44.jpg";
import ColorMode from "./ColorMode";
function Navbar() {
  return (
    <>
      <nav className="row d-flex justify-content-space-between">
        <img alt="logo" src={logo} className="logo col-1" />
        <div className="colorMode col-2 d-flex">
          <ColorMode />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
