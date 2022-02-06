import Nav from './Nav';
import styles from './index.module.css';
function App() {
  return (
    <div className={styles.whole} style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.nav}>
        <Nav />
      </div>

    </div >
  );
}

export default App;
