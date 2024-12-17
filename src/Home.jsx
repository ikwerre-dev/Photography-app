import Logo from "./components/logo";
import NavMenu from "./components/nav-menu";
import SocialLinks from "./components/social-links";
import HeroSection from "./components/hero-section";
import ImageSlider from "./components/image-slider";
import BackgroundPattern from "./components/background-pattern";
import popupimage from "./assets/popupimage.png";
import maskleft from "./assets/maskleft.png";

export default function App() {
  return (
    <main className="h-screen bg-teal-800 relative overflow-hidden">
      <BackgroundPattern />

      <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6 md:px-8 md:py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo />
          <NavMenu />
        </div>
      </header>

      
        <ImageSlider />
        

      <SocialLinks />
      <img src={maskleft} className="absolute w-[15rem] z-20 top-[10rem] left-0" alt="" />
      <img src={maskleft} className="absolute w-[15rem] z-20 top-[10rem] right-0 rotate-180" alt="" />
      <img src={popupimage} className="absolute w-[10rem] bottom-0 right-0" alt="" />
      <div className="absolute text-center top-[10rem] z-10 overflow-hidden left-0 right-0 w-full ">
      <h5  className="text-[20rem] text-[#00000084] -ml-[2rem] opacity-15" alt="" >TWINKLES</h5>
      </div>
    </main>
  );
}
