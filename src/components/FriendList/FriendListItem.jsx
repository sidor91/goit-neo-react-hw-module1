import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClassName = isOnline ? styles.online : styles.offline;

  return <div className={styles.item}>
    <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
    <p className={styles.name}>{name}</p>
    <p className={`${styles.status} ${statusClassName}`}>{isOnline ? `Online` : `Offline`}</p>
  </div>

}