export default function Header({ user, onLogout }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-xl font-semibold">MSE Quiz</div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-slate-600">Signed in as <span className="font-medium">{user.id}</span></div>
        <button onClick={onLogout} className="rounded-xl border px-3 py-1">Log out</button>
      </div>
    </div>
  );
}
