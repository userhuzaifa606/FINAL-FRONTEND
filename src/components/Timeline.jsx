import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Timeline() {
  const vitals = JSON.parse(localStorage.getItem("hm_vitals") || "[]");
  const reports = JSON.parse(localStorage.getItem("hm_reports") || "[]");

  const merged = [
    ...vitals.map(v => ({ type: "vital", ...v })),
    ...reports.map(r => ({ type: "report", ...r }))
  ].sort((a, b) => (b.id || 0) - (a.id || 0));

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
 
        <div className="p-6 max-w-4xl">
          <h3 className="text-lg font-semibold mb-4">Health Timeline</h3>

          <div className="space-y-3">
            {merged.length === 0 && (
              <div className="card p-4">No entries yet. Upload reports or add vitals.</div>
            )}

            {merged.map((item) => (
              <div key={item.id} className="card p-4 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">{item.date}</div>
                  {item.type === "report" ? (
                    <>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-700">{item.summary}</div>
                    </>
                  ) : (
                    <>
                      <div className="font-semibold">Manual Vitals</div>
                      <div className="text-sm text-gray-700">BP: {item.bp} • Sugar: {item.sugar} • Weight: {item.weight}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
