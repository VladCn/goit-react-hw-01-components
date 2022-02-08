import styled, { css } from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Avatar = styled.img`
  width: auto;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Stats = styled.ul`
  display: flex;
  padding: 0;
`
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 20px;
  border: 1px solid grey;
  font-size: 24px;
  text-transform: none;
  width: 90px;
  height: 90px;
`


export function Profile({ username, tag, location, avatar, stats }){
  return (
    <ProfileWrapper>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats>
        <Item>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </Item>
      </Stats>
    </ProfileWrapper>
  )
}
