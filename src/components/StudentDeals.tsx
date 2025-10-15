const StudentDeals = () => {
  return (
    <div className="border-4 border-primary rounded-3xl p-6 bg-card/50">
      <h3 className="text-4xl text-primary mb-4">ongoing student deals</h3>
      
      <div className="border-2 border-primary rounded-2xl p-5 bg-card/80">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl text-primary font-bold mb-1">SPOTIFY STUDENT COST</p>
            <p className="text-2xl text-primary">- ₹69</p>
          </div>
          <button className="text-2xl text-primary underline">more</button>
        </div>
      </div>
    </div>
  );
};

export default StudentDeals;
