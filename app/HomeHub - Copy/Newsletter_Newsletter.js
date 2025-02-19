import React from "react";
import NewsForm from "./news-form";

function Newsletter() {
  return (
    <section className=" w-[90%] flex flex-col justify-between sm:flex-row items-center gap-9  max-md:flex-col max-800:flex-col">
      <div className="flex flex-col text-center md:text-left w-full gap-4">
        <h1 className="text-6xl ">Never Miss an Event</h1>
        <p className="text-2xl ">
          Get exclusive updates about the hottest events in your city.
        </p>
      </div>
      <NewsForm />
    </section>
  );
}

export default Newsletter;
