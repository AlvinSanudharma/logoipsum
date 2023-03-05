import React from "react";

import Netflix from "images/netflix.svg";
import Verizon from "images/verizon.svg";
import Google from "images/google.svg";

export default function Partner() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-6">
      <Netflix />
      <Verizon />
      <Google />
    </div>
  );
}
