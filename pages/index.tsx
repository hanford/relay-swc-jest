import { Suspense } from "react";
import { useLazyLoadQuery, graphql } from "react-relay";

import type { pagesQuery } from "../types/pagesQuery.graphql";

function Component() {
  const data = useLazyLoadQuery<pagesQuery>(
    graphql`
      query pagesQuery {
        viewer {
          user {
            id
          }
        }
      }
    `,
    {}
  );

  console.log("PAGE", data);

  return (
    <div>
      Data requested: <span>{data.viewer.user.id}</span>
    </div>
  );
}

export default function Container() {
  return (
    <Suspense fallback="Loading...">
      <Component />
    </Suspense>
  );
}
