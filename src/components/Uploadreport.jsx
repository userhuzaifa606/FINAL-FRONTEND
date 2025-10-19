import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Uploadpic from "./Uploadpic.jsx";
import { useNavigate } from "react-router-dom";

export default function UploadReport() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        {/* <Navbar title="Upload Report" /> */}
        <div className="p-6 max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Upload your medical report</h2>
          <p className="text-sm text-gray-500 mb-4">Upload PDF or image. AI summary will be generated (demo).</p>
      <Uploadpic/>
        </div>
      </div>
    </div>
  );
}
    