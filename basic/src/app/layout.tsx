// This is the default one
export default function RootLayout({ children }: any) {

    return (
        <html lang="en">
            <body>
                <h1>Root Layout</h1>
                {children}
                <h2>Layout</h2>
            </body>
        </html>
    );
}