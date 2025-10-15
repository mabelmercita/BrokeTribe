import { Users } from "lucide-react";
import { Button } from "./ui/button";

const BrokematesSidebar = () => {
  const friends = ["Mira", "Yuna", "Helen"];

  return (
    <>
      {/* BROKEMATES Card */}
      <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
        <h3 className="text-4xl text-secondary mb-4">BROKEMATES</h3>
        
        {/* Friends list */}
        <div className="space-y-2">
          {friends.map((friend) => (
            <div key={friend} className="text-2xl text-secondary border-b-2 border-secondary pb-1">
              {friend}
            </div>
          ))}
        </div>

        {/* Find ur friends button */}
        <Button className="w-full border-3 border-primary bg-transparent text-primary text-2xl py-6 rounded-2xl hover:bg-primary/10 mt-4">
          find ur friends
        </Button>
      </div>

      {/* BROKEMATE'S PIGGYBANK Card */}
      <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
        <h3 className="text-4xl text-primary mb-4">BROKEMATE'S PIGGYBANK</h3>
        
        {/* Mira: Concert */}
        <div className="border-2 border-accent rounded-2xl p-4 bg-card/80 mb-4">
          <p className="text-2xl text-accent mb-1">Mira: Concert?</p>
          <p className="text-xl text-foreground mb-1">BrokeMates joined: Yuna, Mira, Helen</p>
          <p className="text-xl text-accent mb-3">bfr: Dec 2025</p>
          
          {/* Progress bar */}
          <div className="relative w-full h-6 bg-card border-2 border-accent rounded-full overflow-hidden mb-2">
            <div 
              className="absolute inset-y-0 left-0 bg-accent/40"
              style={{ 
                width: '60%',
                background: 'repeating-linear-gradient(45deg, hsl(var(--accent)), hsl(var(--accent)) 8px, transparent 8px, transparent 16px)'
              }}
            />
          </div>

          <Button className="w-full border-2 border-accent bg-transparent text-accent text-xl py-4 rounded-xl hover:bg-accent/10">
            Join Now
          </Button>
        </div>

        {/* Yuna: Helen's bday */}
        <div className="border-2 border-secondary rounded-2xl p-4 bg-card/80 mb-4">
          <p className="text-2xl text-secondary mb-1">Yuna: Gift for Helen's bday</p>
          <p className="text-xl text-foreground mb-1">BrokeMates joined: you, Yuna, Mira</p>
          <p className="text-xl text-secondary mb-3">bfr: Oct 26, 2025</p>
          
          {/* Progress bar */}
          <div className="relative w-full h-6 bg-card border-2 border-secondary rounded-full overflow-hidden mb-2">
            <div 
              className="absolute inset-y-0 left-0 bg-secondary/40"
              style={{ 
                width: '40%',
                background: 'repeating-linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--secondary)) 8px, transparent 8px, transparent 16px)'
              }}
            />
          </div>

          <Button className="w-full border-2 border-secondary bg-transparent text-secondary text-xl py-4 rounded-xl hover:bg-secondary/10">
            Contribute Now
          </Button>
        </div>

        {/* You: Sneaker */}
        <div className="border-2 border-primary rounded-2xl p-4 bg-card/80">
          <p className="text-2xl text-primary mb-1">You: Save to buy the new sneaker</p>
          <p className="text-xl text-foreground mb-1">BrokeMates joined: you</p>
          <p className="text-xl text-primary mb-3">bfr: Jan, 2026</p>
          
          {/* Progress bar */}
          <div className="relative w-full h-6 bg-card border-2 border-primary rounded-full overflow-hidden mb-2">
            <div 
              className="absolute inset-y-0 left-0 bg-primary/40"
              style={{ 
                width: '85%',
                background: 'repeating-linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary)) 8px, transparent 8px, transparent 16px)'
              }}
            />
          </div>

          <Button className="w-full border-2 border-primary bg-transparent text-primary text-xl py-4 rounded-xl hover:bg-primary/10">
            Contribute Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default BrokematesSidebar;
