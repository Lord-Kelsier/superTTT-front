import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
}

export default App;
