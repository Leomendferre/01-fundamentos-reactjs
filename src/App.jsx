import styles from './App.module.css'; 

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       
       <Sidebar />
        
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam a alias adipisci, tenetur delectus eligendi quidem officiis vero fugiat dolores libero voluptatem fugit inventore hic voluptas et architecto. Dicta.
        </main>
        
      </div>
    </div>
  );
}
 