import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 10px;
  width: 400px;

  padding: 20px;
  & img,
  span {
    margin-right: 10px;
  }
  & p {
    margin: 0;
  }
`;
const Status = styled.span`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 90px;
  background-color: red;

  ${props =>
    props.status &&
    css`
      background: green;
    `}
`;

const FriendListItem = ({ item }) => (
  <Item>
    <Status status={item.isOnline} />
    <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
    <p className="name">{item.name}</p>
  </Item>
);

FriendListItem.propTypes = {
  item: PropTypes.object,
};

export default FriendListItem;
