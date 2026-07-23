import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: '首页' },
    { to: '/subjects', label: '学科目录' },
    { to: '/wrong-questions', label: '错题本' },
    { to: '/stats', label: '练习记录' },
    { to: '/settings', label: '数据管理' },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>📚</span>
          <span style={styles.logoText}>知识练习库</span>
        </Link>
        <div className="nav-links" style={styles.links}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                ...styles.link,
                color: location.pathname === link.to ? '#3B82F6' : '#64748B',
                fontWeight: location.pathname === link.to ? 600 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div style={styles.right}>
          {user ? (
            <>
              <span style={styles.userName}>👤 {user.displayName}</span>
              <button onClick={() => { logout(); navigate('/login'); }} style={styles.btn}>退出</button>
            </>
          ) : (
            <Link to="/login" style={styles.loginBtn}>登录</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: { background: '#fff', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 100 },
  container: { maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  logo: { display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#1E293B' },
  logoText: { fontSize: '1.125rem', fontWeight: 700 },
  links: { display: 'flex', gap: 24 },
  link: { textDecoration: 'none', fontSize: '0.9375rem', transition: 'color 0.2s' },
  right: { display: 'flex', alignItems: 'center', gap: 12 },
  userName: { fontSize: '0.875rem', color: '#64748B' },
  btn: { padding: '6px 16px', borderRadius: 8, border: '1px solid #E2E8F0', background: '#fff', color: '#64748B', cursor: 'pointer', fontSize: '0.875rem' },
  loginBtn: { padding: '6px 16px', borderRadius: 8, background: '#3B82F6', color: '#fff', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 },
};