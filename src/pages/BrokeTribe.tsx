import BrokematesSidebar from "@/components/BrokematesSidebar";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/broketribe-logo.png";
import LogoMarquee from "@/components/LogoMarquee";

const BrokeTribe = () => {
  const challenges = [
    "Vinay's personality is so you coded but he save 30% more wanna swap lifestyles with him?",
    "If you were Helen you would save 800RS right now..wanna be Helen for a week?",
    "skip 2 cafés this week",
    "limit 1 late-night order"
  ];

  const leaderboard = [
    { name: "Yuna", category: "Most savings this week 💰", amount: "₹850" },
    { name: "Helen", category: "Smartest shopper 🛍️", saves: "15 deals" },
    { name: "Vinay", category: "Most frugal day streak 🧠", streak: "12 days" }
  ];

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

      <div className="max-w-6xl mx-auto mt-6 space-y-6">
        {/* Lifestyle Summary */}
        <div className="border-4 border-primary rounded-3xl p-6 bg-card/50 text-center">
          <h3 className="text-4xl text-primary mb-2">ur lifestyle summary</h3>
          <p className="text-3xl text-accent">Midnight snacker 🍬+ Spotify soul 🎧 + Travel spirit 🚗</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <BrokematesSidebar />
          </div>

          {/* Challenges & Leaderboard */}
          <div className="space-y-6">
            {/* Suggested Challenges */}
            <div className="border-4 border-secondary rounded-3xl p-6 bg-card/50">
              <h3 className="text-4xl text-secondary mb-4">SUGGESTED CHALLENGES</h3>
              <div className="space-y-3">
                <div className="p-4 bg-muted/30 rounded-2xl border-2 border-accent">
                  <p className="text-xl text-foreground">🥇 Yuna just topped the leaderboard!</p>
                  <p className="text-xl text-foreground">Beat her to it next week by skipping your Matcha Latte for the next 2 days ☕💪</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-2xl border-2 border-accent">
                  <p className="text-xl text-foreground">Try minis 🧴before full-size — Mira bought mini skincare products from smytten's trial packs and maximised her savings💅</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-2xl border-2 border-accent">
                  <p className="text-xl text-foreground">DIY snack day 🍕 — skip Zomato, raid your kitchen and make something gourmet for ₹0 😎</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-2xl border-2 border-accent">
                  <p className="text-xl text-foreground">💰 Daily Saver Challenge:</p>
                  <p className="text-xl text-foreground">Save ₹10 each day for the rest of this month — tiny coins, big wins 🌙✨</p>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
              <h3 className="text-4xl text-primary mb-6 text-center">Biggest Saver This Week 💸</h3>
              
              {/* Podium Layout */}
              <div className="flex items-end justify-center gap-4 mb-4">
                {/* Second Place */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-muted/50 border-4 border-secondary flex items-center justify-center mb-2">
                    <span className="text-4xl">🥈</span>
                  </div>
                  <div className="bg-secondary/20 border-2 border-secondary rounded-2xl p-4 w-28 h-20 flex items-center justify-center">
                    <p className="text-2xl text-secondary font-bold text-center">Mira</p>
                  </div>
                </div>

                {/* First Place */}
                <div className="flex flex-col items-center -mt-6">
                  <div className="w-28 h-28 rounded-full bg-muted/50 border-4 border-primary flex items-center justify-center mb-2">
                    <span className="text-5xl">🥇</span>
                  </div>
                  <div className="bg-primary/20 border-2 border-primary rounded-2xl p-4 w-32 h-24 flex items-center justify-center">
                    <p className="text-3xl text-primary font-bold text-center">Yuna</p>
                  </div>
                </div>

                {/* Third Place */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-muted/50 border-4 border-accent flex items-center justify-center mb-2">
                    <span className="text-4xl">🥉</span>
                  </div>
                  <div className="bg-accent/20 border-2 border-accent rounded-2xl p-4 w-28 h-20 flex items-center justify-center">
                    <p className="text-2xl text-accent font-bold text-center">You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BrokeTribe;
