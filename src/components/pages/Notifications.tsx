import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Bell, MessageSquare, Star } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'offer',
    icon: MessageSquare,
    title: 'New Offer',
    message: 'You received a new offer from James Wilson',
    timestamp: '2 min ago',
    unread: true,
  },
  {
    id: 2,
    type: 'feedback',
    icon: Star,
    title: 'New Feedback',
    message: 'Emma Thompson left you a 5-star review',
    timestamp: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    type: 'reminder',
    icon: Bell,
    title: 'Profile Reminder',
    message: 'Complete your profile to attract more clients',
    timestamp: '2 hours ago',
    unread: false,
  },
];

export default function Notifications() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Notifications</h2>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`p-4 ${notification.unread ? 'bg-accent' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-full ${
                    notification.unread ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <notification.icon
                    className={`h-5 w-5 ${
                      notification.unread
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">{notification.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {notification.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {notification.message}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}