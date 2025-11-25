import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"
import {Plus, Book } from "lucide-react"

import DashboardLayout from "../components/layout/DashboardLayout.jsx"
import Button from "../components/ui/Button.jsx"
import {useAuth} from "../context/AuthContext.jsx"
import axiosInstance from "../utils/apiPaths.js"

const DashboardPage = () => {
    return <div>DashboardPage</div>;
};

export default DashboardPage;
