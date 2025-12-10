import { useMemo, useState } from 'react';
import { Sparkles, Type, Eye, Maximize2 } from 'lucide-react';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import SimpleMDEditor from './SimpleMDEditor';

const ChapterEditorTab = ({
    book = {
        title: 'Untitled',
        chapters: [
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
    const [isPreviewMode, setIsPreviewMode] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    //Simple markdown parser
    const formatMarkdown = (content) => {};

    const mdeOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
            toolbar: [
                'bold',
                'italic',
                'heading',
                '|',
                'quote',
                'unordered-list',
                'ordered-list',
                '|',
                'link',
                'image',
                '|',
                'preview',
                'side-by-side',
                'fullscreen'
            ]
        };
    }, []);

    if (selectedChapterIndex === null || !book.chapters[selectedChapterIndex]) {
        return (
            <div className="">
                <div className="">
                    <div className="">
                        <Type className="" />
                    </div>
                    <p className="">Select a chapter to start editing</p>
                    <p className="">Choose from the sidebar to begin writing</p>
                </div>
            </div>
        );
    }
    return <div className=""></div>;
};

export default ChapterEditorTab;
