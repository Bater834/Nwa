import { MovieCard } from "@/components/MovieCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1  gap-4">
      <MovieCard image="dear-santa.jpg" score={8} />
      <MovieCard
        image="https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg"
        score={9}
      />
    </div>
  );
};

export default Home;
