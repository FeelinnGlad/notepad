import Header from '../components/Header';
import styles from './pages.module.css';

function ErrorPage() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <h3>Error occured!</h3>
        <p>Could not find this page.</p>
      </main>
    </>
  );
}

export default ErrorPage;
