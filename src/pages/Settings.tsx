import Sidebar from "@/components/Sidebar";

const Settings = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Configure monitoring parameters and alerts</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
