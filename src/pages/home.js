import styles from '../styles/home.module.css';

const Home = ({posts})=> {
    return(
        <div className={styles.postsList}>
        {posts.map((post) => (
          <div className={styles.postWrapper} key={`post-${post._id}`}>
            <div className={styles.postHeader}>
              <div className={styles.postAvatar}>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1650268607~hmac=eab2cb0ecf254c1bf716060490f199c2"
                  alt="user-pic"
                />
                <div>
                  <span className={styles.postAuthor}>{post.user.name}</span>
                  <span className={styles.postTime}>a minute ago</span>
                </div>
              </div>
              <div className={styles.postContent}>{post.conent}</div>
  
              <div className={styles.postActions}>
                <div className={styles.postLike}>
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/3670/premium/3670153.png?token=exp=1650268715~hmac=0935f1e45c14640cf231471ca806b823"
                    alt="likes-icon"
                  />
                  <span>5</span>
                </div>
  
                <div className={styles.postCommentsIcon}>
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2190/premium/2190654.png?token=exp=1650268783~hmac=14d7cec4240734b3f5810851be193196"
                    alt="comments-icon"
                  />
                  <span>2</span>
                </div>
              </div>
              <div className={styles.postCommentBox}>
                <input placeholder="Start typing a comment" />
              </div>
  
              <div className={styles.postCommentsList}>
                <div className={styles.postCommentsItem}>
                  <div className={styles.postCommentHeader}>
                    <span className={styles.postCommentAuthor}>Bill</span>
                    <span className={styles.postCommentTime}>a minute ago</span>
                    <span className={styles.postCommentLikes}>22</span>
                  </div>
  
                  <div className={styles.postCommentContent}>Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Home;