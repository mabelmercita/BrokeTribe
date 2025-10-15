import logoImage from "@/assets/broketribe-logo.png";

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-background border-b border-border/50 py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat logos multiple times for continuous scroll */}
        {[...Array(20)].map((_, i) => (
          <img
            key={i}
            src={logoImage}
            alt="BROKETRIBE"
            className="h-12 mx-8 inline-block"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
