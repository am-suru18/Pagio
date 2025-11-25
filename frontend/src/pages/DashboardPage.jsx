import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Plus, Book } from 'lucide-react';

import DashboardLayout from '../components/layout/DashboardLayout.jsx';
import Button from '../components/ui/Button.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import axiosInstance, { API_PATHS } from '../utils/apiPaths.js';

const DashboardPage = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axiosInstance.get(
                    API_PATHS.BOOKS.GET_BOOKS
                );
                setBooks(response.data);
            } catch (error) {
                toast.error('Failed to fetch your eBooks');
            } finally {
                setIsLoading(false);
            }
        };
        fetchBooks();
    }, []);

    const handleDeleteBook = async () => {
        if (!bookToDelete) return;
    };

    const handleCreateBookClick = () => {
        setIsCreateModalOpen(true)
    }

    const handleBookCreated = (bookId) => {
        setIsCreateModalOpen(false)
        navigate(`/editor/${bookId}`)
    }

    return <div>DashboardPage</div>;
};

export default DashboardPage;
