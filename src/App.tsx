import backgroundImage from "./assets/backgroundimage.jpg";
import { Navbar } from "./components/navbar";

export function App() {
  return (
    <div>
      <Navbar />
      <div
        className="flex min-h-screen items-center justify-center bg-blue-400 h-[90vh] w-full max-w-7xl bg-cover bg-center p-4 shadow-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
    </div>
  );
}
