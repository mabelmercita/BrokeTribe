import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import logoImage from "@/assets/broketribe-logo.png";
import { Button } from "@/components/ui/button";
import LogoMarquee from "@/components/LogoMarquee";

const ExpenseEntry = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const categories = [
    { name: "Food", angle: 45, color: "accent" },
    { name: "Travel", angle: 90, color: "primary" },
    { name: "Lifestyle", angle: 135, color: "secondary" },
    { name: "Academia", angle: 180, color: "primary" },
    { name: "Socials", angle: 225, color: "accent" },
    { name: "Shopping", angle: 270, color: "secondary" },
    { name: "The Basics", angle: 315, color: "accent" },
    { name: "Miscellaneous", angle: 15, color: "primary" },
    { name: "Savings", angle: 350, color: "primary" },
  ];

  const subcategories: Record<string, string[]> = {
    "Food": [
      "Canteen / College Meals",
      "Snacks / Tea Breaks",
      "Ordering Out / Zomato / Swiggy",
      "Café Hangs"
    ],
    "Travel": ["Bus / Metro", "Auto / Cab", "Petrol", "Long Distance"],
    "Lifestyle": ["Skincare", "Grooming", "Fitness", "Entertainment"],
    "Academia": ["Books", "Stationery", "Course Materials", "Projects"],
    "Socials": ["Outings", "Gifts", "Events", "Dates"],
    "Shopping": ["Clothes", "Accessories", "Gadgets", "Misc Items"],
    "The Basics": ["Groceries", "Utilities", "Phone Recharge", "Rent"],
    "Miscellaneous": ["Random Stuff", "Unexpected", "Other"],
    "Savings": ["Saved Money", "Investments", "Emergency Fund"]
  };

  const handleContinue = () => {
    const expenseData = {
      amount,
      category: selectedCategory,
      subcategory: selectedSubcategory
    };
    
    // Store in localStorage for persistence
    localStorage.setItem('latestExpense', JSON.stringify(expenseData));
    
    // Navigate with state
    navigate("/dashboard", { state: expenseData });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LogoMarquee />
      <div className="p-4 md:p-8">
        <div className="text-center mb-8">
          <img 
            src={logoImage} 
            alt="BROKETRIBE" 
            className="h-16 md:h-20 mx-auto"
          />
          <p className="text-2xl text-accent mt-2">
            Mabel is a Midnight snacker + Spotify soul + Travel spirit
          </p>
        </div>

      <div className="max-w-4xl mx-auto">
        <div className="border-4 border-primary rounded-3xl p-8 bg-card/50">
          <div className="text-center mb-8">
            <h2 className="text-5xl text-primary mb-2">Hey Mabel 🌸</h2>
            <p className="text-3xl text-accent">
              {!selectedCategory && "let's reflect on today's little spends"}
              {selectedCategory && !selectedSubcategory && `Where did u spend on ${selectedCategory}?`}
              {selectedCategory && selectedSubcategory && "How much did u spend?"}
            </p>
          </div>

          {selectedCategory && selectedSubcategory && (
            <div className="flex items-center gap-3 mb-8 max-w-md mx-auto">
              <span className="text-3xl text-foreground">₹</span>
              <Input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="flex-1 h-14 text-2xl border-3 border-primary rounded-2xl bg-card/80"
              />
            </div>
          )}

          {!selectedCategory && (
            <div className="relative w-full max-w-2xl mx-auto h-96 flex items-center justify-center mb-8">
              {/* Center money icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-secondary bg-card flex items-center justify-center">
                  <span className="text-7xl">💸</span>
                </div>
              </div>

              {/* Category petals */}
              {categories.map((category) => {
                const radius = 180;
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
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className={`
                      border-3 rounded-full px-6 py-3 text-2xl font-medium
                      ${category.color === 'primary' ? 'border-primary text-primary' : ''}
                      ${category.color === 'secondary' ? 'border-secondary text-secondary' : ''}
                      ${category.color === 'accent' ? 'border-accent text-accent' : ''}
                      bg-card/80
                    `}>
                      {category.name}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {selectedCategory && !selectedSubcategory && (
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="flex flex-wrap gap-4 justify-center">
                {subcategories[selectedCategory]?.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className="border-3 border-accent text-accent rounded-2xl px-8 py-4 text-2xl bg-card/80 hover:bg-accent/10 transition-all"
                  >
                    {sub}
                  </button>
                ))}
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-xl text-accent underline"
                >
                  ← back to categories
                </button>
              </div>
            </div>
          )}

          {selectedCategory && selectedSubcategory && (
            <div className="text-center mb-6">
              <p className="text-2xl text-accent mb-2">
                {selectedCategory} → {selectedSubcategory}
              </p>
              <button
                onClick={() => setSelectedSubcategory(null)}
                className="text-xl text-accent underline"
              >
                ← change subcategory
              </button>
            </div>
          )}

          {selectedCategory && selectedSubcategory && amount && (
            <div className="text-center">
              <Button 
                onClick={handleContinue}
                className="border-3 border-primary bg-transparent text-primary text-2xl px-12 py-6 rounded-2xl hover:bg-primary/10"
              >
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ExpenseEntry;
