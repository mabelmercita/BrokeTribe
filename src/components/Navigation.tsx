import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex justify-center gap-4 max-w-4xl mx-auto">
      <button
        onClick={() => navigate("/dashboard")}
        className={`
          border-3 rounded-2xl px-8 py-4 text-2xl font-medium transition-all
          ${location.pathname === "/dashboard" 
            ? "border-primary text-primary bg-primary/20" 
            : "border-accent text-accent bg-card/80 hover:bg-accent/10"
          }
        `}
      >
        Dashboard
      </button>
      <button
        onClick={() => navigate("/shopping")}
        className={`
          border-3 rounded-2xl px-8 py-4 text-2xl font-medium transition-all
          ${location.pathname === "/shopping" 
            ? "border-primary text-primary bg-primary/20" 
            : "border-accent text-accent bg-card/80 hover:bg-accent/10"
          }
        `}
      >
        Shopping
      </button>
      <button
        onClick={() => navigate("/broketribe")}
        className={`
          border-3 rounded-2xl px-8 py-4 text-2xl font-medium transition-all
          ${location.pathname === "/broketribe" 
            ? "border-primary text-primary bg-primary/20" 
            : "border-accent text-accent bg-card/80 hover:bg-accent/10"
          }
        `}
      >
        BrokeTribe
      </button>
    </div>
  );
};

export default Navigation;
