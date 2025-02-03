import backgroundImage from "./assets/backgroundimage.jpg";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-400">
      <div
        className="h-[90vh] w-full max-w-7xl bg-cover bg-center p-4 shadow-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
    </div>
  );
}
