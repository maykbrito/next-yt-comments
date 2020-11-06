import styles from "../styles/Comments.module.css";

export default function Comments({ comment, videoId }) {
  const { id, author, text, time, likes, authorThumb, authorLink } = comment;
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <img src={authorThumb} alt="comment-avatar" />
      </div>
      <div className={styles.info}>
        <h3 href={"http://youtube.com/user" + authorLink}>
          {author}
          <span>{time}</span>
        </h3>
        <div dangerouslySetInnerHTML={{__html: `<p>${text}<p>`}} />
        <div>
          <a className={styles.thumbUpBtn}>
            
<svg height="512" viewBox="0 0 16 16" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m0 1v8c0 .552246.447693 1 1 1h3v-10h-3c-.552307 0-1 .447693-1 1z" transform="translate(0 5)"/><path d="m9.15332 5.02979h-2.9541c-.258301 0-.387695-.172363-.431152-.246582-.043457-.0737305-.131348-.270508-.0063477-.496094l1.0415-1.87549c.228516-.410645.251953-.893555.0649414-1.32471-.187012-.43164-.556152-.744629-1.0127-.858398l-.734375-.183594c-.178711-.0449219-.368164.0122071-.492676.150391l-3.9873 4.42969c-.413574.460449-.641113 1.0542-.641113 1.67236v5.23242c0 1.37842 1.12158 2.5 2.5 2.5l4.97412-.0004883c1.12305 0 2.11475-.756348 2.41113-1.83887l1.06738-4.89844c.03125-.13623.0473633-.275879.0473633-.415527 0-1.01807-.828613-1.84668-1.84668-1.84668z" transform="translate(5 .97)"/></svg>
            <span className={styles.thumbsCount}>{likes}</span>
          </a>
          {/* <a className={styles.thumbUpBtn}>
            <i className={styles.materialIcons}>thumb_down</i>
            <span className={styles.thumbsCount}></span>
          </a> */}
          <a
            href={`https://www.youtube.com/watch?v=${videoId}&google_comment_id=${id}`}
            target="_blank"
          >
            REPLY
          </a>
        </div>
      </div>
    </div>
  );
}
