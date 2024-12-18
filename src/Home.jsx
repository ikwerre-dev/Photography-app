import Logo from "./components/logo";
import NavMenu from "./components/nav-menu";
import SocialLinks from "./components/social-links";
import ImageSlider from "./components/image-slider";
import BackgroundPattern from "./components/background-pattern";
import popupimage from "./assets/popupimage.png";
import maskleft from "./assets/maskleft.png";

export default function App() {
  return (
    <main className="h-screen w-screen bg-teal-800 relative overflow-hidden flex flex-col">
      <BackgroundPattern />

      <header className="absolute top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <NavMenu />
        </div>
      </header>

      <div className="flex-grow flex items-center justify-center">
        <ImageSlider />
      </div>

      <SocialLinks />
      <img
        src={maskleft}
        className="absolute w-1/4 max-w-[15rem] z-20 top-1/4 left-0"
        alt=""
      />
      <img
        src={maskleft}
        className="absolute w-1/4 max-w-[15rem] z-20 top-1/4 right-0 rotate-180"
        alt=""
      />
      <img
        src={popupimage}
        className="absolute w-1/6 max-w-[10rem] bottom-0 right-0"
        alt=""
      />
      <div className="absolute text-center top-1/4 z-10 overflow-hidden left-0 right-0 w-full pointer-events-none">
        <h5 className="text-[20vw] text-[#00000084] opacity-15">TWINKLES</h5>
      </div>
    </main>
  );
}
