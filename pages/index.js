import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Comments from "../components/Comments";
import Loader from "../components/Loader";

const baseAPI = "http://localhost:3000/api/comments?video=";

export default function Home() {
  const [comments, setComments] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if(videoId) {
        const data = await fetch(baseAPI + videoId).then((response) =>
          response.json()
        );

        setLoading(false);
        setComments(data);
      }
    }

    fetchData();
  }, [videoId]);

  function handleChange(ev) {
    const value = ev.currentTarget.value;
    if (value.length === 11) {
      setLoading(true);
      setVideoId(value);
    }
  }

  const showComponent = loading === true ? { display: "none" } : { display: "initial" };

  return (
    <>
    <Loader loading={loading}></Loader>
    <div className={styles.container} style={ showComponent }>
      <main className={styles.main}>
        <h1 className={styles.title}>Fetch comments without responses</h1>
        <p style={{fontSize: '1rem', color: "gray"}}>
          Place video id below <em>https://www.youtube.com/watch?v=</em><strong>pbO3nnqyxlE</strong>
        </p>
        <p className={styles.description}>
          <input onChange={(ev) => handleChange(ev)} placeholder="videoId" disabled={loading}/>
        </p>

        {comments && comments.map((comment) => (
            <Comments
              key={comment.id}
              comment={comment}
              videoId={videoId}
            ></Comments>
          ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    </>
  );
}