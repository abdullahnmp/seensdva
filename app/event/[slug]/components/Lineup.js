import React from "react";

export default function Lineup() {
  const lineUpList = [
    { name: " DJ Smith", time: "8:00 PM - 9:30 PM" },
    { name: "Sarah Groove", time: "9:30 PM - 11:00 PM" },
    { name: "The Beat Masters", time: "11:00 PM - 12:30 AM" },
    { name: "DJ Maxwell", time: "12:30 AM - Close" },
  ];

  return (
    <div className="flex flex-col gap-9">
      <h2 className="text-4xl font-bold">Lineup</h2>
      <ul className="flex flex-col gap-6">
        {lineUpList.map((l, i) => (
          <li key={i}>
            <div className=" pb-4 flex justify-between">
              <p className="font-bold">{l.name}</p>
              {/* <p className="text-gray-400">{l.time}</p> */}
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
