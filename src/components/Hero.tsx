import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="h-[492px] flex items-center">
      <div className="container">
        <h1 className="text-8xl font-semibold tracking-tighter text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg text-centertext-white/70 my-5">
          Elevate your site's visibilty effortlessly with AI, where smart technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
