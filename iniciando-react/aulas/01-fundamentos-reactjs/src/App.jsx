import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <Post
        author="Diego fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste quia eligendi fugiat minima corrupti! Dignissimos molestias eius error laudantium suscipit tempora necessitatibus unde, mollitia nam, adipisci delectus enim accusantium."
      />
    </div>
  );
}

export default App;
