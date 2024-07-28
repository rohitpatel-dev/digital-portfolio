"use client";
import data from "@/public/Resume/HeaderandAbout.json";

import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";

function Homepage() {
  const socialNetwork = data.main.social;
  return (
    <main className=" min-h-screen bg-[url('/images/header-background.jpg')]">
      <div className="max-w-6xl mx-auto text-center pt-72 space-y-12 ">
        <div className="md:text-6xl text-white -tracking-normal text-xl ">
          <Typewriter
            options={{
              strings: ["Hello Rohit patel"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* <ul className="social">{networks}</ul> */}
        <div>
          <h3 className="text-gray-400 text-wrap">
            Based in {data.main.address.city}.{" "}
            <span className="text-white text-md">{data.main.occupation}</span>.{" "}
            {data.main.description}.
          </h3>
        </div>
        <div className=" space-x-4 items-center justify-center grid grid-cols-3 gap-4 md:flex">
          {socialNetwork.map((item) => (
            <div className="text-center" key={item.name}>
              <Button>{item.name}</Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Homepage;
