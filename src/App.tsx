import globalStyles from './common/styles/globalStyles';
import { Global, ThemeProvider } from '@emotion/react';
import { theme } from './common/styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './common/Router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
