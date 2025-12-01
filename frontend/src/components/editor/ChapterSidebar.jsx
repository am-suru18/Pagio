import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Trash2, Plus, GripVertical } from 'lucide-react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import Button from '../ui/Button';

//SortableItem Component
const SortableItem = ({
    chapter,
    index,
    selectedChapterIndex,
    onSelectChapter,
    onDeleteChapter,
    onGenerateChapterContent,
    isGenerating
}) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: chapter._id || `new${index}` });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };
    return (
        <div ref={setNodeRef} style={style} className="">
            <button
                className={`flex-1 flex items-center p-3 text-sm rounded-l-lg text-left transition-colors ${
                    selectedChapterIndex === index
                        ? 'bg-violet-50/50 text-violet-800 font-semibold'
                        : 'text-slate-600 hover:bg-slate-100'
                }`}
                onClick={() => onSelectChapter}
            >
                <GripVertical className="" {...listeners} {...attributes} />
                <span className="">{chapter.title}</span>
            </button>
            <div className="">
                <Button
                    variant="ghost"
                    size="small "
                    className=""
                    onClick={() => onGenerateChapterContent(index)}
                    isLoading={isGenerating === index}
                    title="Generate Content with AI"
                >
                    {isGenerating !== index && <Sparkles className="" />}
                </Button>
                <Button
                    variant="ghost"
                    size="small"
                    className=""
                    onClick={() => onDeleteChapter(index)}
                    title="Delete chapter"
                >
                    <Trash2 className="" />
                </Button>
            </div>
        </div>
    );
};

const ChapterSidebar = ({
    book,
    selectedChapterIndex,
    onSelectChapter,
    onAddChapter,
    onDeleteChapter,
    onGenerateChapterContent,
    isGenerating,
    onReorderChapters
}) => {
    const navigate = useNavigate();

    const chapterIds = book.chapters.map(
        (chapter, index) => chapter._id || `new-${index}`
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = chapterIds.indexOf(active.id);
            const newIndex = chapterIds.indexOf(over.id);
            onReorderChapters(oldIndex, newIndex);
        }
    };
    return (
        <aside className="w-80 h-full bg-white border-r border-slate-200 flex flex-col">
            <div className="p-4 border-b border-slate-200">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/dashboard')}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Dashboard
                </Button>
                <h2
                    className="text-base font-semibold text-slate-800 mt-4 truncate"
                    title={book.title}
                >
                    {book.title}
                </h2>
            </div>
            <div className="flex-1 overflow-y-auto">
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={chapterIds}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="p-4 space-y-2">
                            {book.chapters.map((chapter, index) => (
                                <SortableItem
                                    key={chapter._id || `new-${index}`}
                                    chapter={chapter}
                                    index={index}
                                    selectedChapterIndex={selectedChapterIndex}
                                    onSelectChapter={onSelectChapter}
                                    onDeleteChapter={onDeleteChapter}
                                    onGenerateChapterContent={
                                        onGenerateChapterContent
                                    }
                                    isGenerating={isGenerating}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            </div>

            <div className="p-4 border-t border-slate-200">
                <Button
                    variant="secondary"
                    onClick={onAddChapter}
                    className=""
                    icon={Plus}
                >
                    New
                </Button>
            </div>
        </aside>
    );
};

export default ChapterSidebar;
