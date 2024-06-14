import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, type createRouter } from '@tanstack/react-router';

const queryClient = new QueryClient();

type AppProps = { router: ReturnType<typeof createRouter> };

const App = ({ router }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
