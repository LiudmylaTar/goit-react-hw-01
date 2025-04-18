import FrendItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <FrendItem info={item} />
        </li>
      ))}
    </ul>
  );
}
