# Unweave VM

👉 **We already set up and deployed everything for you. No need to do anything on your side.**

This is just an explanation of what we did.

---

Devbook allows you to predefine how your users VMs will look like. We use Docker containers to achieve that.

You need to create 2 files:
- [`Dockerfile.dbk`](./Dockerfile.dbk)
- [`dbk.toml`](./dbk.toml)

#### Dockerfile.dbk
This is a Dockerfile through which you customize the VM beforehand. You can do anything: install binaries, copy files, etc.
We basically create a container based on this file and run it every time a user visits Devbook-powered page.

We advise to keep the size low.

#### dbk.toml
Specify the ID for your VMs.
```toml
id = "unweave"
```

This `id` is used when initializing [Devbook SDK](https://github.com/devbookhq/sdk) on your frontend.
```tsx
const devbook = useDevbook({
  env: 'unweave', // <--- This is ID that you specified in the dbk.toml file
  config: {
    domain: 'shared.usedevbook.com',
  },
})
```

### Publishing your VM
Before your users can connect to their VMs, you have to deploy it. This is done via [Devbook CLI](https://github.com/devbookhq/devbookctl).

#### 1. Install Devbook CLI
```sh
curl -L https://usedevbook.com/install.sh | sh
```

#### 2. Go to a directory with `Devbook.dbk` and `dbk.toml` files
```sh
cd unweave-vm
```

#### 3. Deploy your VM setup with Devbook CLI
Make sure Docker is running.

```sh
dbk push
```
