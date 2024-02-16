import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-screen  bg-cyan-400 space-y-4 ">
        
        <div className="p-4">
          <h1 className="bg-white text-center p-2 font-bold underline text-2xl rounded-lg ">Random Gifs</h1>
        </div>
        

        <div className="w-1/2 mx-auto flex justify-center items-center">
          <Random></Random>
        </div>

        <div className="w-1/2 mx-auto flex justify-center items-center">
          <Tag></Tag>
        </div>

    </div>
  );
}

export default App;
