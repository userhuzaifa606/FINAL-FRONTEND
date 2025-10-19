import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export default function AddVitals() {
  const [bp, setBp] = useState("");
  const [sugar, setSugar] = useState("");
  const [weight, setWeight] = useState("");
  const nav = useNavigate();

  const save = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem("hm_vitals") || "[]");
    list.unshift({
      id: Date.now(),
      bp,
      sugar,
      weight,
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem("hm_vitals", JSON.stringify(list));
    nav("/timeline");
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-6 max-w-2xl">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3">Add Manual Vitals</h3>
            <form className="space-y-3" onSubmit={save}>
              <div>
                <label className="block text-sm">BP</label>
                <input value={bp} onChange={(e)=>setBp(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="130/80" />
              </div>
              <div>
                <label className="block text-sm">Sugar (mg/dL)</label>
                <input value={sugar} onChange={(e)=>setSugar(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="95" />
              </div>
              <div>
                <label className="block text-sm">Weight (kg)</label>
                <input value={weight} onChange={(e)=>setWeight(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="72" />
              </div>

              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 bg-health-500 text-white rounded">Save</button>
                <button type="button" onClick={()=>nav("/dashboard")} className="px-4 py-2 bg-gray-100 rounded">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
