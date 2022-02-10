import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;
const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  border-top: 1px solid black;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding: 30px;
  border-left: 1px solid black;
  &:first-of-type {
    border-left: none;
  }
`;

export function Statistics({ title, stats }) {
  return (
    <Section>
      {title ? <h2>{title}</h2> : null}

      <List>
        {filterByProp(stats, 'label').map(item => {
          return (
            <Item key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}</span>
            </Item>
          );
        })}
      </List>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
