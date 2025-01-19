# Practical Example of Parallel Routes with NextJS

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## About Gallery App

1. This is just a simple example of parallel routes.
2. We have created a responsive Gallery app with advance routing incl. Parallel roues and interacpect routes.
3. Here is the functionality of the gallery:
    1. There are 8+ images in the gallery.
    2. Once we click on one image, it will automatically redirect to its thumbnail and other details in the form of a model but the URL will be changed respectively.
    3. Also, when we reload the image, it will automatically redirect to its thumbnail and other details in the 
    4. After clicking, the gallery will automatically redirect to its corresponding ID in URL parameters such as `/gallery/photo1` and `/gallery/photo2` using Dynamic routes. 
    5. Using parallel routes, we make the dialog to be render and displayed in front of the main page of the gallery.
    6. Using interceptive routes, everything will get aligned.
    7. Here is the main concept of the gallery:
4. Here is the main concept of the gallery:
    - Dynamic routes for making the photos available individually with respect to the it's ID
    - Parallel routes for making the dialog available as expected
    - Interceptive routes for making everything controlable and functional.
    
