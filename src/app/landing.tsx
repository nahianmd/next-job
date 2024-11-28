// app/landing.tsx
const Landing = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Welcome to NextJobs</h1>
        <p className="text-xl text-muted-foreground">Find your next opportunity</p>
      </div>

      <div className="space-y-4 pt-4">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="p-6 rounded-lg border bg-card shadow-sm hover:shadow transition-all duration-200">
              Content block {i + 1}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Landing;
