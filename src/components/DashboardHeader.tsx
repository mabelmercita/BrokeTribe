import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface DashboardHeaderProps {
  userName: string;
  allowanceLeft: number;
  totalAllowance: number;
  dayStreak: number;
  weekSavings: number;
  expenseAmount?: string;
  expenseCategory?: string;
}

const spendingData = [
  { name: "Food 🍕", value: 1200, color: "hsl(var(--primary))" },
  { name: "Travel 🚌", value: 700, color: "hsl(var(--secondary))" },
  { name: "Lifestyle 🛍️", value: 500, color: "hsl(var(--accent))" },
  { name: "Entertainment 🎬", value: 350, color: "hsl(var(--yellow))" },
  { name: "Academia 📚", value: 250, color: "#9b87f5" },
];

const chartConfig = {
  food: { label: "Food 🍕", color: "hsl(var(--primary))" },
  travel: { label: "Travel 🚌", color: "hsl(var(--secondary))" },
  lifestyle: { label: "Lifestyle 🛍️", color: "hsl(var(--accent))" },
  entertainment: { label: "Entertainment 🎬", color: "hsl(var(--yellow))" },
  academia: { label: "Academia 📚", color: "#9b87f5" },
};

const DashboardHeader = ({ userName, allowanceLeft, totalAllowance, dayStreak, weekSavings, expenseAmount, expenseCategory }: DashboardHeaderProps) => {
  const percentage = (allowanceLeft / totalAllowance) * 100;
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [animatedPieData, setAnimatedPieData] = useState(spendingData.map(item => ({ ...item, value: 0 })));

  useEffect(() => {
    // Animate progress bar
    const progressTimer = setTimeout(() => {
      const duration = 1200;
      const steps = 60;
      const stepValue = percentage / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        setAnimatedPercentage(prev => {
          const next = stepValue * currentStep;
          return next > percentage ? percentage : next;
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    }, 100);

    // Animate pie chart
    const pieTimer = setTimeout(() => {
      spendingData.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedPieData(prev => {
            const newData = [...prev];
            newData[index] = spendingData[index];
            return newData;
          });
        }, index * 200);
      });
    }, 300);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(pieTimer);
    };
  }, [percentage]);

  const totalSpending = spendingData.reduce((sum, item) => sum + item.value, 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = ((data.value / totalSpending) * 100).toFixed(1);
      return (
        <div className="bg-card border-2 border-primary rounded-xl p-3 shadow-lg animate-scale-in">
          <p className="text-lg text-primary font-bold">{data.name}</p>
          <p className="text-accent text-base">₹{data.value}</p>
          <p className="text-secondary text-sm">{percentage}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="border-4 border-primary rounded-3xl p-8 bg-card/50 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-6xl text-primary font-bold inline">HELLO <span className="text-secondary">{userName}</span></h1>
          <div className="mt-2">
            <p className="text-3xl text-accent">🔥🔥🔥🔥 {dayStreak} day streak</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-scale-in"></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-scale-in" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 rounded-full bg-primary animate-scale-in" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-2xl text-accent mb-4">your allowance left</p>
        
        {/* Progress bar */}
        <div className="relative w-full max-w-md h-8 bg-card border-2 border-accent rounded-full overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-accent/30 transition-all duration-300 ease-in-out"
            style={{ 
              width: `${animatedPercentage}%`,
              background: 'repeating-linear-gradient(45deg, hsl(var(--accent)), hsl(var(--accent)) 10px, transparent 10px, transparent 20px)'
            }}
          />
        </div>
        <p className="text-2xl text-accent mt-2">=70%</p>
      </div>

      {/* Pie Chart Section */}
      <div className="mb-6 p-6 bg-card/30 rounded-2xl border-2 border-secondary/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <p className="text-2xl text-accent mb-4 text-center">💸 your week at a glance</p>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Pie Chart */}
          <div className="w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={animatedPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={800}
                  animationEasing="ease-in-out"
                >
                  {animatedPieData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      className="transition-all hover:opacity-80 cursor-pointer"
                      style={{
                        filter: 'drop-shadow(0 0 8px currentColor)',
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-2">
            {spendingData.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 text-lg animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: `0 0 8px ${item.color}`
                  }}
                />
                <span className="text-accent flex-1">{item.name}</span>
                <span className="text-secondary font-bold">₹{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/30 rounded-2xl border-2 border-secondary">
        <p className="text-3xl text-yellow leading-relaxed">
          {expenseAmount && expenseCategory 
            ? `you spent ₹${expenseAmount} on ${expenseCategory} today. Don't destroy your saving streak by ordering midnight snacks like yesterday`
            : "Track your expenses to see personalized insights!"}
        </p>
        <button 
          onClick={() => window.location.href = '/broketribe'}
          className="text-xl text-secondary underline mt-2"
        >
          participate in challenges
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
