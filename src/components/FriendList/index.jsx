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

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(item => {
        return (
          <Item key={item.id}>
            <Status status={item.isOnline} />
            <img
              className="avatar"
              src={item.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{item.name}</p>
          </Item>
        );
      })}
    </ul>
  );
}
