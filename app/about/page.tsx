import Image from "next/image";
import React from "react";
import aboutData from "@/public/Resume/HeaderandAbout.json";
import { Button } from "@/components/ui/button";
function AboutPage() {
  return (
    <div className="bg-gray-800/70">
      <div className="max-w-6xl mx-auto grid grid-cols-4 py-20 px-4 md:px-0">
        <div className="col-span-1 hidden md:inline-block">
          <Image src="/images/profilepic.jpg" alt="" width={200} height={200} />
        </div>
        <div className="col-span-3 space-y-4">
          <h2 className="text-2xl text-white font-bold">About Me</h2>
          <p
            className="font-light tracking-wide
"
          >
            {aboutData.main.bio}
          </p>

          <div className="md:flex-row justify-evenly flex-col space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl text-white font-medium py-3">
                Contact Details
              </h3>
              <p>{aboutData.main.name}</p>
              <p>{aboutData.main.address.street}</p>
              <p>{aboutData.main.address.city}</p>
              <p>{aboutData.main.address.state}</p>
              <p>{aboutData.main.address.zip}</p>
            </div>

            <Button>DownLoad Resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
