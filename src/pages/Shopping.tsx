import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingSection from "@/components/ShoppingSection";
import logoImage from "@/assets/broketribe-logo.png";
import StudentDeals from "@/components/StudentDeals";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import LogoMarquee from "@/components/LogoMarquee";

const Shopping = () => {
  const navigate = useNavigate();
  const [showYunaSuggestion] = useState(true);

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

      <Navigation />

      <div className="max-w-4xl mx-auto space-y-6 mt-6">
        <ShoppingSection />
        
        {/* Friend's Shopping Habit Suggestion with Student Deals */}
        {showYunaSuggestion && (
          <div className="border-4 border-secondary rounded-3xl p-6 bg-card/50">
            <h3 className="text-3xl text-secondary mb-4">from ur brokemates 💅</h3>
            <div className="p-4 bg-muted/30 rounded-2xl border-2 border-secondary mb-4">
              <p className="text-2xl text-foreground">
                Helen is listening to premium spotify music without paying the full individual price of rs 139 per month.
              </p>
            </div>
            
            {/* Ongoing Student Deals */}
            <div className="mt-6">
              <h4 className="text-3xl text-secondary mb-4">ongoing student deals</h4>
              <div className="border-2 border-secondary rounded-2xl p-5 bg-card/80">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl text-secondary font-bold mb-1">SPOTIFY STUDENT COST</p>
                    <p className="text-2xl text-secondary">- ₹69</p>
                  </div>
                  <button className="text-2xl text-secondary underline">more</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Shopping;
