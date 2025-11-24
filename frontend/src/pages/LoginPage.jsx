import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
        } catch (error) {
            localStorage.clear();
            toast.error(
                error.response?.data?.message ||
                    'Login failed. Please try again.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <BookOpen className=''/>
                    </div>
                    <h1 className="">Welcome Back</h1>
                    <p className="">Sign in to continue to your eBook dashboard.</p>
                </div>

                <div className="">
                    <form onSubmit={handleSubmit} className="">
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
