import { Button } from "./ui/button";

const ChallengesSection = () => {
  return (
    <div className="space-y-6">
      {/* Concert Progress */}
      <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-4xl text-primary">concert !!</h3>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
        </div>
        
        <p className="text-2xl text-primary mb-2">progress</p>
        <div className="relative w-full h-8 bg-card border-2 border-primary rounded-full overflow-hidden mb-4">
          <div 
            className="absolute inset-y-0 left-0 bg-primary/40"
            style={{ 
              width: '30%',
              background: 'repeating-linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary)) 8px, transparent 8px, transparent 16px)'
            }}
          />
        </div>

        <Button className="w-full border-3 border-primary bg-transparent text-primary text-2xl py-6 rounded-2xl hover:bg-primary/10">
          Save now
        </Button>
      </div>

      {/* Ongoing challenges */}
      <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
        <h3 className="text-4xl text-primary mb-4">ongoing ♡ challenges</h3>
        
        <div className="space-y-3">
          <div className="border-2 border-primary rounded-2xl p-4 bg-card/80">
            <p className="text-2xl text-primary">swap lifestyle with Mira</p>
          </div>
          
          <div className="border-2 border-primary rounded-2xl p-4 bg-card/80">
            <p className="text-2xl text-primary">Save ₹20 each day</p>
          </div>
        </div>
      </div>

      {/* Suggested Challenges */}
      <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
        <h3 className="text-4xl text-yellow mb-2">suggested Challenges</h3>
        <p className="text-xl text-accent mb-4">~ Oct 2025</p>
        
        <div className="space-y-4">
          <div className="border-2 border-secondary rounded-2xl p-4 bg-card/80">
            <p className="text-2xl text-secondary leading-relaxed">
              → Yuna loves late night snack but still saves 20% more than you. wanna live as Yuna 4 a week?
            </p>
          </div>
          
          <div className="border-2 border-secondary rounded-2xl p-4 bg-card/80">
            <p className="text-2xl text-secondary leading-relaxed">
              → skip 2 days coffee or save ₹20 everyday
            </p>
          </div>
        </div>
      </div>

      {/* Wall of Honor */}
      <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
        <h3 className="text-4xl text-yellow mb-6">BROKEMATES WALL OF HONOR</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="border-3 border-primary rounded-2xl p-4 bg-card/80 text-center">
            <div className="w-16 h-16 rounded-full border-2 border-primary mx-auto mb-3 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/30"></div>
            </div>
            <p className="text-2xl text-primary font-bold">BIG SAVER</p>
            <p className="text-xl text-primary">MIRA</p>
          </div>
          
          <div className="border-3 border-primary rounded-2xl p-4 bg-card/80 text-center">
            <div className="w-16 h-16 rounded-full border-2 border-primary mx-auto mb-3 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/30"></div>
            </div>
            <p className="text-2xl text-primary font-bold">BIG FUND CONTRIBUTER</p>
            <p className="text-xl text-primary">YUNA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
