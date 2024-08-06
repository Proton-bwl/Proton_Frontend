import styled from '@emotion/styled';
import globalStyles from './common/styles/globalStyles';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './common/styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Test>Montserrat</Test>
        <Pretendard>Pretendard</Pretendard>
      </ThemeProvider>
    </>
  );
}

export default App;

const Test = styled.div`
  ${({ theme }) => theme.fonts.testTitle};
`;

const Pretendard = styled.div`
  font-family: 'Pretendard Variable';
  color: ${({ theme }) => theme.colors.testColor};
`;
