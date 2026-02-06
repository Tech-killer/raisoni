import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login({ setAuth }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();

            if (response.ok) {
                localStorage.setItem('token', parseRes.token);
                setAuth(true);
                navigate('/Pages'); // Redirect to Dashboard
            } else {
                setAuth(false);
                setError(parseRes.msg || 'Login Failed');
            }
        } catch (err) {
            console.error(err.message);
            setError('Server Connection Error');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
            <div className="w-full max-w-md p-8 rounded-2xl glass bg-white/40 dark:bg-black/40">
                <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none bg-white/50"
                            placeholder="hello@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none bg-white/50"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Don't have an account? <Link to="/Sign" className="text-blue-600 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
