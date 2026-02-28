import styles from "./bookcard.module.css";
import bookCover from "../assets/images/book_cover.png";
import { Badge } from "./Badge";

const BookCard = ({ title, progress }: { title: string; progress: string }) => {
  return (
    <div className={styles.card}>
      <div className={styles["cover-container"]}>
        <img src={bookCover}></img>
        <Badge>
          <p>{progress}</p>
        </Badge>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export { BookCard };
