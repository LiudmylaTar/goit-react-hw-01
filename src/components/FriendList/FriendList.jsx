import FrendItem from './FriendListItem';

export default function FriendList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <FrendItem info={item} />
        </li>
      ))}
    </ul>
  );
}
