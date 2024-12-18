import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/layout/Layout';
import Home from '@/components/pages/Home';
import Messages from '@/components/pages/Messages';
import Notifications from '@/components/pages/Notifications';
import Bookings from '@/components/pages/Bookings';
import Settings from '@/components/pages/Settings';
import Profile from '@/components/pages/Profile';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <Home />;
      case 'messages':
        return <Messages />;
      case 'notifications':
        return <Notifications />;
      case 'bookings':
        return <Bookings />;
      case 'settings':
        return <Settings />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Layout currentTab={currentTab} setCurrentTab={setCurrentTab}>
        {renderContent()}
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;