import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  BrainCircuit, 
  FileText, 
  GraduationCap, 
  LayoutDashboard, 
  Menu, 
  X,
  ChevronRight,
  ArrowLeft,
  Dna,
  FlaskConical,
  Atom,
  Calculator,
  Binary,
  Lock
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Dna,
  FlaskConical,
  Atom,
  Calculator,
  Binary,
  BookOpen
};
import { subjects, Subject, Topic, Note } from './data/mockData';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { cn } from './utils/cn';

type PageState = 
  | { view: 'dashboard' }
  | { view: 'subject'; subjectId: string }
  | { view: 'topic'; subjectId: string; topicId: string }
  | { view: 'note'; subjectId: string; topicId: string; noteId: string }
  | { view: 'flashcards'; subjectId: string; topicId: string }
  | { view: 'pastpapers'; subjectId: string; topicId: string };

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [passkeyError, setPasskeyError] = useState(false);

  const [page, setPage] = useState<PageState>({ view: 'dashboard' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePasskeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkeyInput === 'alexdepzaivcl') {
      setIsAuthenticated(true);
    } else {
      setPasskeyError(true);
      setTimeout(() => setPasskeyError(false), 2000);
    }
  };

  const navigateTo = (newState: PageState) => {
    setPage(newState);
    setIsSidebarOpen(false);
  };

  const currentSubject = page.view !== 'dashboard' 
    ? subjects.find(s => s.id === (page as any).subjectId) 
    : null;
    
  const currentTopic = (page.view === 'topic' || page.view === 'note' || page.view === 'flashcards' || page.view === 'pastpapers')
    ? currentSubject?.topics.find(t => t.id === (page as any).topicId)
    : null;

  const currentNote = page.view === 'note'
    ? currentTopic?.notes.find(n => n.id === (page as any).noteId)
    : null;

  return (
    <div className="min-h-screen text-zinc-100 font-sans selection:bg-yellow-500/30">
      <div className="bg-space" />
      <Starfield />
      <div className="black-hole-container">
        <div className="accretion-disk" />
        <div className="accretion-disk-inner" />
        <div className="dust-ring" />
        <div className="photon-ring" />
        <div className="event-horizon" />
      </div>
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <Atom className="w-16 h-16 text-yellow-500" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xl font-display font-bold tracking-widest uppercase text-yellow-500"
            >
              Initializing
            </motion.h2>
          </motion.div>
        ) : !isAuthenticated ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
            <div className="relative z-10 w-full max-w-md p-8 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                  <Lock className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-2xl font-display font-bold mb-2 text-center text-white">Access Restricted</h2>
              <p className="text-zinc-400 text-center mb-8 text-sm">Please enter the passkey to access the revision materials.</p>
              
              <form onSubmit={handlePasskeySubmit} className="space-y-4">
                <div>
                  <input 
                    type="password" 
                    value={passkeyInput} 
                    onChange={(e) => setPasskeyInput(e.target.value)}
                    className={cn(
                      "w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors text-center tracking-widest",
                      passkeyError ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-yellow-500"
                    )}
                    placeholder="•••••••••••••"
                    autoFocus
                  />
                  {passkeyError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="text-red-400 text-xs text-center mt-2"
                    >
                      Incorrect passkey. Access denied.
                    </motion.p>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 text-black font-bold rounded-xl px-4 py-3 hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                >
                  Authenticate <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10"
          >
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 text-yellow-500">
                <GraduationCap className="w-6 h-6" />
                <span className="font-display font-bold text-xl tracking-tight lowercase">tiristed</span>
              </div>
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-zinc-400 hover:text-white">
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Sidebar */}
            <AnimatePresence>
              {(isSidebarOpen) && (
                <motion.div
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                  className="fixed top-0 left-0 bottom-0 w-64 bg-black/90 backdrop-blur-xl border-r border-white/10 z-40 flex flex-col lg:hidden"
                >
                  <SidebarContent page={page} navigateTo={navigateTo} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <div className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 bg-black/90 backdrop-blur-xl border-r border-white/10 z-40 flex-col">
              <SidebarContent page={page} navigateTo={navigateTo} />
            </div>

            {/* Main Content */}
            <main className="lg:pl-64 pt-16 lg:pt-0 min-h-screen relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page.view + ((page as any).subjectId || '') + ((page as any).topicId || '') + ((page as any).noteId || '')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 lg:p-10 max-w-5xl mx-auto"
                >
                  {page.view === 'dashboard' && (
                    <DashboardView onSelectSubject={(id) => navigateTo({ view: 'subject', subjectId: id })} />
                  )}
                  
                  {page.view === 'subject' && currentSubject && (
                    <SubjectView 
                      subject={currentSubject} 
                      onBack={() => navigateTo({ view: 'dashboard' })}
                      onSelectTopic={(topicId) => navigateTo({ view: 'topic', subjectId: currentSubject.id, topicId })}
                    />
                  )}

                  {page.view === 'topic' && currentSubject && currentTopic && (
                    <TopicView 
                      subject={currentSubject} 
                      topic={currentTopic}
                      onBack={() => navigateTo({ view: 'subject', subjectId: currentSubject.id })}
                      onSelectNote={(noteId) => navigateTo({ view: 'note', subjectId: currentSubject.id, topicId: currentTopic.id, noteId })}
                      onSelectFlashcards={() => navigateTo({ view: 'flashcards', subjectId: currentSubject.id, topicId: currentTopic.id })}
                      onSelectPastPapers={() => navigateTo({ view: 'pastpapers', subjectId: currentSubject.id, topicId: currentTopic.id })}
                    />
                  )}

                  {page.view === 'note' && currentSubject && currentTopic && currentNote && (
                    <NoteView 
                      subject={currentSubject}
                      topic={currentTopic}
                      note={currentNote}
                      onBack={() => navigateTo({ view: 'topic', subjectId: currentSubject.id, topicId: currentTopic.id })}
                      onSelectFlashcards={() => navigateTo({ view: 'flashcards', subjectId: currentSubject.id, topicId: currentTopic.id })}
                      onSelectPastPapers={() => navigateTo({ view: 'pastpapers', subjectId: currentSubject.id, topicId: currentTopic.id })}
                    />
                  )}

                  {page.view === 'flashcards' && currentSubject && currentTopic && (
                    <FlashcardsView 
                      subject={currentSubject}
                      topic={currentTopic}
                      onBack={() => navigateTo({ view: 'topic', subjectId: currentSubject.id, topicId: currentTopic.id })}
                    />
                  )}

                  {page.view === 'pastpapers' && currentSubject && currentTopic && (
                    <PastPapersView 
                      subject={currentSubject}
                      topic={currentTopic}
                      onBack={() => navigateTo({ view: 'topic', subjectId: currentSubject.id, topicId: currentTopic.id })}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarContent({ page, navigateTo }: { page: PageState, navigateTo: (state: PageState) => void }) {
  return (
    <>
      <div className="h-16 flex items-center gap-3 px-6 border-b border-white/10">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black">
          <GraduationCap className="w-5 h-5" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight lowercase text-white">
          tiristed <span className="text-yellow-500">igcse</span>
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <SidebarItem 
          icon={<LayoutDashboard />} 
          label="Dashboard" 
          active={page.view === 'dashboard'} 
          onClick={() => navigateTo({ view: 'dashboard' })} 
        />
        <div className="pt-4 pb-2 px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
          Subjects
        </div>
        {subjects.map(subject => (
          <SidebarItem 
            key={subject.id}
            icon={<BookOpen />} 
            label={subject.title} 
            active={page.view !== 'dashboard' && (page as any).subjectId === subject.id} 
            onClick={() => navigateTo({ view: 'subject', subjectId: subject.id })} 
          />
        ))}
        
        <div className="pt-6 pb-2 px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
          Tools
        </div>
        <SidebarItem icon={<FileText />} label="Past Papers" active={false} onClick={() => {}} />
        <SidebarItem icon={<BrainCircuit />} label="Flashcards" active={false} onClick={() => {}} />
      </nav>
    </>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactElement, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
        active 
          ? "bg-yellow-500/10 text-yellow-500" 
          : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
      )}
    >
      {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: cn((icon.props as { className?: string }).className, "w-5 h-5") })}
      {label}
    </button>
  );
}

