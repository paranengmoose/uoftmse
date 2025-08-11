import Header from './Header'
export default function ChapterSelect({ course, onBack, onPick, user, onLogout }) {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Header user={user} onLogout={onLogout} />
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="rounded-xl border px-3 py-1">← Back</button>
          <h2 className="text-xl font-semibold">Select a chapter</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {course.chapters.map((ch) => (
            <div key={ch.id} className="bg-white rounded-2xl p-5 shadow">
              <div className="text-sm uppercase text-slate-500">Chapter</div>
              <div className="font-semibold">{ch.title}</div>
              <div className="text-slate-500 text-sm mt-1">{ch.questions.length} questions</div>
              <button onClick={() => onPick(ch)} className="mt-4 rounded-xl bg-black text-white p-2 w-full">Start</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
