# Taxonomy

An open source application built using the new router, server components and everything new in Next.js 14.

> **Warning**
> This app is a work in progress. 

## About this project

This project as an experiment to see how a modern app (with features like authentication, subscriptions, API routes, static pages for docs ...etc) would work in Next.js 14 and server components.

**This is not a starter template.**

A few people have asked me to turn this into a starter. I think we could do that once the new features are out of beta, whcih wwill be soon.

## Note on Performance

> **Warning**
> This app is using the unstable releases for Next.js 13 and React 18. The new router and app dir is still in beta and not production-ready.
> **Expect some performance hits when testing the dashboard**.
> If you see something broken, you can ping me @brrock

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **NextAuth.js**
- ORM using **Prisma**
- Database on **PlanetScale**
- UI Components built using **Shadcn UI**
- Documentation and blog using **MDX** and **Velite **
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Roadmap

- [x] ~Add MDX support for basic pages~
- [x] ~Build marketing pages~
- [x] ~Subscriptions using Stripe~
- [x] ~Responsive styles~
- [x] ~Add OG image for blog using @vercel/og~
- [x] Dark mode
- [] Create other tempates 
- [] make a cli like create next app to downlaod the templates
## Known Issues

A list of things not working right now:
- Subsrcitions - i have hsd the time to do stripe just yet

 ## Other template ideas
 - Turbo
 - clerk auth
 - vanilla (the current)
## Postmark setup
See postmark setup section the .envs file

## Why not tRPC, Turborepo or X?

There will be a trubo example soon too

If you have some suggestions, feel free to create an issue.

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables see the env.md  file.

```sh
cp .env.example .env
```
5. Do the insurctions in [[env.md]]
4. Start the development server:

```sh
pnpm dev
```

## License

Licensed under the [MIT license]
