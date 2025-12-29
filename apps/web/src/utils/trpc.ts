import { QueryCache, QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../server/src/routers";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(error.message, {
        action: {
          label: "retry",
          onClick: () => {
            queryClient.invalidateQueries();
          },
        },
      });
    },
  }),
});

export const trpc = createTRPCReact<AppRouter>();

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${serverUrl}/trpc`,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: "include",
        });
      },
    }),
  ],
});
