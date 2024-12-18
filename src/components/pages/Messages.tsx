import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';

const conversations = [
  {
    id: 1,
    user: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      lastMessage: 'Perfect! See you tomorrow at 2 PM.',
      timestamp: '2 min ago',
      unread: true,
    },
  },
  {
    id: 2,
    user: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      lastMessage: 'Thank you for the great service!',
      timestamp: '1 hour ago',
      unread: false,
    },
  },
];

export default function Messages() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search messages..." className="pl-9" />
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4">
          {conversations.map((conversation) => (
            <Card
              key={conversation.id}
              className="p-4 cursor-pointer hover:bg-accent"
            >
              <div className="flex items-center gap-4">
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">{conversation.user.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {conversation.user.timestamp}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${
                      conversation.user.unread
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {conversation.user.lastMessage}
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