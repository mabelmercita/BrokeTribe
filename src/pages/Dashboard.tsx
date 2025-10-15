import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import logoImage from "@/assets/broketribe-logo.png";
import ExpenseInput from "@/components/ExpenseInput";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import LogoMarquee from "@/components/LogoMarquee";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userName] = useState("Mabel");
  const [allowanceLeft] = useState(7000);
  const [totalAllowance] = useState(10000);
  const [dayStreak] = useState(4);
  const [weekSavings] = useState(20);
  const [expenseAmount, setExpenseAmount] = useState<string>("");
  const [expenseCategory, setExpenseCategory] = useState<string>("");

  useEffect(() => {
    // Get expense data from navigation state or localStorage
    const stateData = location.state as {
      amount?: string;
      category?: string;
      subcategory?: string;
    } | null;

    if (stateData?.amount && stateData?.category) {
      setExpenseAmount(stateData.amount);
      setExpenseCategory(stateData.category);
    } else {
      // Fallback to localStorage
      const storedExpense = localStorage.getItem('latestExpense');
      if (storedExpense) {
        const parsed = JSON.parse(storedExpense);
        setExpenseAmount(parsed.amount || "");
        setExpenseCategory(parsed.category || "");
      }
    }
  }, [location]);

  const insights = [
    "You saved 100 rupees today by stopping yourself from getting those late night munchers...",
    "Those sneakers you bought today better be worth 30% of your entire allowance...",
    "This week u saved 20% more by skipping café dates ♡"
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

      <div className="max-w-4xl mx-auto space-y-6 mt-6">
        <DashboardHeader 
          userName={userName} 
          allowanceLeft={allowanceLeft} 
          totalAllowance={totalAllowance} 
          dayStreak={dayStreak} 
          weekSavings={weekSavings} 
          expenseAmount={expenseAmount} 
          expenseCategory={expenseCategory} 
        />

        {/* Nudge to Shopping */}
        <div className="border-4 border-secondary rounded-3xl p-6 bg-card/50 text-center">
          <p className="text-3xl text-accent mb-4">
            wanna save more? check out student deals on BrokeTribe Shopping 🛍️
          </p>
          <Button 
            onClick={() => navigate("/shopping")} 
            className="border-3 border-secondary bg-transparent text-secondary text-2xl px-12 py-6 rounded-2xl hover:bg-secondary/10"
          >
            Go to Shopping
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
