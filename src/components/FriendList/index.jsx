import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(item => {
        return <FriendListItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
