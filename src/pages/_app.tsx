import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/Theme";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  //configurando react query
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client ms
            staleTime: 5000,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <ToastContainer/>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
