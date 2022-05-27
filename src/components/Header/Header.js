import styles from './Header.module.css';
import TaskLabel from '../TaskLabel';

const Header = () => (
  <div className={styles.header}>
    <TaskLabel />
    <h3>Header</h3>
  </div>
);

export default Header;
