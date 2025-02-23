import React from "react";
import { MdDone } from "react-icons/md";

export default function Features({title="Features"}) {
    const fList = ["International DJs",
        "Beachfront Location",
        "VIP Tables",
        "Premium Bar",
        "Food Stations",
        "Security Service"]
  return (
    <section className="my-8 flex flex-col gap-5 ">
      <h2 className="text-4xl font-bold ">{title}</h2>
      <ul className="grid grid-cols-2 justify-start gap-4 ">
       {fList.map((l,i)=>{
        return <li key={i} className=" flex gap-2 items-center">
        <MdDone className="text-xl text-white p-1 rounded-full bg-yellow-400" />
        {l}
      </li>
       })}
      
      </ul>
    </section>
  );
}
