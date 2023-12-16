import { MantineProvider } from '@mantine/core';
import CommonRouter from './router/CommonRouter';
import { Reset } from 'styled-reset';

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <Reset />
        <CommonRouter />
      </MantineProvider>
    </div>
  );
}

export default App;
