import { Star } from "lucide-react";

export const MovieCard = ({ image, score }) => {
  return (
    <div>
      <img
        className="w-[157px] h-[233px] md:w-[230px] md:h-[340px]"
        src={image}
        alt="dear-santa"
      />
      <div>
        <Star /> <p>{score}</p>
        <p>/10</p>
      </div>
    </div>
  );
};
