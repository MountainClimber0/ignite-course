import { Avatar } from "./Avatar.jsx";
import { Comment } from "./Comment.jsx";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            
            src="https://avatars.githubusercontent.com/u/87150446?v=4"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Miguel Moreira</strong>
            <span>Web Dev</span>
          </div>
        </div>

        <time title="11 de maio de 2022" dateTime="2022-05-11 05:05">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Bebi 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto </a>
          {""}
          <a href="#"> #nlw</a>
          {""}
          <a href="#"> #rocketseat</a> {""}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
