import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Search,
  MessageSquare,
  Share2,
  ThumbsUp,
  Filter,
} from 'lucide-react';

const posts = [
  {
    id: 1,
    user: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      profession: 'Professional Cleaner',
    },
    content:
      'Available for house cleaning services! 🧹✨ Experienced in deep cleaning and organizing. Check out my profile for reviews and rates.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    user: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      profession: 'Handyman',
    },
    content:
      'Offering handyman services in the local area 🔧 Specializing in repairs, installations, and maintenance. Available weekends!',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e',
    likes: 18,
    comments: 5,
    shares: 2,
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{post.user.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {post.user.profession}
                </p>
              </div>
            </div>
            <p className="mb-4">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            <div className="flex gap-6">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                {post.shares}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}