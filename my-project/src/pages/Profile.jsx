import { useState, useEffect } from 'react';

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth', {
                    headers: {
                        'x-auth-token': localStorage.getItem('token')
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    setUser(data);
                }
            } catch (err) {
                console.error('Error fetching user:', err);
            }
        };

        fetchUser();
    }, []);

    if (!user) {
        return <div className="min-h-screen pt-24 text-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen p-8 pt-24 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 mb-6 flex items-center justify-center text-4xl text-white font-bold">
                {user.name.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-500 mb-6">{user.email}</p>

            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                        <span>Email Notifications</span>
                        <input type="checkbox" className="toggle" defaultChecked />
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                        <span>Two-Factor Authentication</span>
                        <input type="checkbox" className="toggle" />
                    </div>
                </div>
            </div>
        </div>
    );
}
