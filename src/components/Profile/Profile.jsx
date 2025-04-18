import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.itemProfile}>
        <img className={css.avatar} src={image} alt="User avatar" width="200" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.status}>
        <li className={css.statusElement}>
          <span className={css.description}>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.statusElement}>
          <span className={css.description}>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li className={css.statusElement}>
          <span className={css.description}>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
