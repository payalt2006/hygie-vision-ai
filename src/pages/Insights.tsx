import Sidebar from "@/components/Sidebar";

const Insights = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">AI Insights</h1>
          <p className="text-muted-foreground">Intelligent analysis and recommendations</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
