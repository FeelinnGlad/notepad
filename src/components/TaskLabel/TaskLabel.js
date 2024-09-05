import styles from './TaskLabel.module.css';

function TaskLabel() {
  console.log('>> TaskLabel');

  return (
    <div className={styles.taskLabel}>
      <h3>Task [T07.01]</h3>
    </div>
  );
}

export default TaskLabel;
