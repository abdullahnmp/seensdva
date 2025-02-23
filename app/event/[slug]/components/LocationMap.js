import React from "react";

export default function LocationMap({title="Location"}) {
  return (
    <div className="my-7 flex flex-col gap-5 rounded-lg overflow-hidden" >
        <h2 className="text-4xl font-bold">{title}</h2>
      <div className="rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.8913472017!2d-122.04109805!3d37.40280355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1737985837283!5m2!1sen!2sbd"
          width="600"
          height="450"
          className="rounded-lg overflow-hidden w-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
