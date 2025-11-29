import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import {
    Sparkles,
    FileDown,
    Save,
    Menu,
    X,
    Edit,
    NotebookText,
    ChevronDown,
    FileText
} from "lucide-react"
import { arrayMove } from "@dnd-kit/sortable"

import axiosInstance from "../utils/axiosInstance"
import { API_PATHS } from "../utils/apiPaths";
import Dropdown, {DropdownItem} from '../components/ui/Dropdown.jsx'
import InputField from "../components/ui/InputField.jsx"
import Button from "../components/ui/Button.jsx"
import Modal from "../components/ui/Modal.jsx"
import SelectField from "../components/ui/SelectField.jsx"

const EditorPage = () => {
    return <div>EditorPage</div>;
};

export default EditorPage;
