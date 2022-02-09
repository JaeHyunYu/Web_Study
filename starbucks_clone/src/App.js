import Nav from './Nav';
import styles from './index.module.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Notice_sec from './Notice_sec';
function App() {
  return (
    <div className={styles.whole} style={{ display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <Section1 />
      <Notice_sec />
      <Section2 />

    </div >
  );
}

export default App;
