import LoginForm from '../components/LoginForm'
import LoginMUI from '../components/LoginMUI';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Homepage() {
  // Save in pages/Homepage.jsx
  return (
    <div className="Homepage">
      <h1>Home</h1>

      <ThemeSwitcher />

      <LoginMUI />

    </div>
  );
}