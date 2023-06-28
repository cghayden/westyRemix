WestyRemix is a simple ecommerce site with blog, built using Remix for the front end and server, Stripe for payments, Tailwind CSS for styling, and a customized Sanity headless CMS for content and data store for orders.

This site is a rebuild of a similar site built with Gatsby, Netlify serverless functions, and Styled Components, and which uses the same Sanity project, and is used in production for a friend of mine who was in need of a simple, free way to sell his micro-roasted coffee beans.

I used this rebuild to learn Remix, practice using Typescript, and to get familiar with Tailwind.

My end goal for this site is to have a simple, all-purpose ecommerce and blog framework that anyone can populate and customize by configuring it to their own instance of the accompanying Sanity Studio template.

This repository can be used with the accompanying Sanity Studio to quickly have a simple ecommerce site up and ready to

My goal is to have a script that can deploy an instance of this site for anyone who has a stripe and sanity account, and and place to deploy to.

> **Warning**  
> The `@remix-run/vercel` runtime adapter has been deprecated in favor of out of
> the box Vercel functionality and will be removed in Remix v2.  
> This means you don't have to use the Vercel template & can just use the Remix
> template instead.

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
