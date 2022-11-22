import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Diego fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste quia eligendi fugiat minima corrupti! Dignissimos molestias eius error laudantium suscipit tempora necessitatibus unde, mollitia nam, adipisci delectus enim accusantium."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
