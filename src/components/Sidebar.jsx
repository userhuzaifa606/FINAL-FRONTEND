import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white border-r border-gray-100 min-h-screen p-4">
      <h3 className="text-health-600 font-bold mb-4">HealthMate</h3>
      <nav className="space-y-3 text-sm">
        <Link to="/dashboard" className="block p-2 rounded hover:bg-health-50">🏠 Dashboard</Link>
        <Link to="/upload" className="block p-2 rounded hover:bg-health-50">📤 Upload Report</Link>
        <Link to="/addvitals" className="block p-2 rounded hover:bg-health-50">❤️ Add Vitals</Link>
        <Link to="/timeline" className="block p-2 rounded hover:bg-health-50">📅 Timeline</Link>
      </nav>
    </aside>
  );
}
