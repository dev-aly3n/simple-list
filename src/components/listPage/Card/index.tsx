import Image from "next/image";
import { shimmer, toBase64 } from "../../../utils/util";
interface props {
  item: {
    img: string;
    name: string;
    description: string;
    price: number;
  };
  index: number;
}

const Card: React.FC<props> = ({ item, index }) => {
  return (
    <div className="flex flex-col justify-start items-center w-96 h-[600px] bg-gray-300 rounded-md shadow-xl relative mx-2">
      <div className="relative w-full h-96 overflow-hidden rounded-md">
        <Image
          layout="fill"
          objectFit="cover"
          quality={100}
          src={"/media/" + index + ".jpg"}
          alt={item.name}
          width="288"
          height="208"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </div>
      <h3 className="text-2xl text-black font-bold mx-5 mt-3 self-end text-right">
        {item.name}
      </h3>
      <p className="text-xl text-black font-normal mx-5 mt-10 self-end text-right">
        {item.description}
      </p>
      <div className="absolute left-5 bottom-5 flex justify-center items-center gap-x-1 font-medium">
        <span>تومان</span>
        <span>{item.price.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Card;
