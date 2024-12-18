import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export default function Layout({
  children,
  currentTab,
  setCurrentTab,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <main
          className={cn(
            'flex-1 overflow-y-auto',
            'px-4 py-6 md:px-6 md:py-8 lg:px-8'
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}