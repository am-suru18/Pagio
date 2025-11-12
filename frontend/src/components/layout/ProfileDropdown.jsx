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

            
        </div>
    );
};

export default ProfileDropdown;
