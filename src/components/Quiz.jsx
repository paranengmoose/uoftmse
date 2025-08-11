import { useEffect, useState } from 'react'
import Header from './Header'
export default function Quiz({ course, chapter, onExit, user, onLogout }) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => { setIdx(0); setPicked(null); setScore(0); setDone(false); }, [chapter?.id]);
  const q = chapter.questions[idx];
  const submit = () => {
    if (picked == null) return;
    if (picked === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (idx + 1 < chapter.questions.length) { setIdx(idx + 1); setPicked(null); }
    else {
      setDone(true);
      const key = `result:${user.id}:${course.id}:${chapter.id}`;
      const result = { user: user.id, course: course.id, chapter: chapter.id, score, total: chapter.questions.length, ts: new Date().toISOString() };
      try { localStorage.setItem(key, JSON.stringify(result)); } catch {}
    }
  };
  if (done) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-3xl mx-auto">
          <Header user={user} onLogout={onLogout} />
          <div className="bg-white rounded-2xl p-6 shadow space-y-3">
            <h2 className="text-xl font-semibold">Chapter finished</h2>
            <p className="text-slate-700">{chapter.title}</p>
            <div className="text-lg">Score: <span className="font-semibold">{score} / {chapter.questions.length}</span></div>
            <div className="flex gap-2">
              <button onClick={onExit} className="rounded-xl border px-3 py-2">Back to chapters</button>
              <button onClick={() => { setIdx(0); setPicked(null); setScore(0); setDone(false); }} className="rounded-xl bg-black text-white px-3 py-2">Retry</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto">
        <Header user={user} onLogout={onLogout} />
        <div className="flex items-center gap-2 mb-2">
          <button onClick={onExit} className="rounded-xl border px-3 py-1">← Back</button>
          <div className="text-sm text-slate-600">{course.name}</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="text-slate-500 text-sm mb-1">{chapter.title}</div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Question {idx + 1} of {chapter.questions.length}</h2>
            <div className="text-sm text-slate-500">Score: {score}</div>
          </div>
          <p className="mb-4">{q.q}</p>
          <div className="space-y-2">
            {q.choices.map((c, i) => (
              <label key={i} className={`flex items-center gap-3 border rounded-xl p-3 cursor-pointer ${picked === i ? 'ring-2 ring-black' : ''}`}>
                <input type="radio" name="choice" checked={picked===i} onChange={()=>setPicked(i)} />
                <span>{c}</span>
              </label>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={submit} className="rounded-xl bg-black text-white px-4 py-2">Check</button>
            {picked!=null && (
              <div className="px-3 py-2 rounded-xl bg-slate-100">
                {picked === q.answer ? (
                  <span className="text-green-700 font-medium">Correct!</span>
                ) : (
                  <span className="text-red-700 font-medium">Incorrect.</span>
                )}
              </div>
            )}
            {picked!=null && (
              <button onClick={next} className="ml-auto rounded-xl border px-4 py-2">Next →</button>
            )}
          </div>
          {picked!=null && (
            <div className="mt-3 p-3 bg-slate-50 rounded-xl text-sm text-slate-700">
              <div className="font-semibold mb-1">Explanation</div>
              <div>{q.explanation}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
