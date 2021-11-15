import Image from "next/image";
import Img from "../public/3.jpg";

export default function Player() {
  return (
    <div>
      <Image
        src={Img}
        alt="player image"
        placeholder="blur"
        blurDataURL
        width={350}
        height={480}
      />
      {["1", "2", "3", "4", "5", "6"].map((path) => {
        return (
          <div key={path}>
            <div className="div_border">
              <Image
                src={`/${path}.jpg`}
                alt="player image"
                width={350}
                height={480}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
