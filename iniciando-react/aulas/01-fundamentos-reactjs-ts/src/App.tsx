import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/87150446?v=4",
      name: "Miguel Moreira",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: " Fala Dev 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "👉  jane.design/doctorcare</a>" },
    ],
    publishedAt: new Date("2022-11-11 18:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/60992454?v=4",
      name: "Angelo Marcio",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: " Fala Dev 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: '👉 <a href="#"> jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date("2022-11-27 18:00:00"),
  },
];
function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts => {
            return (
              <Post
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