function DashboardView({ onSelectSubject }: { onSelectSubject: (id: string) => void }) {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-display font-bold tracking-tight text-white">
          Welcome back.
        </h1>
        <p className="text-zinc-400 text-lg">
          Select a subject to continue your IGCSE revision.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => {
          const Icon = iconMap[subject.icon] || BookOpen;
          return (
            <motion.button
              key={subject.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectSubject(subject.id)}
              className="relative overflow-hidden group rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 text-left transition-colors hover:border-yellow-500/50"
            >
              <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-br transition-opacity group-hover:opacity-30", subject.color)} />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/5 text-yellow-500">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {subject.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    {subject.topics.length} Topics available
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-8">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-2">
            <FileText className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Past Papers</h3>
            <p className="text-zinc-400 mt-2 max-w-md mx-auto">
              Practice with real exam questions organized by topic. Test your knowledge and prepare for the final exams.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors mt-4">
            Start Practicing
          </button>
        </div>
      </div>
    </div>
  );
}

function SubjectView({ subject, onBack, onSelectTopic }: { subject: Subject, onBack: () => void, onSelectTopic: (id: string) => void }) {
  const Icon = iconMap[subject.icon] || BookOpen;

  return (
    <div className="space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
            <Icon className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white">
            {subject.title}
          </h1>
        </div>
        <p className="text-zinc-400">
          Select a topic to view notes and resources.
        </p>
      </header>

      <div className="space-y-3">
        {subject.topics.map((topic) => (
          <motion.button
            key={topic.id}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelectTopic(topic.id)}
            className="w-full flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm text-left transition-colors hover:border-yellow-500/50 group"
          >
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-1 line-clamp-1">
                {topic.description}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-yellow-500 transition-colors flex-shrink-0 ml-4" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function TopicView({ subject, topic, onBack, onSelectNote, onSelectFlashcards, onSelectPastPapers }: { subject: Subject, topic: Topic, onBack: () => void, onSelectNote: (id: string) => void, onSelectFlashcards: () => void, onSelectPastPapers: () => void }) {
  return (
    <div className="space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to {subject.title}
      </button>

      <header className="space-y-2">
        <h1 className="text-3xl font-display font-bold tracking-tight text-white">
          {topic.title}
        </h1>
        <p className="text-zinc-400">
          {topic.description}
        </p>
      </header>

      <div className="flex gap-4 mb-8">
        <button onClick={onSelectFlashcards} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <BrainCircuit className="w-5 h-5 text-yellow-500" />
          <span className="font-medium">Flashcards</span>
        </button>
        <button onClick={onSelectPastPapers} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <FileText className="w-5 h-5 text-yellow-500" />
          <span className="font-medium">Past Papers</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topic.notes.map((note) => (
          <motion.button
            key={note.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectNote(note.id)}
            className="flex flex-col p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm text-left transition-colors hover:border-yellow-500/50 group"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-zinc-300 group-hover:text-yellow-500 group-hover:bg-yellow-500/10 transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
              {note.title}
            </h3>
            <p className="text-sm text-zinc-500 mt-2">
              Revision Notes
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function NoteView({ subject, topic, note, onBack, onSelectFlashcards, onSelectPastPapers }: { subject: Subject, topic: Topic, note: Note, onBack: () => void, onSelectFlashcards: () => void, onSelectPastPapers: () => void }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {topic.title}
        </button>
        
        <div className="flex gap-2">
          <button onClick={onSelectFlashcards} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
            Flashcards
          </button>
          <button onClick={onSelectPastPapers} className="px-4 py-2 rounded-full bg-yellow-500 text-black text-sm font-medium hover:bg-yellow-400 transition-colors">
            Practice Questions
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md p-8 md:p-12">
        {note.pdfUrl ? (
          <div className="w-full" style={{ height: '85vh' }}>
            <iframe 
              src={note.pdfUrl} 
              className="w-full h-full rounded-xl border-0"
              title={note.title}
            />
          </div>
        ) : (
          <div className="markdown-body prose prose-invert max-w-none prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:shadow-lg prose-headings:text-yellow-500 prose-a:text-yellow-400 hover:prose-a:text-yellow-300">
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{note.content}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}

function FlashcardsView({ subject, topic, onBack }: { subject: Subject, topic: Topic, onBack: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flashcards = [
    { q: `What is the definition of ${topic.title.split('.')[1] || topic.title}?`, a: "A key concept in this topic that you need to memorize for the exam." },
    { q: "List three main characteristics.", a: "1. First characteristic\n2. Second characteristic\n3. Third characteristic" },
    { q: "Explain the process of...", a: "The process involves several steps starting with..." }
  ];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  return (
    <div className="space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to {topic.title}
      </button>

      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-display font-bold tracking-tight text-white">
          Flashcards
        </h1>
        <p className="text-zinc-400">
          {topic.title}
        </p>
      </header>

      <div className="max-w-2xl mx-auto">
        <div className="mb-4 text-center text-sm text-zinc-500 font-medium">
          Card {currentIndex + 1} of {flashcards.length}
        </div>
        
        <div 
          className="relative h-80 w-full perspective-1000 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="w-full h-full absolute preserve-3d"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="absolute w-full h-full backface-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center shadow-xl">
              <BrainCircuit className="w-8 h-8 text-yellow-500 mb-6 opacity-50" />
              <h2 className="text-2xl font-medium text-white">{flashcards[currentIndex].q}</h2>
              <p className="absolute bottom-6 text-sm text-zinc-500">Click to flip</p>
            </div>

            <div 
              className="absolute w-full h-full backface-hidden rounded-3xl border border-yellow-500/30 bg-yellow-500/5 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center shadow-xl"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="prose prose-invert max-w-none">
                <Markdown>{flashcards[currentIndex].a}</Markdown>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button 
            onClick={() => { setIsFlipped(false); setTimeout(() => setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length), 150); }}
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
          >
            Previous
          </button>
          <button 
            onClick={handleNext}
            className="px-8 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium transition-colors"
          >
            Next Card
          </button>
        </div>
      </div>
    </div>
  );
}

function PastPapersView({ subject, topic, onBack }: { subject: Subject, topic: Topic, onBack: () => void }) {
  return (
    <div className="space-y-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to {topic.title}
      </button>

      <header className="space-y-2">
        <h1 className="text-3xl font-display font-bold tracking-tight text-white">
          Topic Questions
        </h1>
        <p className="text-zinc-400">
          {topic.title}
        </p>
      </header>

      <div className="space-y-4">
        {[1, 2, 3].map((num) => (
          <div key={num} className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-zinc-400">Question {num}</span>
              <span className="text-xs text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">{num * 2} marks</span>
            </div>
            <p className="text-white mb-6">
              Describe the key concepts related to <span className="text-yellow-400">{topic.title}</span> and explain how they apply in a biological context.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors border border-white/10">
                View Mark Scheme
              </button>
              <button className="px-4 py-2 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 text-sm font-medium transition-colors border border-yellow-500/20">
                Worked Solution
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Starfield() {
  const stars = React.useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const startDistance = 600 + Math.random() * 1000;
      const endDistance = 50 + Math.random() * 50;
      
      const startX = Math.cos(angle) * startDistance;
      const startY = Math.sin(angle) * startDistance;
      const endX = Math.cos(angle) * endDistance;
      const endY = Math.sin(angle) * endDistance;
      
      const duration = 3 + Math.random() * 7;
      const delay = Math.random() * -10;
      
      return (
        <div
          key={i}
          className="star"
          style={{
            '--start-x': `${startX}px`,
            '--start-y': `${startY}px`,
            '--end-x': `${endX}px`,
            '--end-y': `${endY}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          } as React.CSSProperties}
        />
      );
    });
  }, []);

  return <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none">{stars}</div>;
}
