import React from "react";
import { act, render, screen } from "@testing-library/react";
import {
  createMemoryRouter,
  RouterProvider,
  useOutletContext,
} from "react-router-dom";
import App from "../App";

jest.mock("../api/api", () => ({
  __esModule: true,
  fetchFilters: () => Promise.reject(new Error("offline")),
  fetchNewAlbums: () => Promise.reject(new Error("offline")),
  fetchSongs: () => Promise.reject(new Error("offline")),
  fetchTopAlbums: () => Promise.reject(new Error("offline")),
}));

function CatalogProbe() {
  const { data, usingFallback } = useOutletContext();
  return (
    <div>
      <p>{data.topAlbums[0]?.title}</p>
      <p>{String(usingFallback)}</p>
    </div>
  );
}

test("keeps the app usable with sample catalog when the API is offline", async () => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <App />,
      children: [{ index: true, element: <CatalogProbe /> }],
    },
  ]);
  const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

  await act(async () => {
    render(<RouterProvider router={router} />);
  });

  expect(screen.getByText("Give Feedback")).toBeTruthy();
  expect(screen.getByText("Quiet Orbits")).toBeTruthy();
  expect(screen.getByText("true")).toBeTruthy();
  errorSpy.mockRestore();
});
