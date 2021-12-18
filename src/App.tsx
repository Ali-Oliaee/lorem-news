import React from "react"
import { MainRouter } from "./routes"
import { QueryClient, QueryClientProvider } from "react-query";
import 'antd/dist/antd.css';

const queryFn = ({queryKey}: any) => (localStorage.getItem('email') && localStorage.getItem('password'))



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn,
      retry: 2,
    }
  }
})

const App = () => {
  return ( 
    <QueryClientProvider client={queryClient}>
      <MainRouter/>
   </QueryClientProvider>
  )
}

export default App
