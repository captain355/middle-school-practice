import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SubjectListPage from './pages/SubjectListPage';
import SubjectDetailPage from './pages/SubjectDetailPage';
import PracticePage from './pages/PracticePage';
import StatsPage from './pages/StatsPage';
import WrongQuestionsPage from './pages/WrongQuestionsPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function App() {
  const location = useLocation();
  const hideNav = location.pathname === '/login';

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
      {!hideNav && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/subjects" element={<SubjectListPage />} />
          <Route path="/subject/:subjectId" element={<SubjectDetailPage />} />
          <Route path="/practice/:subjectId/:textbookId" element={<PracticePage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/wrong-questions" element={<WrongQuestionsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
      <footer style={{ textAlign: 'center', padding: '24px', color: '#94A3B8', fontSize: '0.8125rem', borderTop: '1px solid #E2E8F0', marginTop: 40 }}>
        © 2026 初中知识体系专项练习库
      </footer>
    </div>
  );
}

export default App;
