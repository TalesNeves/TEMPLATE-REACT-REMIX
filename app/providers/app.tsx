import { queryClient } from "@/lib/react-query";
import { Outlet } from "@remix-run/react";
import { QueryClientProvider } from "@tanstack/react-query";

export const AppProvider = () => {
  // return <></>;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Notifications */}
        {/* <AuthLoader
            renderUnauthenticated={() => <div>Nao autenticado</div>}
            renderLoading={() => <div>Loading</div>}
            renderError={() => <div>Error</div>}
          > */}
        <Outlet />
      </QueryClientProvider>
    </>
  );
};
