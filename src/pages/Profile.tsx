import { User, Settings, LogOut } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Profile</h1>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-md space-y-6">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">John Doe</h2>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg divide-y">
          <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50">
            <Settings className="w-5 h-5 text-gray-500" />
            <span>Settings</span>
          </button>
          <button className="w-full p-4 flex items-center gap-3 hover:bg-gray-50 text-destructive">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;