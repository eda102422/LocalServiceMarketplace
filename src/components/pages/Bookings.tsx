import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const bookings = {
  upcoming: [
    {
      id: 1,
      client: 'Sarah Anderson',
      service: 'House Cleaning',
      date: '2024-03-25',
      time: '14:00',
      price: '$120',
      status: 'confirmed',
    },
  ],
  ongoing: [
    {
      id: 2,
      client: 'Michael Brown',
      service: 'Plumbing Repair',
      date: '2024-03-20',
      time: '10:00',
      price: '$85',
      status: 'in-progress',
    },
  ],
  completed: [
    {
      id: 3,
      client: 'Emma Wilson',
      service: 'Garden Maintenance',
      date: '2024-03-18',
      time: '09:00',
      price: '$150',
      status: 'completed',
    },
  ],
};

const statusColors = {
  confirmed: 'bg-blue-100 text-blue-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
};

export default function Bookings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Bookings</h2>
      <Tabs defaultValue="upcoming">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        {Object.entries(bookings).map(([status, bookingsList]) => (
          <TabsContent key={status} value={status}>
            <div className="space-y-4">
              {bookingsList.map((booking) => (
                <Card key={booking.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {booking.client}
                      </h3>
                      <p className="text-muted-foreground">{booking.service}</p>
                    </div>
                    <Badge variant="secondary">{booking.price}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p>{booking.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p>{booking.time}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Badge
                      className={`${
                        statusColors[booking.status as keyof typeof statusColors]
                      }`}
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}