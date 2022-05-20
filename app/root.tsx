import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from 'remix';
import { Meta, Links, LiveReload, Outlet, useCatch, Scripts } from 'remix';
import { SiteSettings } from 'sanityTypes';
import Header from './components/Header';
import styles from './styles/tailwind-build.css';
import sanity from './lib/sanity/sanity';
import { CartProvider } from './context/useCart';
// import { CartStateProvider } from './components/CartContext';

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  backgroundColor,
  textColor
} `;

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => {
  const description = `Sample Ecommerce Site`;
  return {
    description,
  };
};

export const loader: LoaderFunction = async () => {
  const data: SiteSettings = await sanity.fetch(siteSettingsQuery);
  return data;
};

function Document({
  children,
  title = `Westy Remix`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const data = useLoaderData();
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body
        style={{
          backgroundColor: `${data?.backgroundColor.hex}`,
          overscrollBehavior: 'none',
        }}
      >
        <CartProvider
          initialCart={[
            {
              coffeeId: '123',
              coffeeName: 'sampleItem 1',
              grind: 'whole',
              quantity: 1,
              variant_id: '123whole',
              price: 1500,
            },
            {
              coffeeId: '456',
              coffeeName: 'sampleItem 2',
              grind: 'ground',
              quantity: 3,
              variant_id: '456ground',
              price: 1500,
            },
            {
              coffeeId: '789',
              coffeeName: 'sampleItem 3',
              grind: 'whole',
              quantity: 2,
              variant_id: '789whole',
              price: 1500,
            },
          ]}
        >
          {children}
        </CartProvider>
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
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
      <Header />
      <div className='error-container'>
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}
