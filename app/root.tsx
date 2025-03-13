import {
  isRouteErrorResponse,
  Links,
  Outlet,
  Scripts,
  useSubmit,
  useActionData,
  useMatches,
  useNavigate,
} from "react-router";

import type { Route } from "./+types/root";
import appStylesHref from "./app.scss?url";
import desktopVariablesHref from './build/desktop/variables.css?url';
import mobileVariablesHref from './build/mobile/variables.css?url';
import globalVariablesHref from './build/global/variables.css?url';


export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap",
  },
];

export async function clientAction ({ request } : Route.ClientActionArgs) {
    const formData = await request.formData();
    const theme = formData.get('theme');

    return { theme: theme as string };
};

export function Layout ({ actionData = { theme : 'light '} } : Route.ComponentProps) {
    const data = useActionData();
    const submit = useSubmit();
    const handleChangeTheme = () => {
        if (data?.theme === 'dark') {
            return submit({ theme: 'light' }, { method: 'post', action: '/' } );
        }

        return submit({ theme: 'dark' }, { method: 'post' } );
    }

    const matches = useMatches();
    const navigate = useNavigate();

    const changeLang = () => {
       const isEnglish = matches.find(m => m.id === 'routes/home');    

       if (isEnglish) {
          return navigate('/');

       }
       return navigate('/en');

    };

    return (
        <html lang="es">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href={globalVariablesHref} />
            <link rel="stylesheet" href={desktopVariablesHref} media="only screen and (min-width:769px)" />
            <link rel="stylesheet" href={mobileVariablesHref} media="only screen and (max-width:768px)" />
            <link rel="stylesheet" href={appStylesHref} />
            <Links />
            <title>Design Tokens </title>
          </head>
          <body className={!data ? actionData.theme : data.theme}>
              <nav className="navbar dst-navbar">
                  <div className="container">
                      <div onClick={handleChangeTheme} className="navbar__logo">
                      </div>
                  </div>
              </nav>
              <Outlet />
              <footer>
                  <div className="footer">
                      <div className="columns">
                          <div className="column is-two-thirds">
                              <div className="logo"></div>
                          </div>
                          <div className="links column is-flex">
                              <a href="mailto:hola@designtokens.es">hola@designtokens.es</a>
                              <a href="https://www.linkedin.com/company/designtokens-es/">Linkedin</a>
                              <a href="https://designtokenses.substack.com">Substack</a>
                          </div>
                      </div>

                      <div className="columns">
                          <div className="copyright column is-half">
                              Design Tokens en Español © 2025 Todos los derechos reservados. <span><a href="https://docs.google.com/document/d/e/2PACX-1vSdRj2pGU_K0G4d3W8ADa03dFtHrD106py8EjR9-HJGM3GTevYioOPoSxuLTbVR6DHkvpbFnM0neWq9/pub">Politica de Privacidad</a></span>
                          </div>
                          <div className="column is-flex lang">
                            <button onClick={changeLang} className="lang-selector">
                              {matches.find(m => m.id === 'routes/home') ? <img src="/app/assets/spanish.svg" /> : <img src="/app/assets/english.svg" />}
                              {matches.find(m => m.id === 'routes/home') ? <span>Español</span> : <span>English</span>}
                            </button>
                          </div>
                      </div>
                  </div>
              </footer>
              <Scripts />
          </body>
        </html>
    )
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
