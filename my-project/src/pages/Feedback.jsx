import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('Please login to submit feedback');
                return;
            }

            const response = await fetch('http://localhost:5000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ rating, comments })
            });

            if (response.ok) {
                setMessage('Feedback submitted successfully!');
                setRating(0);
                setComments('');
                setTimeout(() => navigate('/Pages'), 2000);
            } else {
                setMessage('Error submitting feedback');
            }
        } catch (err) {
            setMessage('Server error');
        }
    };

    return (
        <div className="min-h-screen p-8 pt-24 flex justify-center">
            <div className="w-full max-w-xl">
                <h2 className="text-3xl font-bold mb-6 text-center">We value your feedback</h2>
                {message && <div className={`text-center mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</div>}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium mb-2">How would you rate your experience?</label>
                        <div className="flex space-x-4">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className={`w-10 h-10 rounded-full border transition-colors ${rating >= star ? 'bg-yellow-400 text-white' : 'hover:bg-yellow-400 hover:text-white'}`}
                                >
                                    {star}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Comments</label>
                        <textarea
                            className="w-full p-4 rounded-xl border bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
                            rows="4"
                            placeholder="Tell us what you think..."
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold">Submit Feedback</button>
                </form>
            </div>
        </div>
    );
}
