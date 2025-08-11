import { useState } from 'react'
import Login from './components/Login'
import CourseSelect from './components/CourseSelect'
import ChapterSelect from './components/ChapterSelect'
import Quiz from './components/Quiz'
import { CATALOG } from './data/catalog'

export default function App() {
  const [user, setUser] = useState(null);
  const [availableCourses, setAvailableCourses] = useState([CATALOG.MSE335]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const addCourse = (code) => {
    const course = CATALOG[code];
    if (!course) return;
    setAvailableCourses((prev) => prev.some((c)=>c.id===course.id) ? prev : [...prev, course]);
  };

  if (!user) return <Login onLogin={setUser} />;
  if (!selectedCourse) return (
    <CourseSelect
      courses={availableCourses}
      onSelect={setSelectedCourse}
      onAddCourse={addCourse}
      user={user}
      onLogout={() => { setUser(null); setSelectedCourse(null); setSelectedChapter(null); }}
    />
  );
  if (!selectedChapter) return (
    <ChapterSelect
      course={selectedCourse}
      onBack={() => setSelectedCourse(null)}
      onPick={setSelectedChapter}
      user={user}
      onLogout={() => { setUser(null); setSelectedCourse(null); setSelectedChapter(null); }}
    />
  );
  return (
    <Quiz
      course={selectedCourse}
      chapter={selectedChapter}
      onExit={() => setSelectedChapter(null)}
      user={user}
      onLogout={() => { setUser(null); setSelectedCourse(null); setSelectedChapter(null); }}
    />
  );
}
