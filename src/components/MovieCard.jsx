import { Star } from "lucide-react";

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <img className="w-lg h-auto" src="/dear-santa.jpg" alt="dear-santa" />
      <div>
        <Star /> <p>6.9</p>
        <p>/10</p>
      </div>
    </div>
  );
};
