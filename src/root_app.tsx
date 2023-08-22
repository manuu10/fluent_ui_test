import {
  BrandVariants,
  createLightTheme,
  createDarkTheme,
  FluentProvider,
  Title1,
} from "@fluentui/react-components";
import App from "./App";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { BookTimePage } from "./components/book_time";
import { BookingsList } from "./components/bookings";

const customBrandRamp: BrandVariants = {
  10: "#000000",
  20: "#140000",
  30: "#290000",
  40: "#3d0000",
  50: "#520000",
  60: "#660000",
  70: "#7a0000",
  80: "#8f0000",
  90: "#b80000",
  100: "#cc0000",
  110: "#d11a1a",
  120: "#d63333",
  130: "#db4d4d",
  140: "#e06666",
  150: "#e68080",
  160: "#eb9999",
};

export const customLightTheme = createLightTheme(customBrandRamp);
export const customDarkTheme = createDarkTheme(customBrandRamp);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Title1>Startseite</Title1>,
      },
      {
        path: "book",
        element: <BookTimePage />,
      },
      {
        path: "list-bookings",
        element: <BookingsList />,
      },
      {
        path: "*",
        element: <Title1>404 Not Found</Title1>,
      },
    ],
  },
]);

export function RootApp() {
  return (
    <FluentProvider theme={customDarkTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  );
}
