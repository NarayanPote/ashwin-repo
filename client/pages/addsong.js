import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import router from "next/router";
import axios from "axios";

function addSong() {

  const [songname, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState(null);


  const upload = e => {
    e.preventDefault()
    const data = new FormData();

    data.append("songname", songname)
    data.append("artist", artist)
    data.append("date", date)

    for (var x = 0; x < file.length; x++) {
      data.append('artwork', file[x])
    }
    axios.post('http://localhost:5000/api/song/add-songs', data)
      .then((res) => { console.log(res); setFile(''); setSongName(''); setArtist(''); setDate(''); window.location.href = "/" })
      .catch(err => console.log(err));
  }


  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div>

        <h1 className="text-center m-3 p-5">Add Song</h1>
        <form onSubmit={upload}
          method="POST"
          encType="multipart/form-data"
          className="mb-5 flex flex-col justify-center"
        >

          <div className="flex flex-col justify-center sm:mx-96 mx-7 mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Song Name
            </label>
            <input
              type="text"
              name="songname"
              id="songname"
              placeholder="Imagin Dragon"
              required
              value={songname}
              onChange={e => { setSongName(e.target.value) }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>


          <div className="flex flex-col justify-center sm:mx-96 mx-7 mb-6">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date Released
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => { setDate(e.target.value) }}
              placeholder="10/02/22"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>


          <div className="flex flex-col justify-center sm:mx-96 mx-7 mb-6">
            <label
              htmlFor="artist"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Artist
            </label>
            <select
              onChange={(e) => { setArtist(e.target.value) }}
            >
              <option value="MJ">MJ</option>
              <option value="Dj">Dj</option>
              <option value="KJ">KJ</option>
            </select>
          </div>


          <div className="flex flex-col justify-center sm:mx-96 mx-7 mb-6">
            <label
              htmlFor="artwork"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Artwork
            </label>

            <input type="file" multiple required filename="artwork"
              onChange={e => { setFile(e.target.files) }}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <button
            type="submit"
            className="text-white sm:mx-96 mx-7 pb-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add New Song
          </button>

        </form>

      </div>
    </>
  );
}
export default addSong;
