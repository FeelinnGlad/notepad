import styles from './Header.module.css';
import TaskLabel from '../TaskLabel';
import CounterBadge from '../CounterBadge';

const Header = () => (
  <div className={styles.header}>
    <TaskLabel />
    <h3>Header</h3>
    <CounterBadge />
  </div>
);

export default Header;
