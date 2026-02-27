import styles from "./bookcard.module.css";
import bookCover from "../assets/images/book_cover.png";

const BookCard = ({ title }: { title: string }) => {
  return (
    <div className={styles.card}>
      <img src={bookCover}></img>
      <p>{title}</p>
    </div>
  );
};

export { BookCard };
