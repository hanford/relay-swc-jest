import {
  render as renderFn,
  waitFor,
  act,
  screen,
} from "@testing-library/react";
import { RelayEnvironmentProvider } from "react-relay";

import {
  createMockEnvironment,
  MockPayloadGenerator,
  RelayMockEnvironment,
} from "relay-test-utils";

import Page from "../pages/index";

let environment: RelayMockEnvironment = createMockEnvironment();

async function resolveAndWaitFor<T extends HTMLElement | HTMLElement[] | null>(
  mockResolvers: MockPayloadGenerator.MockResolvers,
  waitForCallback: () => T
) {
  // Verify that expected UI is NOT loaded before resolution
  expect(waitForCallback).toThrowError();

  act(() => {
    environment.mock.resolveMostRecentOperation((operation) => {
      return MockPayloadGenerator.generate(operation);
    });
  });

  return await waitFor(waitForCallback);
}

export function renderRelayEnvironment(ui, renderOptions = {}) {
  const RelayEnvironmentWrapper = ({ children }) => (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );

  return renderFn(ui, {
    wrapper: RelayEnvironmentWrapper,
    ...renderOptions,
  });
}

describe("test graphql tag transformation", () => {
  it("should work", async () => {
    const { getByText, debug } = renderRelayEnvironment(<Page />);

    // environment.mock.resolveMostRecentOperation((operation) => {
    //   return MockPayloadGenerator.generate(operation);
    // });

    // await waitFor(() => screen.queryByText("Data requested"));

    act(() => {
      environment.mock.resolveMostRecentOperation((operation) => {
        return MockPayloadGenerator.generate(operation);
      });
    });

    // await resolveAndWaitFor(
    //   {
    //     Viewer() {
    //       return {
    //         user: {
    //           id: "123",
    //         },
    //       };
    //     },
    //   },
    //   () => getByText("Data")
    // );

    console.log(screen.debug());

    expect(getByText("Loading...")).not.toBe(null);
  });
});
