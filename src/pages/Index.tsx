import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import logoImage from "@/assets/broketribe-logo.png";
import ExpenseFlower from "@/components/ExpenseFlower";
import BrokematesSidebar from "@/components/BrokematesSidebar";
import ChallengesSection from "@/components/ChallengesSection";
import ShoppingSection from "@/components/ShoppingSection";
import StudentDeals from "@/components/StudentDeals";
import ExpenseInput from "@/components/ExpenseInput";
import LogoMarquee from "@/components/LogoMarquee";

const Index = () => {
  // Mock user data - in real app this would come from backend
  const [userName] = useState("Mabel");
  const [allowanceLeft] = useState(7000);
  const [totalAllowance] = useState(10000);
  const [dayStreak] = useState(4);
  const [weekSavings] = useState(20);

  return (
    <div className="min-h-screen flex flex-col">
      <LogoMarquee />
      <div className="p-4 md:p-8">
        {/* Header with brand */}
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

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left sidebar - Brokemates */}
        <div className="lg:col-span-3">
          <BrokematesSidebar />
        </div>

        {/* Main content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Dashboard header */}
          <DashboardHeader 
            userName={userName}
            allowanceLeft={allowanceLeft}
            totalAllowance={totalAllowance}
            dayStreak={dayStreak}
            weekSavings={weekSavings}
          />

          {/* Expense input */}
          <ExpenseInput />

          {/* Expense flower visualization */}
          <ExpenseFlower userName={userName} />

          {/* Shopping section */}
          <ShoppingSection />

          {/* Student deals */}
          <StudentDeals />
        </div>

        {/* Right sidebar - Challenges */}
        <div className="lg:col-span-3">
          <ChallengesSection />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;
