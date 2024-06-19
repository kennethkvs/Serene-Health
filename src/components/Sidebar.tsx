export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen">
      <nav className="p-4">
        <ul>
          <li className="p-2">Dashboard</li>
          <li className="p-2">Patients</li>
          <li className="p-2">Appointments</li>
          <li className="p-2">Settings</li>
        </ul>
      </nav>
      <div className="absolute bottom-0 p-4">
        <div>
          <hr />
        </div>
        <p className="text-center">Serene Health</p>
      </div>
    </div>
  );
}
