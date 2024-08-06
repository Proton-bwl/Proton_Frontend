import styled from '@emotion/styled';

function App() {
  return (
    <>
      <Test>Montserrat</Test>
      <Pretendard>Pretendard</Pretendard>
    </>
  );
}

export default App;

const Test = styled.div`
  font-family: 'Montserrat';
`;

const Pretendard = styled.div`
  font-family: 'Pretendard Variable';
`;
