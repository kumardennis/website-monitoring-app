import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WebsitePage } from 'pages/WebsitesPage';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
    <div className="App">
      <header className="App-header h-28 flex flex-row items-center justify-center">
        <img src={logo} className="App-logo h-20" alt="logo" />
        <h1 className='text-5xl'>
          Monitor your websites
        </h1>
      </header>
      <main className='p-5'>
        <WebsitePage />
      </main>
      <Toaster />
    </div>

    </QueryClientProvider>
  );
}

export default App;
