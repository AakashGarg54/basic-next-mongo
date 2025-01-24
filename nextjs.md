Source : [Youtube](https://www.youtube.com/watch?v=7xVWvL-37EE&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=23&ab_channel=Codevolution "Visit Youtube")

CSS used : [Tailwind.CSS](https://tailwindui.com/components/application-ui/overlays/modal-dialogs)

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
   &rarr; `npx create-next-app@latest`

2. `npm run dev` &rarr; development mode \
   `npm run start` &rarr; production mode

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

## Various Saniors with routing functions:

1.  To case a no page (/)

    - The URL will be localhost:3000
    - The page.tsx should be inside app directory

2.  To case a simple page (/about, /profile)

    - The URL will be `localhost:3000/about`
    - The page.tsx should be inside `app/about` or `app/profile` directory

3.  To case a nested page (/blog/first, /blog/Second only)

    - The URL will be `localhost:3000/blog/first`
    - The page.tsx should be inside `app/blog/first` directory

4.  To case a dynamic page (/products/1 to /products/100) &rarr; <mark>**_[Dynamic Routing]_**</mark>

    - This will help us in complex applications in which we requires 100s and 1000s of page and creating each one will be impossible
    - The URL will be `localhost:3000/products/1` or `localhost:3000/products/100`. It will work with infine value
    - The page.tsx should be inside `app/products/[productsDetailsById]` directory. '[]' help us to make the dynamic routing possible with the defined product id.
    - In order to extract the parameters from the website/URL, we need to add params in the export function and use it with the ID name. Such as :
      ```typescript
      export default function products({ params }) {
        return params.productsDetailsById;
      }
      ```

5.  To case a nested dynamic pages (/products/1/review/1 to products/100/review/100)

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

6.  To case a multiple nested dynamic page (/docs/feature1, /docs/feature100/concept1/...(It could anything depending upon the requirements)) &rarr; <mark>**_[Catch-all-segments]_**</mark>

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
                 <br />
                 Concept ID: params.slug[1] // For concept1
                 <br />
                 Example ID: params.slug[2] // For example1
               </p>
             </>
           );
         }
         ```

    - Basically, The `slug` is an array of string that contains all the parameters from the URL.

7.  To customize Not Found (/anything): <mark>**_[notFound() &rarr; Function]_**</mark>

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

8.  Routing Conventions: [CONTI.]

- In order to create a private folder inside the app directory and should be ignored by the routing, we can simply add `_` before the folder name. Such as `_lib`
- In order to create a routing group, we simply add the folder name inside. `()` . Such as `(auth)` and that will convert the path from `auth/register` &rarr; `/register`

## **_Linking_**:

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

## **Layout**:

- It is auto generated file in nextjs that help us to set a parmanent section within the website such as header, footer, etc.
- The filename is `/app/layout.tsx` &rarr; The is root layout of the website.
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

- **_Route Group Layout:_** We can create a route group layout for a specific `component/pages`. Just simply create a route group folder and add the components there with a `layout.tsx` file and same as above, `{children}` will be replaced by the contents from components. Such as:

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

- Layouts only render the unshared components i.e. `{children}` and other shared components will remain as it they are not going to be rendered. It will keep all the common elements untouched and only load the newly loaded components.

- <mark>**_Templpates_**</mark>

  - Since, Layouts only render the unshared components and not the shared components or common elements, here `Templates` will come into play. It will render all the components and elements weather it is shared components or common elements.
  - Similar to layouts, templates also require a `{children}` props to render the newly adde components.
  - When a user navigats between routes that shared templates, a new instance of templates will be mounted, all new DOM elements will be created and states are not getting preserved.
  - Templates is defined as a export react default component from the file with the name of `template.tsx or template.js`

- We can use both `template.tsx` and `layout.tsx` together but keep in mind that `Layout.tsx` will render first.

## **_Loading_ Component**:

- It is a file where we can add loading animations to make the user understand the loading is happening and the requested content will be loaded soon
- We need a exported default `Loading()` function in `Loading.tsx`.
- The file should placed with the `page.tsx` file. So that it will wrap the content of the `loading.tsx` at the top of `page.tsx`. Demo example:
  ```javascript
  export default function Loading() {
    return <h1>Loading...</h1>;
  }
  ```

## **_MetaData_** : [title, description]

- Nextjs allows a metadata API to configure the metadata object in order to ensuring the visibility of the data in SEOs
- We can add the metadata in the `page.tsx` file with the following code:

  ```javascript
  //Here, metadata is a object

  export const metadata = {
    title: "Custom title", // this will give a custom title
  };
  ```

- It can be done on root level or different components level using the above code.
- It ensures the accuracy and relvent information transfer to the SEOs and ultimatly to the user.
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

## **_Error Function:_**

- This a type of function/feature that helps us in handling errors.
- It will mostly helps in production environments.
- This will make the user experience effective.
- Here is the component hierarchy: <mark>**_IMPORTANT_**</mark>

  ```js
  <Layout>
    {" "}
    //Layout.tsx
    <Template>
      //template.tsx
      <ErrorBoundary fallback={<Error />}>
        // Error.tsx
        <Suspense fallback={<Loading />}>
          // Loading.tsx
          <ErrorBoundary fallback={<notFound />}>
            // not-Found.tsx
            <page /> // Page.tsx
          </ErrorBoundary>
        </Suspense>
      </ErrorBoundary>
    </Template>
  </Layout>
  ```

- This will helps to display the error message more effectively and make the application to not to crash only with some small errors
- It will also make the user to interact with our parts of the application.
- In order to catch errors from the application, we use a `throw new Error` method in the `page.tsx` file and create a new file with name `error.tsx` along with the page.tsx file. Demo example:

  ```javascript
  //code snippet for page.tsx

  if (num === 1) {
    throw new Error("Enter a valid number");
  }
  ```

  - This is make the application crash immediately if the value of num is equal to 1 and the user is unble to interact with other parts of application.

  ```javascript
  // code snippet for error.tsx
  "use client";

  export default function error() {
    return <div>Something went wrong</div>;
  }
  ```

  - This will only display "something went wrong" in the repecetive component and other components will work as expected.
  - It is only available in client components.

- The above example wil display the error message "something went wrong" which is hardcoded in the `error.tsx` file. However, if you want to display the message defined in the `page.tsx` file for that we can use a `error.message` prop in the `error.tsx` file. Demo example:

  - Code snippet for page.tsx:

    ```javascript
    if (num === 1) {
      throw new Error("Enter a valid number");
    }
    ```

  - Code snippet for error.tsx:

    ```javascript
    "use client";

    export default function error({ error }: { error: Error }) {
      return <div>{error.message}</div>;
    }
    ```

    - This will display the error message "Enter a valid number".

- <mark>**_Reset Function_**</mark>

  - This function is used to reset the current state of the component/error.
  - This will re-render the error boundaries to remove the error message.
  - This will not remove the error in the component but re-render the page.
  - This is actually useful for resending API calls and getting the data again.
  - **Note:** Since, the reset is a function. Therefore, to run the reset function we require a button DOM element. Demo example:

    - Code snippet for page.tsx:

      ```javascript
      "use client";

      if (num === 1) {
        throw new Error("Enter a valid number");
      }
      ```

      - No chnage in `page.tsx` file. Just add a `"use client"` attribute to make the `page.tsx` a client component.

    - Code snippet for error.tsx:

      ```javascript
      "use client";

      export default function error({
        error,
        reset,
      }: {
        error: Error,
        reset: () => void,
      }) {
        return (
          <>
            <div>{error.message}</div>;
            <button onClick={reset}> Try Again </button>
          </>
        );
      }
      ```

      - This will trigger the reset function and try to re-render the error boundaries to make the component working properly
      - Reset function is only available for client components.

- **_Nested error handler:_**

  - An `error.tsx` file will handle the error in all its nested child components.
  - It is basically set the scope of the error handler to understand to determine which parts of the UI needs to be affected if the error occurs
  - If we move the `error.tsx` file into products component, it will be automatically set the scope of the error handler to the complete products component irrespective of the error being thrown in review component. It will re-render the complete products component instead of the review component.

    and If we move the `error.tsx` file into review component, it will be automatically set the scope of the error handler to the review component and only review component will re-render other components such as features will be remain visible in the UI and in working state.

## **_Parallel Routes:_** (**_Advance Routing Concepts_**)

- This is a advanced routing with help to render multiple pages within the same layout.
- This is used when we need two or more components to be rendered in a single page and to make sure that the components are being rendered individually without any dependencies on other components. For example:

  | Header   | Header |
  | -------- | ------ |
  | User     | Data   |
  | Customer | Data   |
  | Footer   | Footer |

- With this type of setup, we can render components without any dependencies on other components. This is useful when one or more components are taking time to render or gets an error. This setup will render the available components and show errors in scope of the component.
- In Nextjs, Parallel Routes are defined using a feature known as **Slots.**
- `Slots` is a feature that allows you to structure our components/content in a Modular function i.e. multiple pages within the same layout.
- Using `Slots` won't affect anything on URL part. Such as `localhost:3000/dashboard/User` or `localhost:3000/dashboard/@User` shows 404 error instead of rendering the page.tsx file.
- To define `Slots`, we use `"@componentName"`. For example:
  1. `app/dashboard/@User`
  2. `app/dashboard/@Customer`
  3. `app/dashboard/@Data`
- All the `Slots` must have their own `page.tsx` file in order to render the component on the `Layout.tsx` file.
- Each component then passed as a prop (same as `{children}`) in `Layout.tsx` within the parent component. For example: _dashboard_. Demo:

  - Code Snippet for Dashboard Component (`Layout.tsx`):

    ```javascript
    export default function Dashboard({
      children,
      user,
      customer,
      data,
    }: {
      children: React.ReactNode,
      user: React.ReactNode,
      customer: React.ReactNode,
      data: React.Children,
    }) {
      return (
        <>
          <div>{children}</div>
          <div>{user}</div>
          <div>{customer}</div>
          <div>{data}</div>
        </>
      );
    }
    ```

  - Code Snippet for Other Component:

    ```javascript
    export default function componentName() {
      return <div>componentName</div>;
    }
    ```

- <mark>**_Sub-navigation_**</mark> or <mark>**_Unmatched Routes:_**</mark>

  - In case, we want to navigate using parallel routes, we can use Sub-navigation
  - In this way, the layout of other compoent will be as it is and effects only one component. For example:

    - Before using the Sub-navigation:

      | Header   | Header               |
      | -------- | -------------------- |
      | User     | Data                 |
      | Customer | [Go to sharedData]() |
      | Footer   | Footer               |

    - After using the Sub-navigation:

      | Header   | Header           |
      | -------- | ---------------- |
      | User     | Shared Data      |
      | Customer | [Back to Data]() |
      | Footer   | Footer           |

      - _Shared Data_ is a different component which is rendered in the same layout as _User_ and _Customer_ and will replace `data` prop.
      - In the above example, we are using sub-navigation to navigate from `Data` to `Shared Data` component and visa-versa.

  - This is more likely to render a children component within the parent component and navigating it at the same time.
  - The URL for the same will be changed from `localhost:3000/dashboard` to `localhost:3000/dashboard/shared-data` but it will not reload the page . It will only change the component i.e. data component.
  - Code Snippet for this type of configuration:

    - Code Snippet for Shared-data Component i.e. `app/dashboard/@data/page.tsx`:

      ```javascript
      import Link from "next/link";

      export default function Data() {
        return (
          <>
            <h1>Data</h1>
            <Link href="/dashboard/shared-data">Go to sharedData</Link>
          </>
        );
      }
      ```

    - Code Snippet for Shared-data Component i.e. `app/dashboard/@data/shared-data/page.tsx`:

      ```javascript
      import Link from "next/link";

      export default function sharedData() {
        return (
          <>
            <h1>Shared Data</h1>
            <Link href="/dashboard">Back to data</Link>
          </>
        );
      }
      ```

  - Here is a <span style="color: red;">**CAUTION**</span> in the above approach. If we navigate the sub-navigation using the URL i.e. `localhost:3000/dashboard/shared-data`, it will show _404_. As there is no `page.tsx` at `app/dashboard/shared-data`.
  - <mark>**_Default.tsx:_**</mark> In order to make the navigation works, we use `Default.tsx` file defined in every component to let the navigator know that we have to render the default content in case of a unmatched routes.
  - With this approach, It retain the previously active state in the UI regreadless of changes in URL.
  - As soon as, the browser hits the unmatched route, NextJS immediately searches for `Default.tsx` file.
  - The presence of `Default.tsx` file is madatory because it will provides the default content to be rendered in UI components.
  - In the above example, we have four slots i.e. children, user, customer and data, and in order make the unmatchable route works we have to add `Default.tsx` file in all the slots corresponding to `Page.tsx` file.
  - The code for the `Default.tsx` can be same as the code for `Page.tsx` file or it can be modified or totally different one as needed.

- <mark>**_Conditional Routes:_**</mark>
  - Conditional routes are used to render different components based on the condition.
  - It is useful when we have to render different components based on the user authentication.
  - Code snippet for `page.tsx` file with the filepath:
    ```javascript
    export default function Dashboard({
      children,
      user,
      customer,
      data,
      Login,
    }: {
      children: React.ReactNode,
      user: React.ReactNode,
      customer: React.ReactNode,
      data: React.Children,
      Login: React.Children,
    }) {
      const isLoggedIn = true; // This can be replaced with actual authentication logic
      return isLoggedIn ? (
        <>
          <div>{children}</div>
          <div>{user}</div>
          <div>{customer}</div>
          <div>{data}</div>
        </>
      ) : (
        <h1> Please logged in to continue ... </h1>
      );
    }
    ```

## **_Intercepting Routes_** (**_Advance Routing Concepts_**)

- Intercepting routes are used to perform some action before rendering the component.
- It helps in intercept or stop the default routing behavior and present a alternate UI to make the UI interactive while the URL will be the same but the UI will changed. But the twist is when the user reload the page the default behavior and UI will be replaced with the Interactive Behavior.
- This can useful if you want to show a route while keeping the context of current page.
- For example:

  1. Once clicked on a Login button, the user will be redirected to the login page by default that contains a form for authorization. However, using `Intercepting routes`, we can make the navigation as it is but the instead of the redirection of the page, we can make a model for the login page and the background of the home page will be the same.

  2. We can implement it in the gallery section. Such as while clicking on the photo, the url will be changed and by default, the website will redirect and the photo will be enlarged. However, using `Intercepting routes`, we can make the navigation as it is but the instead of the rediection of the page, we can make a model to enlarge the photo and the background of the gallery page will be the same.

- Name convention for implementing intercepting routes:

  1. <mark>(.)</mark>directoryName: (`app/f1/f2/page.tsx` &rarr; `app/f1/(.)f2/page.tsx`)

     - This is used to intercept the routes at the **same level**.
     - We have to create a new directory at the same level of route as where the intercepting the routes.
     - For example:
       1. If we are intercepting this `localhost:3000/f1/f2` route.
       2. The filepath for the above route will be `app/f1/f2/page.tsx`
       3. In order to intercept this route, we have to create a new directory at the same level of route as where the intercepting the routes i.e. `app/f1/(.)f2/page.tsx`.
       4. Providing a link to the `f1/page.tsx` file to navigate to the `f2/page.tsx` file
       5. After clicking the Link added in the `f1/page.tsx` file, the application will navigate to the `localhost:3000/f1/f2` route, it will render the intercepted route and load the contents mentioned in `app/f1/(.)f2/page.tsx`
       6. Finally, if we reload the page `localhost:3000/f1/f2`, it will render the content mentioned in `app/f1/f2/page.tsx`
     - There is no additional code required to handle intercepting routes

  2. <mark>(..)</mark>directoryName: (`app/f1/f3/page.tsx` &rarr; `app/f1/f4/(..)f3/page.tsx`)

     - This is used to intercept the routes at the **one level above** i.e. from `f1/f3/page.tsx` to `f4/(..)f3/page.tsx`.
     - File hierarchy will be like this App &rarr; f1 &rarr; f2, f3, (f4 &rarr; `(..)f3`)
     - For example:
       1. If we are intercepting this `localhost:3000/f1/f3` route.
       2. The filepath for the above route will be `app/f1/f3/page.tsx`
       3. In order to intercept this route, we have to create a new directory at the one level below of route as where the routes that needs to intercept the routes i.e. `app/f1/f4/(..)f3/page.tsx`.
       4. Providing a link to the `f1/f4/page.tsx` file to navigate to the `f1/f3/page.tsx` file
       5. After clicking the Link added in the `f1/f4/page.tsx` file, the application will navigate to the `localhost:3000/f1/f3` route, it will render the intercepted route and load the contents mentioned in `app/f1/f4/(..)f3/page.tsx`
       6. Finally, if we reload the page `localhost:3000/f1/f3`, it will render the content mentioned in `app/f1/f3/page.tsx`
     - Therefore, we are interspecting the UI defined in `f1/f4/(..)f3/page.tsx` to `f1/f3/page.tsx`
     - The nextjs will render/load the contents from `f1/f4/(..)f3/page.tsx` then content from `f1/f3/page.tsx`.
     - That's why, this is called as one level above.
     - There is no additional code required to handle intercepting routes.

  3. <mark>(..)(..)</mark> &rarr; <span style="color: red;">**Not working rightnow**</span>

  4. <mark>(...)</mark>directoryName: (`app/about/page.tsx` &rarr; `app/f1/f4/(...)about/page.tsx`)

     - This is used to intercept the routes at the **Root Level** i.e. from `app/about/page.tsx` to `app/f1/f4/(...)about/page.tsx`.
     - File hierarchy will be like this App &rarr; f1 &rarr; f2, f3, (f4 &rarr; `(...)about`)
     - For example:
       1. If we are intercepting this `localhost:3000/about` route.
       2. The filepath for the above route will be `app/about/page.tsx`
       3. In order to intercept this route, we have to create a new directory at the bottom root level of route as where the routes that needs to intercept the routes i.e. `app/f1/f4/(...)about/page.tsx`.
       4. Providing a link to the `f1/f4/page.tsx` file to navigate to the `about/page.tsx` file
       5. After clicking the Link added in the `f1/f4/page.tsx` file, the application will navigate to the `localhost:3000/about ` route, it will render the intercepted route and load the contents mentioned in `app/f1/f4/(...)about/page.tsx`
       6. Finally, if we reload the page `localhost:3000/about`, it will render the content mentioned in `app/about/page.tsx`
     - Therefore, we are interspecting the UI defined in `app/f1/f4/(...)about/page.tsx` to `app/about/page.tsx`
     - The nextjs will render/load the contents from `app/f1/f4/(...)about/page.tsx` then content from `app/about/page.tsx`.
     - That's why, this is called as root level.
     - There is no additional code required to handle intercepting routes.

<hr/>
<span style="font-size:20px;"><strong>Practical Example for Parallel Intercepting Routes Will Be Found in `Gallery` Directory</strong></span>
<hr/>

## Route Handlers:

### Basics:

- It is a custom request handlers for our routes. Such as `GET`, `POST`, `PUT`, `DELETE`.
- We can also perform CRUD operations using it.
- Unlike page routes, it will allow us to create RESTful endpoints.
- No requirements of a creating and configuring a separate server.
- It is also great for making external API requests.
- Data fatching is very simple and easy using route handlers.
- It runs server-side, ensuring that all the sensitive information are in place.
- For example:

  1. Create a file named `route.ts` which is a name convention for route handlers.
  2. Add a export async function with the same of the route verb i.e. `GET` and `POST` respectively.
  3. Return the JS response object with necessary information.
  4. Filepath will be `app/dirName/route.ts` and the url will be `localhost:3000/dirName`
  5. Demonstrate the simple `route.ts`

     ```javascript
     export async function GET() {
       return new Response("Hello World!");
     }
     ```

- <mark>**IMPORTANT points:**</mark>
  - Similar to page routes, route handlers will also be able to design in the folder and nested folders
  - To avoid conflices between `page.tsx` and `route.ts`, we can create a separate folder such as `API` to separate the routes from page.

### Usages: (GET)

- There is no change in `GET()` behavior. Here are the demonstration for same.
- The URL for get request will be `localhost:3000/data`
- Getting data in response object

  ```javascript
  import { dataArray } from "./data";

  export async function GET() {
    return new Response.json(dataArray);
  }
  ```

- In case, the URL for get request using ID will be `localhost:3000/data/:id`
- Similarly to the page routes, we will create a dynamic route with `[id]`.
- As we defined `params` in the page routes, similarly, we defined in this.
- Here is the demonstration for same:

  ```javascript
  export async function GET(_request:Request, { params}:{ params: {id}}) {
    const dataFromId= data.find((data) => data.id === parseInt(params.id));
    }
    retrun Response.json(dataFromPostRequest);
  ```

### Usages: (POST):

- In order to take data using `POST()` request, we will have to create a new method with the name `POST()` with the arguments _request_
- The URL for post request will be `localhost:3000/data`
- Here is the demonstration for same:

  ```javascript
  // Let say data = [{name: 'John', Id:13}]
  // Request will be like data = {name: 'firstName', Id:NaN}

  export async function POST(request: Request) {
    const dataFromPostRequest = await request.json();
    const data = {
      name: dataFromPostRequest.name,
      Id: dataFromPostRequest.Id,
    };
    data.push(data);
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",,
      },
      status: 201,
    });
  }
  /* New value for data is
  data = [
    {
      name: "John",
      Id: 13,
    },
    {
      name: "firstName",
      Id: NaN,
    },
  ];
  */
  ```

### Usages: (PATCH):

- In order to take data using `PATCH()` request, we will have to create a new method with the same name `PATCH()` with the two arguments:
  1. `request`: the request arguments is similar as in the `POST()` method.
  2. `context`: This argument contains the value of params that we pass into the URL.
- In case, the URL for get request using ID will be `localhost:3000/data/:id`
- Similarly to the `GET()` method with parameters, we will define the same in the `PATCH()` method as well
- Here is the demonstration for the same:

  ```javascript
  export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const body = await request.json();
    const { text } = body;
    const dataFromId = data.findIndex(
      (data) => data.id === parseInt(params.id)
    );
    data[dataFromId].text = text;
    return new Response.json(data[dataFromId]);
  }
  ```

### Usages: (DELETE):

- In order to take data using `DELETE()` request, we will have to create a new method with the same name `DELETE()` with the two arguments:
  1. `request`: the request arguments is similar as in the `POST()` method.
  2. `context`: This argument contains the value of params that we pass into the URL.
- In case, the URL for get request using ID will be `localhost:3000/data/:id`
- Here is the demonstration for the same:

  ```javascript
  export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const dataFromId = data.findIndex(
      (data) => data.id === parseInt(params.id)
    );
    const deletedData = data[dataFromId];
    data.splice(dataFromId, 1);
    return Response.json(deletedData);
  }
  ```

### URL Query Parameters using type <mark>**NextRequest**</mark>:

- In order to filter the something from data, such as if we quering something from the get request.
- In case, the URL for get request using ID will be `localhost:3000/data?query=abc`
- This will search abc from the returned data
- Here is the demonstration for the same:

  ```javascript
  //URL: http://localhost:3000/data?query=abc

  import { type NextRequest } from "Next/server";

  export async function GET(request: NextRequest) {
    const searchParams = request.nexturl.searchParams; // list of search parameters
    const query = searchParams.get("query"); // Here we defined query.
    const filteredData = query
      ? data.filter((data) => data.text.includes(query))
      : data;
    return new Response.json(filteredData);
  }
  ```

### Headers (Request):

- It is basically the list of the metadata that a request creator sends to the server.
- For example:
  1. **User-Agent**: which identifies the browser and operating system that is sending the request.
  2. **Accpect**: This is the type of content that client can process
  3. **Authorization**: Used by the client to authenticate itself with the server
- Here is the example for authorization:

  1. Using `NextRequest` from `Next/server`

     ```javascript
     import { type NextRequest } from "Next/server";

     export async function GET(request: NextRequest) {
       const requestHeaders = new Headers(request.headers);
       console.log(requestHeaders.get("Authorization"));
       return new Response("Profile is verified");
     }
     ```

  2. Using `headers` from `next/headers`

     ```javascript
     import { headers } from "next/headers";

     export async function GET(request: NextRequest) {
       const requestHeadersList = headers();

       console.log(requestHeadersList.get("Authorization"));

       return new Response("Profile is verified");
     }
     ```

### Headers (Response):

- It is basically the list of the metadata that a server sends to the client.
- For example:
  - **Content-Type**: It indicates the mediatype of the response from the server. It tells the browser which content we have to render to the browser such as text/plain, text/HTML for html documents, application/JSON for JSON data, etc.
- For example:

  1. Case 1: Here the content-type will be `text/plain` as default one.

     - Input will be:

       ```javascript
       export async function GET() {
         return new Response("<h1>Profile is verified</h1>");
       }
       ```

     - Output will be a plain text string with the text as `<h1>Profile is verified</h1>`

  2. Case 2: Here the content-type will be `text/HTML` which will defined in the response body as a arguments

     - Input will be:

       ```javascript
       export async function GET() {
         return new Response("<h1>Profile is verified</h1>", {
           headers: {
             "Content-Type": "text/html",
           },
         });
       }
       ```

     - Output will be a HTML element with the heading as `Profile is verified`

### Cookies:

- Cookies are the small piece of data that a server sends to the client.
- The browser saves the cookies and sends them back to same server for later requests.
- This will help in managing the user-sessions.
- Uses of Cookies:

  1. Sessions management like login and logout
  2. Personization like user preferences or theme
  3. Tracking like recording and analyzing user behavior

- For example:

  1. Using `set-cookies` function deinfed in header body

     ```javascript
     export async function GET() {
       return new Response("<h1>Profile is verified</h1>", {
         headers: {
           "Content-Type": "text/html",
           "Set-Cookie": "theme=dark",
         },
       });
     }
     ```

  2. Using `cookies` from `next/headers`

     ```javascript
     import { headers, cookies } from "next/headers";

     export async function GET() {
       cookies().set("theme", "dark");

       return new Response("<h1>Profile is verified</h1>", {
         headers: {
           "Content-Type": "text/html",
         },
       });
     }
     ```

- Now the cookies has been set to `{"name": "theme", "value": "dark"}`
- In order to get the cookie from the browser:

  1. Using `NextRequest` from `Next/server`

     ```javascript
     import { type NextRequest } from "next/server";

     export async function GET(request: NextRequest) {
       const theme = request.cookies("theme"); // this needs a cookies to get cookies.

       return new Response("<h1>Profile is verified</h1>", {
         headers: {
           "Content-Type": "text/html",
           "Set-Cookie": "theme=dark",
         },
       });
     }
     ```

  2. Using `cookies` from `next/headers`

     ```javascript
     import { headers, cookies } from "next/headers";

     export async function GET() {
       const theme = cookies().get("theme"); // this needs a cookies to get cookies.

       return new Response("<h1>Profile is verified</h1>", {
         headers: {
           "Content-Type": "text/html",
         },
       });
     }
     ```

### Caching:

- Route Handler are cached by default when using GET methods with the response object in Next.js.
- Methods that opt-out caching :
  1. Dynamic mode in Segment Config Option. Just defie a exporting variable dynamic and set it's value to "force-dynamic". `export const dynamic = 'force-dynamic'` at the top of the page/route that you want to have no-cache.
  2. Using the Request object with the GET method
  3. Employing dynamic function such as headers() or cookies()
  4. Using HTTP mehtod otherthen GET method.

### Middleware:

- It is a powerful feature in Next.js that allows you to control the flow of requests and responses within the API.
- It is used to Set a global level i.e. outside to the app folder
- It is used to enhance the features like _**redirecting, URL rewriting, authorization, headers and cookies management**_ and more.
- We can active it in certain paths and situations
- Two main approaches to set the custom middleware:

  1. Custom matcher config

     ```javascript
     import { NextResponse, type NextRequest } from "next/server";

     export function middleware(request: NextRequest) {
       return new NextResponse.redirect("/", request.url);
     }

     export const config = { matcher: "/profle" };
     ```

  2. Conditional statements

     ```javascript
     import { NextResponse, type NextRequest } from "next/server";

     export function middleware(request: NextRequest) {
      if (request.nextUrl.pathname === "/profile") {
       return new NextResponse.redirect("/", request.url);
     }
     ```
