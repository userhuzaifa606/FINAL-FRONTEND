import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReportCard from "../components/ReportCard";
import { Link } from "react-router-dom";

export default function Dashboard({data}) {
  const [reports, setReports] = useState([
    { id: 1, name: "CBC Report", date: "2025-10-10", summary: "WBC slightly high; Hb normal." },
    { id: 2, name: "Sugar Test", date: "2025-10-14", summary: "Fasting sugar borderline high." }
  ]);

  
  return (
    <>
 {data && (
  
   <div className="min-h-screen flex">
  <Sidebar />
  <div className="flex-1">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Your Reports</h2>
            <div className="flex gap-3">
              <Link to="/upload" className="px-4 py-2 bg-health-50 rounded">Upload Report</Link>
              <Link to="/vitals" className="px-4 py-2 bg-health-500 text-white rounded">Add Vitals</Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {reports.map((r) => (
              <ReportCard key={r.id} {...r} />
            ))}
          </div>

          <div className="mt-6 card p-4">
            <h3 className="font-semibold">Quick Vitals</h3>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="p-3 bg-health-50 rounded text-center">
                <div className="text-sm text-gray-500">BP</div>
                <div className="text-lg font-semibold">130/80</div>
                </div>
              <div className="p-3 bg-health-50 rounded text-center">
              <div className="text-sm text-gray-500">Sugar</div>
              <div className="text-lg font-semibold">95</div>
              </div>
              <div className="p-3 bg-health-50 rounded text-center">
              <div className="text-sm text-gray-500">Weight</div>
              <div className="text-lg font-semibold">72 kg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
   ) }
   </>
  );
}
