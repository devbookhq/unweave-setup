# Devbook setup for Unweave

- [Devbook SDK](https://github.com/devbookhq/sdk)
- [Devbook UI](https://github.com/devbookhq/ui)
- [Devbook CLI](https://github.com/devbookhq/devbookctl)

**TL;DR:**
- The [./example](./example) directory contains a ready-to-copy React project with a full Unweave usecase.
- The [./unweave-vm](./unweave-vm) directory contains configs for VMs your users will get when they visit your website.

### How Devbook works
Devbook spins up a separate VM for every visitor of your website. You control the VM from your frontend.
You set up your VM via a `Dockerfile.dbk` file and `dbk.toml` file beforehand. Use [Devbook CLI](https://github.com/devbookhq/devbookctl).


### Setup
#### 1. Set up the `unweave` VM

Already prepared. All files and explanation is in the [./unweave-vm](./unweave-vm) directory.

#### 2. Add Devbook to your website
```sh
npm i @devbookhq/sdk @devbookhq/ui
```

Install [Devbook SDK](https://github.com/devbookhq/sdk). It's a React hook that controls the VM.

We recommend using [Devbook UI](https://github.com/devbookhq/ui). The ready-to-use UI components like:
- [Code editor](https://github.com/devbookhq/ui#editor)
- [Filesystem explorer](https://github.com/devbookhq/ui#filesystem)
- [Terminal](https://github.com/devbookhq/ui#terminal)

#### 3. Usage
Check out the [example](./example) directory with full React app for Unweave usecase.

Sample code snippet
```tsx
// Import the hook
import {
  useDevbook,
  DevbookStatus,
} from '@devbookhq/sdk'

// Import terminal from our UI library
import { Terminal } from '@devbookhq/ui'

function DevbookTerminal() {
  const devbook = useDevbook({ env: 'unweave', config: { domain: 'shared.usedevbook.com' } })

  return (
    <Terminal
      devbook={devbook}
      lightTheme={false}
      height="200px"
    />
  )
}
```
