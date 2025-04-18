import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FrendItem({ info: { avatar, name, isOnline } }) {
  return (
    <div className={css.item}>
      <img className={css.image} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
