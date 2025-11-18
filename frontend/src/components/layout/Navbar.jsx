import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import ProfileDropdown from './ProfileDropdown';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Testimonials', href: '#testimonials' }
    ];

    // Close profile dropdown when clicking outside
    useEffect(() => {
        function handleClick(e) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setProfileDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* LOGO */}
                    <a href="/" className="flex items-center space-x-2.5 group">
                        <div className="w-9 h-9 bg-linear-to-br from-violet-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300 group-hover:scale-105">
                            <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold text-gray-900 tracking-tight">
                            Pagio: AI ebook Creator
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-violet-600 rounded-lg hover:bg-violet-50/50 transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Auth Buttons + Profile for Desktop */}
                    <div className="hidden lg:flex items-center space-x-3">
                        {isAuthenticated ? (
                            <div ref={dropdownRef}>
                                <ProfileDropdown
                                    isOpen={profileDropdownOpen}
                                    onToggle={(e) => {
                                        e.stopPropagation();
                                        setProfileDropdownOpen(
                                            !profileDropdownOpen
                                        );
                                    }}
                                    avatar={user?.avatar}
                                    companyName={user?.name}
                                    email={user?.email}
                                    userRole={user?.role}
                                    onLogout={logout}
                                />
                            </div>
                        ) : (
                            <>
                                <a
                                    href="/login"
                                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200"
                                >
                                    Login
                                </a>
                                <a
                                    href="/signup"
                                    className="px-5 py-2 text-sm font-medium text-white bg-linear-to-r from-violet-400 to-purple-500 rounded-lg hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-200 hover:scale-105"
                                >
                                    Get Started
                                </a>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                    >
                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden mt-3 pb-4 space-y-3 animate-slideDown">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Mobile Auth */}
                        <div className="pt-3 border-t border-gray-200">
                            {isAuthenticated ? (
                                <button
                                    onClick={logout}
                                    className="w-full px-4 py-2 text-center text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <a
                                        href="/login"
                                        className="block px-4 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="/signup"
                                        className="block px-4 py-2 mt-1 text-center text-sm font-medium text-white bg-linear-to-r from-violet-600 to-purple-500 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
                                    >
                                        Get Started
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
