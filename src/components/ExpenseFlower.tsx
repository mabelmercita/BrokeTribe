import { useState } from "react";

interface ExpenseFlowerProps {
  userName: string;
}

const ExpenseFlower = ({ userName }: ExpenseFlowerProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { name: "savings", angle: 90, color: "primary" },
    { name: "food", angle: 45, color: "accent", subCategories: ["canteen", "snacks", "café", "college meals", "ordered out"] },
    { name: "travel", angle: 135, color: "primary" },
    { name: "basics", angle: 0, color: "accent" },
    { name: "miscellaneous", angle: 180, color: "accent" },
    { name: "shopping", angle: 225, color: "secondary" },
    { name: "socials", angle: 270, color: "primary" },
    { name: "acaademia", angle: 315, color: "primary" },
  ];

  return (
    <div className="border-4 border-primary rounded-3xl p-8 bg-card/50">
      <div className="text-center mb-8">
        <h2 className="text-5xl text-primary mb-2">Good Evening, {userName} ✨</h2>
        <p className="text-3xl text-accent">how did u use ur money today?</p>
      </div>

      <div className="relative w-full max-w-2xl mx-auto h-96 flex items-center justify-center">
        {/* Center money icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-secondary bg-card flex items-center justify-center">
            <span className="text-5xl text-secondary">₹</span>
          </div>
        </div>

        {/* Category petals */}
        {categories.map((category) => {
          const radius = 150;
          const x = Math.cos((category.angle * Math.PI) / 180) * radius;
          const y = Math.sin((category.angle * Math.PI) / 180) * radius;

          return (
            <div
              key={category.name}
              className="absolute cursor-pointer transition-transform hover:scale-110"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% - ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              onClick={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)}
            >
              <div className={`
                border-3 rounded-full px-6 py-3 text-2xl font-medium
                ${category.color === 'primary' ? 'border-primary text-primary' : ''}
                ${category.color === 'secondary' ? 'border-secondary text-secondary' : ''}
                ${category.color === 'accent' ? 'border-accent text-accent' : ''}
                ${selectedCategory === category.name ? 'bg-primary/20' : 'bg-card/80'}
              `}>
                {category.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subcategories for food */}
      {selectedCategory === "food" && (
        <div className="mt-8 text-center">
          <p className="text-2xl text-accent mb-4">The rest all shrinks</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.find(c => c.name === "food")?.subCategories?.map((sub) => (
              <div
                key={sub}
                className="border-2 border-primary rounded-full px-5 py-2 text-xl text-primary bg-card/80"
              >
                {sub}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseFlower;
