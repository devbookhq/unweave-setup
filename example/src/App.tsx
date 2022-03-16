import './App.css';

import { useDevbook } from '@devbookhq/sdk';
import {
  Terminal,
  Filesystem,
} from '@devbookhq/ui';

const devbookOptions = {
  env: 'unweave',
  config: {
    domain: 'shared.usedevbook.com',
  },
}

function App() {
  const devbook = useDevbook(devbookOptions)

  return (
    <div className="App">
      <Terminal
        title="Unweave CLI"
        devbook={devbook}
        height="250px"
      />
      <Filesystem
        devbook={devbook}
      />
    </div>
  );
}

export default App;
