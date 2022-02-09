import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid grey;
  border-collapse: collapse;
`;
const TrResult = styled.tr`
  background-color: white;
  &:nth-of-type(odd) {
    background-color: aquamarine;
  }
`;
const Td = styled.td`
  border: 2px solid grey;
  height: 60px;
  text-align: center;
  padding-left: 20px;
`;
const Th = styled.th`
  border: 2px solid grey;
  width: 300px;
  height: 60px;
`;

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </thead>

      <tbody>
        {items.map(it => {
          return (
            <TrResult key={it.id}>
              <Td>{it.type}</Td>
              <Td>{it.amount}</Td>
              <Td>{it.currency}</Td>
            </TrResult>
          );
        })}
      </tbody>
    </Table>
  );
}
