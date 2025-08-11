import { useState } from 'react'
import Header from './Header'
import { CATALOG } from '../data/catalog'
export default function CourseSelect({ courses, onSelect, user, onLogout, onAddCourse }) {
  const [pick, setPick] = useState("MSE335");
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto">
        <Header user={user} onLogout={onLogout} />
        <div className="mb-5 bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row gap-3 md:items-center">
          <div className="font-medium">Add a course</div>
          <select className="border rounded-xl p-2 flex-1" value={pick} onChange={(e)=>setPick(e.target.value)}>
            {Object.keys(CATALOG).map((k)=> (<option key={k} value={k}>{k}</option>))}
          </select>
          <button onClick={()=>onAddCourse(pick)} className="rounded-xl bg-black text-white px-4 py-2">Add</button>
        </div>
        <h2 className="text-xl font-semibold mb-4">Select your course</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {courses.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl p-5 shadow flex flex-col justify-between">
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-500">Course</div>
                <div className="text-lg font-semibold">{c.name}</div>
                <div className="text-slate-500 text-sm mt-1">{c.chapters.length} chapters</div>
              </div>
              <button onClick={() => onSelect(c)} className="mt-4 rounded-xl bg-black text-white p-2">Choose</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
