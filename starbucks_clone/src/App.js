import Nav from './Nav';
import styles from './index.module.css';
import Section1 from './Section1';
function App() {
  return (
    <div className={styles.whole} style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <Section1 />

    </div >
  );
}

export default App;
