Source : [Youtube](https://www.youtube.com/watch?v=7xVWvL-37EE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=23&ab_channel=Codevolution "Visit Youtube")

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

6. Various Saniors with routing functions:

   1. To case a no page (/)

      - The URL will be localhost:3000
      - The page.tsx should be inside app directory

   2. To case a simple page (/about, /profile)

      - The URL will be `localhost:3000/about`
      - The page.tsx should be inside `app/about` or `app/profile` directory

   3. To case a nested page (/blog/first, /blog/Second only)

      - The URL will be `localhost:3000/blog/first`
      - The page.tsx should be inside `app/blog/first` directory

   4. To case a dynamic page (/products/1 to /products/100) -> <mark>**_[Dynamic Routing]_**</mark>

      - This will help us in complex applications in which we requires 100s and 1000s of page and creating each one will be impossible
      - The URL will be `localhost:3000/products/1` or `localhost:3000/products/100`. It will work with infine value
      - The page.tsx should be inside `app/products/[productsDetailsById]` directory. '[]' help us to make the dynamic routing possible with the defined product id.
      - In order to extract the parameters from the website/URL, we need to add params in the export function and use it with the ID name. Such as :
        ```typescript
        export default function products({ params }) {
          return params.productsDetailsById;
        }
        ```

   5. To case a nested dynamic pages (/products/1/review/1 to products/100/review/100)

      - This is the same thing as dynamic pages but with nested parameters.
      - The URL will be `localhost:3000/products/1/reviews/1` to `localhost:3000/products/100/reviews/100`
      - The page.tsx should be inside `app/products/[productsDetailsById]/reviews/[reviewById]` directory.
      - In order to extract the parameters from the website/URL, we need to add params in the export function and use it with the ID name. Such as for `products/1/reviews/1`:

        ```typescript
        export default function products({ params }) {
          return (
            <>
              <p>
                Review ID: {params.reviewById}
                <br />
                Product ID: {params.productsDetailsById}
              </p>
            </>
          );
        }
        ```

   6. To case a multiple nested dynamic page (/docs/feature1, /docs/feature100/concept1/...(It could anything depending upon the requirements)) -> <mark>**_[Catch-all-segments]_**</mark>

      - In this case, we have multiple dynamics pages. Problem is : this could a lot of different dynamic folders.
      - The URLs will be like:
        1. `localhost:3000/docs/feature1`
        2. `localhost:3000/docs/feature100/concept1/...`
        3. `localhost:3000/docs/feature100/concept100/example1/...`
        4. `localhost:3000/docs/feature100/concept100/example100/laptop1/...`
      - The page.tsx should be inside a new folder **_slug_** with a spread. Therefore, dir will be like `/app/docs/[...slug]`.
      - This way we can add multiple nested dynamic pages within one dynamic folder and a dashboard on the hand.
      - In order to extract the parameters from the website/URL, we need to add params in the export function and use it with a arrary of string that is `slug`.

        1. Below is example of `/docs/feature1/Concept1` :

           ```typescript
           export default function docs({
             params,
           }: {
             params: { slug: string[] };
           }) {
             return (
               <>
                 <p>
                   Feature ID: {params.slug[0]}
                   Concept ID: {params.slug[1]}
                 </p>
               </>
             );
           }
           ```

        2. Below is example of `/docs/feature1/Concept1/example1` :

           ```javascript
           export default function docs({ params }) {
              return (
              <>
                 <p>
                    Feature ID: params.slug[0] // For feature1
                    <BR>
                    Concept ID: params.slug[1] // For concept1
                    <BR>
                    Example ID: params.slug[2] // For example1
                 </p>
              </>
              );
           }
           ```

      - Basically, The `slug` is an array of string that contains all the parameters from the URL.

   7. To customize Not Found (/anything): <mark>**_[notFound() -> Function]_**</mark>

      - The URL will be localhost:3000/anything
      - The page.tsx should be inside app directory with the name `not-found.tsx`
      - We can define a 404 feature to the params level as well. Such as, if there is only 30 products and 31 should get 404 error page.
      - In order to achieve the above scenario, we simply have to create a if-else statement with the condition `params.productById > 30` then implement a bulidin function `notFound();`. For example:

        ```javascript
        import { notFound } from "next/navigation";

        export default function reviews({ params }: any) {
          if (params.reviewById > 30) {
            notFound();
          }

          return (
            <>
              <p> Review ID: {params.reviewById} </p>
              <p>Product ID: {params.productsDetailsById}</p>
            </>
          );
        }
        ```

      - The above code will automatically goes to 404 error page if the params is more than 30. Such as `/products/31`.
      - If we need to customize the 404 page for the product page, then we have to create a `not-found.tsx` inside the `app/products` directory otherwise it will take custom 404 error page defined in `app` directory. demonstrating:

        ```javascript
        export default function notFound() {
          return <div>hya unble to find the requested item</div>;
        }
        ```

7. Routing Conventions: [CONTI.]

- In order to create a private folder inside the app directory and should be ignored by the routing, we can simply add `_` before the folder name. Such as `_lib`
- In order to create a routing group, we simply add the folder name inside. `()` . Such as `(auth)` and that will convert the path from `auth/register` -> `/register`

8. **_Linking_**:

- We have to use `Link` component which should be imported from `next/link` in order to link one component to another which enables client side navigation to the different pages. Demo:

  ```javascript
  import Link from "next/link";

  export default function homePage() {
    return (
      <>
        <Link href="/about"> About</Link>
        <Link href="/blog"> Blog</Link>
      </>
    );
  }
  ```

- **_Replace_**: Replace keyword/prop used to naviage the website to the homepage with the url `(/)` _whithout any redirecting_

- **_Dyanmic Links:_** Creating a link dynamically wrt the data coming from APIs. Demonstration:

  ```javascript
  import Link from "next/link";

  // To be continue
  ```

- <mark>**_usePathname function_:**</mark> It is the function used to determine the current pathname of the url. Example: For `/blog`, the value of pathname function will be `/blog`. Syntax:

  ```javascript
  "use client";
  import { usePathname } from "next/navigation";

  const path = usePathname();
  ```

  **Note:** UsePathname function is only available in client components.

- <mark>**_useRouter function_:**</mark> It is the function used to navigate the rotuer from one page to another and many more. Syntax:

  ```javascript
  "use client";
  import { useRouter } from "next/navigation";

  const router = useRouter();
  router.push("/");
  ```

  **Note:** UsePathname function is only available in client components.

8. **Layout**:

- It is auto generated file in nextjs that help us to set a parmanent section within the website such as header, footer, etc.
- The filename is `/app/layout.tsx` -> The is root layout of the website.
- We can customize the same as per our requirement.
- We can also import both of them as react component.
- Here is a code for the same:

  ```javascript
  // This is the default one
  export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
  }

  // Adding Header and Footer
  export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
         </body>
      </html>
   );
  }
  ```

  - _Children_ : This is where the child components rendered that we have defined in the `page.tsx` file with in the components.
  - We can add whatever we want inside the body tag.

- **_Nested Layouts:_** We can create a layout for a specific component/pages as well. As above mentioned, the `Children` will be replaced by all data coming from the `page.tsx` file. We can add other tags as per our requirements.

- **_Route Group Layout:_** We can create a route group layout for a specific `component/pages`. Just simply create a route group folder and add the components there with a `layout.tsx` file and same as above, `(children)` will be replaced by the contents from components. Such as:

  ```javascript
  // pwd will be app/(auth)/(authCustomLayout)/layout.tsx
  export default function authCustomLayout({ children }) {
    return (
          <header>
          Custom Header for auth route group components
          </header>
          {children}
    )
  }
  ```

- We can also add multiple links in the `layout.tsx` file using `map` function. Such as:

  ```javascript
  //

  import Link from "next/link";

  const navLinks = [
    { name: "link1", href: "/link1" },
    { name: "link2", href: "/link2" },
    { name: "link3", href: "/link3" },
  ];

  export default function authCustomLayout({ children }: any) {
    return (
      <div>
        {" "}
        {navLinks.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}
        {children}
      </div>
    );
  }
  ```

- Layouts only render the unshared components i.e. `(children) and other shared components will remain as it they are not going to be rendered. It will keep all the common elements untouched and only load the newly loaded components.

- <mark>**_Templpates_**</mark>

  - Since, Layouts only render the unshared components and not the shared components or common elements, here `Templates` will come into play. It will render all the components and elements weather it is shared components or common elements.
  - Similar to layouts, templates also require a `(children)` props to render the newly adde components.
  - When a user navigats between routes that shared templates, a new instance of templates will be mounted, all new DOM elements will be created and states are not getting preserved.
  - Templates is defined as a export react default component from the file with the name of `template.tsx or template.js`

- We can use both `template.tsx` and `layout.tsx` together but keep in mind that `Layout.tsx` will render first.

8. **_Loading_**:

- It is a file where we can add loading animations to make the user understand the loading is happening and the requested content will be loaded soon
- We need a exported default `Loading()` function in `Loading.tsx`.
- The file should placed with the `page.tsx` file. So that it will wrap the content of the `loading.tsx` at the top of `page.tsx`.  

9. **_MetaData_** : [title, description]

- Nextjs allows a metadata API to configure the metadata object in order to ensuring the visibility of the data in SEOs
- We can add the metadata in the `page.tsx` file with the following code:

  ```javascript
  //Here, metadata is a object

  export const metadata = {
    title: "Custom title", // this will give a custom title
  };
  ```

- It can be done on root level or different components level using the above code.
- It ensures the accuracy and relvent information transfer to the SEOs and ultimatly to the users.
- Configure the metadata:

  - Both the `Layout.tsx` and `page.tsx` file can have the metadata API configured. If the metadata is configured in the `Layout.tsx` file, it will be available for all the components. If it is configured in the `page.tsx` file, it will be only avaible for the specfic pages.
  - The metadata API is read in order from final level >>> root level. Such as metadata defined in `layout.tsx` in root will be taken over by the metadata defined in a specific components level.

- **_Dynamic MetaData_** : We can also use dynamic metadata in our components by simply importing the `Metadata` function from the `next` lib and defining it to a function with name `generateMetadata`. Demo:

  ```javascript
  import { Metadata } from "next";

  // Here generateMetadata is a arrow function.

  export const generateMetadata = ({ params }: any): Metadata => {
    return {
      title: `Custom title for ${params.productId}`,
    };
  };
  ```

- We can also configure dynamic metadata as a async-promise query by simply making the `generateMetadata` function as async and requested title as a await for the value from the API call. Demo:

  ```javascript
  import { Metadata } from "next";

  // Here generateMetadata is a arrow function.

  export const generateMetadata = async ({
    params,
  }: any): Promise<Metadata> => {
    // Promise function

    const title = await new Promise((resolve, reject) => {
      resolve(`customMetadata ${params.paramId}`);
    });

    return {
      title: `Product ${title}`,
    };
  };
  ```

9.
