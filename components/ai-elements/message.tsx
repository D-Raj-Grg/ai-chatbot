'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot, User } from 'lucide-react';

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  from: 'user' | 'assistant';
}

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, from, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex gap-3 items-start',
          from === 'user' && 'flex-row-reverse',
          className
        )}
        {...props}
      >
        <Avatar className="h-8 w-8">
          <AvatarFallback className={cn(
            from === 'assistant' && 'bg-primary text-primary-foreground'
          )}>
            {from === 'assistant' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">{children}</div>
      </div>
    );
  }
);
Message.displayName = 'Message';

export const MessageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg p-4 bg-muted/50 prose prose-sm dark:prose-invert max-w-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
MessageContent.displayName = 'MessageContent';
