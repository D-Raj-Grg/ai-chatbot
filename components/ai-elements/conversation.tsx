'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const ConversationContext = React.createContext<{
  scrollRef: React.RefObject<HTMLDivElement>;
}>({
  scrollRef: { current: null },
});

export const Conversation = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <ConversationContext.Provider value={{ scrollRef }}>
      <div
        ref={ref}
        className={cn('flex flex-col h-full overflow-hidden', className)}
        {...props}
      >
        {children}
      </div>
    </ConversationContext.Provider>
  );
});
Conversation.displayName = 'Conversation';

export const ConversationContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { scrollRef } = React.useContext(ConversationContext);

  return (
    <div
      ref={scrollRef}
      className={cn('flex-1 overflow-y-auto space-y-4 p-4', className)}
      {...props}
    >
      {children}
    </div>
  );
});
ConversationContent.displayName = 'ConversationContent';

export const ConversationScrollButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { scrollRef } = React.useContext(ConversationContext);
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        setShowScroll(scrollHeight - scrollTop - clientHeight > 100);
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener('scroll', handleScroll);
    return () => scrollElement?.removeEventListener('scroll', handleScroll);
  }, [scrollRef]);

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  if (!showScroll) return null;

  return (
    <Button
      ref={ref}
      size="icon"
      variant="outline"
      className={cn(
        'absolute bottom-24 right-8 rounded-full shadow-lg',
        className
      )}
      onClick={scrollToBottom}
      {...props}
    >
      <ArrowDown className="h-4 w-4" />
    </Button>
  );
});
ConversationScrollButton.displayName = 'ConversationScrollButton';
