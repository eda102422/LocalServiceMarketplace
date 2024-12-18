import { cn } from '@/lib/utils';
import {
  Home,
  MessageSquare,
  Bell,
  Calendar,
  Settings,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const navigation = [
  { name: 'Home', icon: Home, value: 'home' },
  { name: 'Messages', icon: MessageSquare, value: 'messages' },
  { name: 'Notifications', icon: Bell, value: 'notifications' },
  { name: 'Bookings', icon: Calendar, value: 'bookings' },
  { name: 'Settings', icon: Settings, value: 'settings' },
  { name: 'Profile', icon: User, value: 'profile' },
];

export default function Sidebar({ currentTab, setCurrentTab }: SidebarProps) {
  return (
    <div className="sticky top-0 h-screen w-16 md:w-64 bg-card border-r">
      <div className="flex h-full flex-col gap-2 p-2">
        <div className="flex h-14 items-center justify-center md:justify-start px-4">
          <span className="hidden md:block text-xl font-bold">LocalServe</span>
        </div>
        <nav className="flex-1">
          {navigation.map((item) => (
            <Button
              key={item.value}
              variant={currentTab === item.value ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start gap-2 p-2',
                'hover:bg-accent hover:text-accent-foreground'
              )}
              onClick={() => setCurrentTab(item.value)}
            >
              <item.icon className="h-5 w-5" />
              <span className="hidden md:inline-block">{item.name}</span>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}