import styles from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileContainer}>

      <div className={styles.infoSection}>
        <img
          src={image}
          alt="User avatar"
          className={styles.avatar}
        />

        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.statsList}>

        <li className={styles.statsItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li className={styles.statsItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li className={styles.statsItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}