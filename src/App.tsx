import { QueryClient, QueryClientProvider } from "@tanstack/react-query";




function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </QueryClientProvider>
  );
}

export default App;
