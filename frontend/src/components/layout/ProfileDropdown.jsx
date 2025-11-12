import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';

const ProfileDropdown = ({
    isOpen,
    onToggle,
    avatar,
    companyName,
    email,
    userRole,
    onLogout
}) => {
    return (
        <div className="relative">
            {/* Avatar Button */}
            <button
                onClick={onToggle}
                className="flex items-center space-x-2 focus:outline-none group"
            >
                <img
                    src={
                        avatar ||
                        `https://api.dicebear.com/7.x/initials/svg?seed=${
                            companyName || 'User'
                        }`
                    }
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-200"
                />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 border-b border-gray-100">
                            <p className="font-semibold text-gray-900 truncate">
                                {companyName || 'User Name'}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                {email || 'user@example.com'}
                            </p>
                            <p className="text-xs mt-1 text-violet-600 font-medium">
                                {userRole || 'Member'}
                            </p>
                        </div>

                        <div className="py-2">
                            <button
                                onClick={onLogout}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 transition-all duration-150"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Logout
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfileDropdown;
