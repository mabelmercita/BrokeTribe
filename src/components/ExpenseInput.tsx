import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ExpenseInput = () => {
  const [amount, setAmount] = useState("");

  return (
    <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
      <h3 className="text-4xl text-primary mb-4">ordered out today?</h3>
      
      <div className="flex items-center gap-3">
        <span className="text-3xl text-foreground">₹</span>
        <Input 
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0"
          className="flex-1 h-14 text-2xl border-3 border-primary rounded-2xl bg-card/80"
        />
        <Button className="border-3 border-primary bg-transparent text-primary text-2xl px-8 py-6 rounded-2xl hover:bg-primary/10">
          Enter
        </Button>
      </div>

      <p className="text-xl text-accent mt-4">← expands this menu</p>
    </div>
  );
};

export default ExpenseInput;
