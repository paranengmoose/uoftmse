import { useState } from 'react'
const TEST_USER = { id: "hruda", pw: "mse335" };
export default function Login({ onLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (id === TEST_USER.id && pw === TEST_USER.pw) onLogin({ id });
    else setError("Invalid credentials. Try ID: hruda, PW: mse335 (test account)");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-center">MSE Quiz Portal</h1>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium">ID</label>
            <input value={id} onChange={(e)=>setId(e.target.value)} className="mt-1 w-full border rounded-xl p-2" placeholder="hruda" />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)} className="mt-1 w-full border rounded-xl p-2" placeholder="mse335" />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="w-full rounded-xl p-2 bg-black text-white">Log in</button>
        </form>
      </div>
    </div>
  );
}
