import styles from './BookItem.module.css'

const BookItem = (props) => {
  return (
    // <div>
    //   <img src={props.image} alt={props.title} />
    //   <h3>{props.title}</h3>
    // </div>
    <div className={styles.book}>
      {/* book cover */}
      <div
        style={{backgroundImage: `url(${props.image})`}}
        className={styles.bookCover}
      >
        {/* effect */}
        <div className={styles.effect}></div>
        {/* light */}
        <div className={styles.light}></div>
      </div>
      {/* book inside */}
      <div className={styles.bookInside}></div>
    </div>
  );
}


export default BookItem;
