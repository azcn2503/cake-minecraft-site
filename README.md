# Cake Site

A simple site for the Cake Minecraft server, built with Next.js.

### How to build

Make sure you have the correct versions of `node` and `yarn` installed. They are specified in the [package.json](./package.json).

1. Clone the repo:

```bash
git clone git@github.com:azcn2503/cake-minecraft-site.git
```

2. Install dependencies:

```bash
yarn
```

3. Build the app:

```bash
yarn run build
```

Then either run the app...

```bash
PORT=3000 yarn run start
```

... or spin up a local development version:

```bash
yarn run dev
```

When running locally, or when deployed to the Heroku test instance, a banner will be displayed at the top of the site. This is to easily distinguish between the development and live deployments.

### Troubleshooting

If you're having issues with engine requirements being too strict (for the node and yarn versions) then you may be able to start the app using the `--ignore-engines` flag.
