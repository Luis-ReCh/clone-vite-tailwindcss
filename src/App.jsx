import ViteCards from "./components/ViteCards";
import { textVite } from "./data/textVite";

function App() {
  return (
    <>
      <div className="container mx-auto flex items-center px-28 mt-36">
        <div className="pr-28">
          <span className="vite font-bold ">Vite</span>
          <h2 className="text-6xl font-bold mb-3">
            Next Generation Frontend Tooling
          </h2>
          <p className="text-2xl text-gray-400 font-semibold ">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
        </div>
        <div className="">
          <img
            src="https://vitejs.dev/logo-with-shadow.png"
            className="w-4/5"
            alt=""
          />
        </div>
      </div>
      <div className="px-24 py-10">
        <button className="rounded-full bg-gray-800 px-5 py-2 mr-2">
          Get Started
        </button>
        <button className="rounded-full bg-gray-800 px-5 py-2 mr-2">
          Why Vite?
        </button>
        <button className="rounded-full bg-gray-800 px-5 py-2">
          View on GitHub
        </button>
      </div>
      <section className="container mx-auto flex items-center px-24 mt-14 flex-wrap">
        {/* <div className="rounded-lg py-10 pl-8 bg-black bgRelleno mb-4">
          <span className="py-2 bg-black w-8 text-xl rounded-lg px-4">💡</span>
          <h3 className="text-lg font-bold pt-4 pb-2">Instant Server Start</h3>
          <div className="w-80 pr-4">
            <p className="text-gray-400 font-medium">
              On demand file serving over native ESM, no bundling required!
            </p>
          </div>
        </div> */}
        {textVite.map((data, index) => {
          return (
            <ViteCards
              key={`feature-card-${index}`}
              icon={data.icon}
              title={data.title}
              content={data.content}
            />
          );
        })}
      </section>
      {/* <main className="bg-black h-screen text-white">
        <div className="flex pt-56 mx-36">
          <div className=" mr-80">
            <h1 className="text-6xl font-medium">Vite</h1>
            <h2 className="text-6xl font-bold">
              Next Generation Frontend Tooling
            </h2>
            <p className="text-2xl text-gray-400 ">
              Get ready for a development environment that can finally catch up
              with you.
            </p>
          </div>
          <div className="">
            <img
              src="https://vitejs.dev/logo-with-shadow.png"
              className="w-auto"
              alt=""
            />
          </div>
        </div>
        <div className="px-4">
          <button className="mx-2 rounded-full bg-blue-600 p-2">
            Save Changes
          </button>
          <button className="mx-2 rounded-full py-2 px-4 bg-slate-800">
            Why Vite
          </button>
          <button className="mx-2 rounded-full py-2 px-4 bg-slate-800">
            View on Github
          </button>
        </div>
      </main> */}
    </>
  );
}

export default App;
