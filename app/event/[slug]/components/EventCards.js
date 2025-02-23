import React from "react";

export default function EventCards() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7].map((c, i) => (
        <div key={i} className="w-12 h-12">
          <h1>
            Commodo aliquip sint elit nulla ad voluptate eu magna proident
            officia occaecat ad tempor.
          </h1>
        </div>
      ))}
    </div>
  );
}
