# Next js:

## Mongoose :

- **Schema**: Defines the structure of the documents (data model).
- **Model**: Represents the collection in MongoDB and allows for CRUD operations on the documents.
- **Document**: A specific instance of a model, which represents an individual record in the collection.
- **Query**: A way to retrieve, filter, update, or delete documents from the database.
  Middleware: Functions that execute during certain stages of a document's lifecycle (e.g., before saving or after validation).
- **Virtuals**: Computed properties on a document, not stored in the database.
  Population: A method for populating fields with documents from other collections.

## Basics:

1. Create a project using
   -> `npx create-next-app@latest`

2. `npm run dev` -> development mode \
   `npm run start` -> production mode

3. React Server Components

- **Server Components** :

  - All components are server by default in nextjs.
  - They have the ability to run tasks like reading files or fatching data from database.
  - However, they are unable to interact with user or use hooks

- **Client Components** : (Or React components)
  - In order to create it we have to use "add client" at the top of component.
  - They are unable to run tasks like reading files or fatching data from database.
  - However, they are able to interact with user or use hooks

4. **Routing**:

- It offers file-system based routing.
- URL patterns are defined in the file system, and Next.js automatically generates the routes for you based on the files hierarchy.

5. Routing Conventions:

- All the file must be placed inside the app directory.
- The file name should be page.tsx in order to be recognized as routing page.
- 

6.  Various Saniors:

    1. To case a no page (/)

       - The URL will be localhost:3000
       - The page.tsx should be inside app directory

    2. To case a simple page (/about, /profile)

       - The URL will be localhost:3000/about
       - The page.tsx should be inside app/about or app/profile directory

    3. To case a nested page (/blog/first, /blog/Second only)

       - The URL will be localhost:3000/blog/first
       - The page.tsx should be inside app/blog/first directory

    4. To case a dynamic page (/products/1 to /products/100) **_[Dynamic Routing]_** -> ==IMPORTANT==
       - This will help us in complex applications in which we requires 100s and 1000s of page and creating each one will be impossible
       - The URL will be localhost:3000/products/1 or localhost:3000/products/100. It will work with infine value
       - The page.tsx should be inside app/products/[productsDetails] directory. '[]' help us to make the dynamic routing possible with the defined product id.
