// API Configuration and utilities
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://raisoni.onrender.com/api';

// Reusable fetch wrapper with error handling
export const fetchAPI = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token');
    
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['x-auth-token'] = token;
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.msg || `Error: ${response.status}`);
        }

        return { success: true, data };
    } catch (error) {
        console.error('API Error:', error);
        return { success: false, error: error.message };
    }
};

// Specific API methods
export const authAPI = {
    login: (email, password) => fetchAPI('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    }),
    register: (name, email, password) => fetchAPI('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
    }),
    getCurrentUser: () => fetchAPI('/auth'),
};

export const feedbackAPI = {
    submitFeedback: (rating, comments) => fetchAPI('/feedback', {
        method: 'POST',
        body: JSON.stringify({ rating, comments }),
    }),
    getAllFeedback: () => fetchAPI('/feedback'),
};

export default API_BASE_URL;
