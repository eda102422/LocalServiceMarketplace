import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar, Edit } from 'lucide-react';

const reviews = [
  {
    id: 1,
    client: 'Sarah Anderson',
    rating: 5,
    comment:
      'Excellent service! Very professional and thorough with their work.',
    date: '2024-03-15',
  },
  {
    id: 2,
    client: 'Michael Brown',
    rating: 4,
    comment: 'Great work ethic and very reliable. Would recommend!',
    date: '2024-03-10',
  },
];

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mb-8">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
          alt="Cover"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute -bottom-16 left-8 flex items-end space-x-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-background"
          />
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Jessica Parker</h1>
            <p className="text-muted-foreground">Professional House Cleaner</p>
          </div>
        </div>
        <Button
          size="sm"
          className="absolute bottom-4 right-4"
          variant="secondary"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h2 className="font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-4">
            Experienced house cleaner with 5+ years of professional service.
            Specialized in deep cleaning and organization.
          </p>
          <div className="space-y-2">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              San Francisco, CA
            </div>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              Member since 2019
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4">Services</h2>
          <div className="space-y-2">
            <Badge>House Cleaning</Badge>
            <Badge>Deep Cleaning</Badge>
            <Badge>Organization</Badge>
            <Badge>Move-in/Move-out</Badge>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-semibold mb-4">Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold">4.8</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold">127</p>
              <p className="text-sm text-muted-foreground">Jobs</p>
            </div>
            <div>
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-muted-foreground">Completion</p>
            </div>
            <div>
              <p className="text-2xl font-bold">45</p>
              <p className="text-sm text-muted-foreground">Reviews</p>
            </div>
          </div>
        </Card>

        <Card className="md:col-span-3 p-6">
          <h2 className="font-semibold mb-4">Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{review.client}</p>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}