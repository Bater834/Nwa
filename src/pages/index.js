import { MovieCard } from "@/components/MovieCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1  gap-4">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default Home;
