import type { LinksFunction, MetaFunction } from 'remix';
import { Meta, Links, LiveReload, Outlet, useCatch, Scripts } from 'remix';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import styles from './styles/tailwind-build.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
export const meta: MetaFunction = () => {
  const description = `Sample Ecommerce Site`;
  return {
    description,
  };
};

function Document({
  children,
  title = `Westy Remix`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <Meta />
        <title>{title}</title>
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <GlobalStyles />
      <Header />
      <Outlet />
    </Document>
  );
}
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className='error-container'>
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  );
}

//  with remix <Scripts/>, you can accept the error prop in all your ErrorBoundary components and console.error(error); and you'll get even server-side errors logged in the browser's console.

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title='Uh-oh!'>
      <GlobalStyles />
      <Header />
      <div className='error-container'>
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
