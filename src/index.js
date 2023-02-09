import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

Sentry.init({
    dsn: "https://354df60e0efd41c9bc8dfd639af035f0@o1130430.ingest.sentry.io/4504607952470016", //paste copied DSN value here
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0, //lower the value in production
  });

ReactDOM.createRoot(<App />, document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

