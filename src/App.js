import './App.css';
import Weather from './components/Weather';
import { QueryClient, QueryClientProvider } from 'react-query';



function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={ queryClient } >
      <h1 style={ { color: "#fff" } } >Weather app</h1>
      <Weather />
    </QueryClientProvider>


  );
}

export default App;
