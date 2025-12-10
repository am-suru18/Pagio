import { useMemo, useState } from 'react';
import { Sparkles, Type, Eye, Maximize2 } from 'lucide-react';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import SimpleMDEditor from './SimpleMDEditor';

const ChapterEditorTab = ({
    book = {
        title: 'Untitled',
        chapter: [
            {
                title: 'Chapter 1',
                content: '-'
            }
        ]
    },
    selectedChapterIndex = 0,
    handleChapterChange = () => {},
    onGenerateChapterContent = () => {},
    isGenerating
}) => {
    return <div className=""></div>;
};

export default ChapterEditorTab;
