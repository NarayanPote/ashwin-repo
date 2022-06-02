import Image from "next/image";
import { useEffect } from "react";
import StarsRating from "../components/StarRating";

export default function Topten() {

  useEffect(() => {
    return () => {
      console.log('This will be logged on unmount');
    };
  }, [])

  return (
    <>
      <div>
        <h1 className="sm:text-6xl text-2xl text-cyan-500 font-semibold text-center m-3 p-5">
          Spotify Top Artist
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 m-4 p-10">
        <div className="bg-white text-center text-gray-600 w-72 shadow-lg rounded">
          <div>
            <Image src="/mjpg.jpg" width={300} height={300} />
          </div>
          <h2 className="font-bold text-xl">Xscape</h2>
          <div className="font-thin text-sm ">22/05/22</div>
          <div className="font-bold text-xl">Michael Jackson</div>
          <div className="font-bold text-xl">
            <StarsRating />
          </div>
        </div>
        <div className="bg-white text-center text-gray-600 w-72 shadow-lg rounded">
          <div>
            <Image src="/mjpg.jpg" width={300} height={300} />
          </div>
          <h2 className="font-bold text-xl">Xscape</h2>
          <div className="font-thin text-sm ">22/05/22</div>
          <div className="font-bold text-xl">Michael Jackson</div>
          <div className="font-bold text-xl">*****</div>
        </div>
        <div className="bg-white text-center text-gray-600 w-72 shadow-lg rounded">
          <div>
            <Image src="/mjpg.jpg" width={300} height={300} />
          </div>
          <h2 className="font-bold text-xl">Xscape</h2>
          <div className="font-thin text-sm ">22/05/22</div>
          <div className="font-bold text-xl">Michael Jackson</div>
          <div className="font-bold text-xl">*****</div>
        </div>
        <div className="bg-white text-center text-gray-600 w-72 shadow-lg rounded">
          <div>
            <Image src="/mjpg.jpg" width={300} height={300} />
          </div>
          <h2 className="font-bold text-xl">Xscape</h2>
          <div className="font-thin text-sm ">22/05/22</div>
          <div className="font-bold text-xl">Michael Jackson</div>
          <div className="font-bold text-xl">*****</div>
        </div>
        <div className="bg-white text-center text-gray-600 w-72 shadow-lg rounded">
          <div>
            <Image src="/mjpg.jpg" width={300} height={300} />
          </div>
          <h2 className="font-bold text-xl">Xscape</h2>
          <div className="font-thin text-sm ">22/05/22</div>
          <div className="font-bold text-xl">Michael Jackson</div>
          <div className="font-bold text-xl">*****</div>
        </div>
        <div className="bg-white text-center text-gray-600 w-72 shadow-lg rounded">
          <div>
            <Image src="/mjpg.jpg" width={300} height={300} />
          </div>
          <h2 className="font-bold text-xl">Xscape</h2>
          <div className="font-thin text-sm ">22/05/22</div>
          <div className="font-bold text-xl">Michael Jackson</div>
          <div className="font-bold text-xl">*****</div>
        </div>
        <div className="bg-white text-center text-gray-600 w-72 shadow-lg rounded">
          <div>
            <Image src="/mjpg.jpg" width={300} height={300} />
          </div>
          <h2 className="font-bold text-xl">Xscape</h2>
          <div className="font-thin text-sm ">22/05/22</div>
          <div className="font-bold text-xl">Michael Jackson</div>
          <div className="font-bold text-xl">*****</div>
        </div>
      </div>
    </>
  );
}
