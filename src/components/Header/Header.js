import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import TaskLabel from '../TaskLabel';
import CounterBadge from '../CounterBadge';

function Header() {
  console.log('>> HEADER');

  return (
    <div className={styles.header}>
      <TaskLabel />
      <ul className={styles.list}>
        <h3><li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)} end>Home</NavLink></li></h3>
        <h3><li><NavLink to="/auth" className={({ isActive }) => (isActive ? styles.active : undefined)}>Log in</NavLink></li></h3>
      </ul>
      <CounterBadge />
    </div>
  );
}

export default Header;
