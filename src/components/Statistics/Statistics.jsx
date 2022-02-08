import styled from 'styled-components'

function filterByProp(arr, prop) {
  const reversed = [...arr].reverse();
  const seen = {};

  return reversed.filter(item => {
    if (seen[item[prop]]) {
      return false;

    } else {
      seen[item[prop]] = true;
      return true;
    }
  });
}


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`
const List = styled.ul`
display: flex;
  padding: 0;
  margin: 0;
`
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 30px;
  border: 1px solid black;
`


export function Statistics({ title = 'Upload stats', stats }){

  //const filterItem = filterByProp(stats, "label");

return (
  <Section>
    <h2>{title}</h2>

  <List>
    {filterByProp(stats, "label").map(item => {
      return (
        <Item key={item.id} >
          <span>{item.label}</span>
          <span>{item.percentage}</span>
        </Item>
      )
    })}

  </List>
</Section>
)
}
