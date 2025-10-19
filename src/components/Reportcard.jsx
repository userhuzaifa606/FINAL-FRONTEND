import React from "react";
import { Link } from "react-router-dom";

export default function ReportCard({ id, name, date, summary }) {
  return (
    <div className="card p-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="text-sm text-gray-400">Report #{id}</div>
      </div>

      <p className="mt-3 text-sm text-gray-700 line-clamp-3">{summary}</p>

      <div className="mt-4 flex justify-between items-center">
        <Link to="/summary" className="text-health-600 font-medium">View Summary →</Link>
        <button className="text-sm bg-health-50 px-3 py-1 rounded">Download</button>
      </div>
    </div>
  );
}
