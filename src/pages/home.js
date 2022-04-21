import styles from '../styles/home.module.css';
import propTypes from 'prop-types';

const Home = ({posts})=> {
    return(
        <div className={styles.postsList}>
        {posts.map((post) => (
          <div className={styles.postWrapper} key={`post-${post._id}`}>
            <div className={styles.postHeader}>
              <div className={styles.postAvatar}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
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
                    src="https://cdn-icons-png.flaticon.com/512/456/456115.png"
                    alt="likes-icon"
                  />
                  <span>5</span>
                </div>
  
                <div className={styles.postCommentsIcon}>
                  <img
                    src="https://t4.ftcdn.net/jpg/01/09/34/83/240_F_109348365_Z8PhLswPi5USmZxOyH31cpNVspCHfoD5.jpg"
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

Home.propTypes = {
    posts: propTypes.array.isRequired,
}
export default Home;