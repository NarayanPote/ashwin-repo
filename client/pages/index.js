import React, { useState, useEffect } from "react";
import StarsRating from "../components/StarRating";
import DeleteIcon from '@mui/icons-material/Delete';
import * as ReactBootStrap from "react-bootstrap";

import axios from "axios";

export default function Home() {
    const [songDB, setsongDB] = useState([]);
    const [loading, setLoading] = useState(false);
    const url = 'http://localhost:5000/'

    useEffect(async () => {
        setLoading(true)
        const res = await axios.get('http://localhost:5000/api/song/')

        let myDATA = res.data
        console.log("IMAGE RESPONSE ", myDATA)
        setsongDB(myDATA)

        return () => {
            console.log('This will be logged on unmount');
        };

    }, []);




    const deleteHandler = async (_id) => {
        console.log(_id)
        if (window.confirm('Are you sure?')) {

            axios
                .post(`http://localhost:5000/api/song/myid/${_id}`, {
                    method: "DELETE",
                })
                .then((res) => {
                    window.location.reload();
                    console.log(res);
                });
        }
    };



    return (
        <>
            <div>
                <h1 className="sm:text-6xl text-2xl text-cyan-500 font-semibold text-center m-3 p-5">
                    Spotify Songs
                </h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10 m-4 p-10">
            {loading ? (
                    songDB.map((img, key) => (
                        <div key={key} className="bg-white text-center text-gray-600 w-72 shadow-lg rounded" >

                            {/* {console.log(img._id)} */}
                            <div className="ml-56 text-red">
                                <button className="hover:text-green" >
                                    <DeleteIcon onClick={() => deleteHandler(img._id)} />
                                </button>
                            </div>

                            {img.artwork.map((el, key) =>
                                <img src={url + el} key={key}
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                    }}
                                    alt='some value'

                                />)}


                            <h2 className="font-bold text-xl">{img.songname}</h2>
                            <div className="font-thin text-sm ">{img.date}</div>
                            <div className="font-bold text-xl">{img.artist}</div>
                            <div className="font-bold text-xl">
                                <StarsRating />
                            </div>
                        </div>
                    ))
                    ) : (
                        <ReactBootStrap.Spinner animation="border" />
                      )}
            </div>
        </>
    );
}
