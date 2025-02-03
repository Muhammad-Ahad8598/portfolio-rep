"use client"
import { useEffect } from 'react';
import Navbar from "../Component/Navbar";
import Footer from '../Component/Footer';
import Typed from 'typed.js';

export default function Home() {
    useEffect(() => {
        // Initialize Typed.js for dynamic text effect
        const options = {
            strings: ["Ahad"], // Typed text for the name
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 2000,
            startDelay: 1000,
            loop: true,
            showCursor: true,
        };

        // Typed instance for name
        const typedName = new Typed("#typed-name", options);

        // Cleanup function to destroy the Typed.js instance on unmount
        return () => {
            typedName.destroy();
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row justify-between w-auto h-auto mt-10">
                <section className="w-full md:w-[45%] ml-5 px-4">
                    <p className="font-bold text-3xl md:text-5xl mt-10 md:mt-20">
                        Hi, My name is Muhammad{" "}
                        <span id="typed-name" className="text-yellow-500"></span>
                        I'm a{" "}
                        <span id="typed-title" className="text-yellow-500">Passionate Developer!</span>
                    </p>
                </section>
                <section className="w-full md:w-[45%] mt-10 md:mt-20 px-4">
                    <img src="/687.png" alt="Profile picture of Muhammad Ahad" className="w-90 h-90 object-cover" />
                </section>
            </div>
            <Footer />
        </>
    );
}

