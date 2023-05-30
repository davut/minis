import React from "react";
import Image from "next/image";

const OurProduct = () => {
  return (
    <div>
      {/* */}

      <div className="cont grid grid-cols-12 place-content-between ">
        {[...Array(3)].map((elem) => (
          <div className="py-10 px-7 rounded-lg bg-[#3A8DDE] relative col-span-3">
            {/* <Image
              width={"300"}
              height={"300"}
              src="/images/ad 1.svg"
              className="w-60 absolute -top-[50%]"
            /> */}
            <h2>Crispy dragee</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
