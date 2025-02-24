import React from "react";
import Image from "next/image";
function CardSec2({image,title}) {
  return (
    <div className="bg-white  shadow-[-7px_6px_50px_9px_#00000040] rounded-lg px-3 py-4  flex justify-start items-center gap-4 min-w-12 ">
            <Image width={60} height={60} alt="cards" src={image}/>
            <article className="font-inter text-lg font-semibold">{title}</article>
    </div>
  );
}

export default CardSec2;
