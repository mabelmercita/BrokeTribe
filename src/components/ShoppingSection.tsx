import { Search } from "lucide-react";
import { Input } from "./ui/input";

const ShoppingSection = () => {
  const categories = [
    "eat out",
    "go out", 
    "order",
    "skincare",
    "stationary",
    "subscriptions"
  ];

  return (
    <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
      <h3 className="text-4xl text-accent mb-6">shopping feature</h3>
      
      {/* Search bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
        <Input 
          placeholder="What hits the spender nerve in you today?"
          className="w-full h-14 pl-14 pr-4 text-2xl border-3 border-primary rounded-full bg-card/80 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              if (category === "subscriptions") {
                window.open("https://freeforstudents.org/in", "_blank");
              }
            }}
            className="border-2 border-primary rounded-full px-6 py-3 text-2xl text-primary bg-card/80 hover:bg-primary/10 transition-colors"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShoppingSection;
