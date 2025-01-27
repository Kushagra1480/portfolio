import React from "react"
import MapComponent from "./Map"
import avatarUrl from '../assets/avatartion.png'

export const Header = () => {
    return (
        <div className="p-4 w-350">
{/* 
relative columns-2 bg-slate-800 rounded-xl border-4 border-indigo-500
 */}
            <div className="grid grid-cols-2 gap-4 bg-linear-to-bl from-indigo-800 to-rose-800 rounded-xl border-4 border-indigo-500">
                <div className="p-4 ml-5">
                    <img 
                        src={avatarUrl}
                        alt="avatar"
                        className="w-48 h-48 border-8 border-white rounded-md mt-6 ml-5"
                    />
                    <div className="grid grid-cols-1 mt-2 p-4">
                        <p className="text-4xl font-bold text-white">Kushagra Kartik</p>
                        <a
                            href=""
                            download
                            className="text-blue-500 hover:underline font-bold text-xl"
                        >Resume</a>
                        <a
                            href=""
                            download
                            className="text-blue-500 hover:underline font-bold text-xl"
                        >LinkedIn</a>
                        <a
                            href=""
                            download
                            className="text-blue-500 hover:underline font-bold text-xl"
                        >GitHub</a>
                    </div>
                </div>
                <div className="p-8">
                    <div className="pt-4">
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.676715434678!2d-111.9343696848007!3d33.42424198078268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08db4f8e8b9d%3A0x8f8e9b9b9b9b9b9b!2s1255%20E%20University%20Dr%2C%20Tempe%2C%20AZ%2085288!5e0!3m2!1sen!2sus!4v1633020000000!5m2!1sen!2sus"
                            width="300"
                            height="200"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                        >

                        </iframe> */}
                        <MapComponent />
                    </div>
                </div>

            </div>
        </div>
    )
}