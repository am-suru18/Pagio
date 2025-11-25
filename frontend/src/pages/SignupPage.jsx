import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, BookOpen } from 'lucide-react';
import toast from 'react-hot-toast';

import InputField from '../components/ui/InputField.jsx';
import Button from '../components/ui/Button.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import axiosInstance from '../utils/axiosInstance.js';
import { API_PATHS } from '../utils/apiPaths.js';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                    'Signup failed. Please try again.'
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
                        <BookOpen className="" />
                    </div>
                    <h1 className="">Create an Account</h1>
                    <p className="">
                        Start your journey of creating amazing eBooks today.
                    </p>
                </div>

                <div className="">
                    <form onSubmit={handleSubmit} className="">
                        <InputField
                            label="Full Name"
                            name="name"
                            type="text"
                            placeholder="Golu Sharma"
                            icon={User}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            icon={Mail}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Minimum 8 characters"
                            icon={Lock}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className=""
                        >
                            Create Account
                        </Button>
                    </form>

                    <p className="">
                        Already have an account?{' '}
                        <Link to="/login" className="">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
