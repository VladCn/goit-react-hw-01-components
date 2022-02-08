import styled from 'styled-components'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  margin-bottom: 50px;
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
  margin: 0;
  width: 100%;
  border-top: 1px solid grey;
`
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 40px;
  font-size: 24px;
  text-transform: none;
  width: calc(100%/3);

  &:first-child{
    border-right: 1px solid grey;
  }
  &:last-child{
    border-left: 1px solid grey;
  }
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
