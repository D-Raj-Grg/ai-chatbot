'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ReasoningContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  isStreaming?: boolean;
}>({
  open: false,
  setOpen: () => {},
  isStreaming: false,
});

interface ReasoningProps extends React.HTMLAttributes<HTMLDivElement> {
  isStreaming?: boolean;
}

export const Reasoning = React.forwardRef<HTMLDivElement, ReasoningProps>(
  ({ className, children, isStreaming, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);

    return (
      <ReasoningContext.Provider value={{ open, setOpen, isStreaming }}>
        <div
          ref={ref}
          className={cn('border rounded-lg p-2 bg-muted/30', className)}
          {...props}
        >
          {children}
        </div>
      </ReasoningContext.Provider>
    );
  }
);
Reasoning.displayName = 'Reasoning';

export const ReasoningTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { open, setOpen, isStreaming } = React.useContext(ReasoningContext);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      className={cn('w-full justify-between gap-2', className)}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span className="text-sm font-medium">
        {isStreaming ? 'Thinking...' : 'View reasoning'}
      </span>
      {open ? (
        <ChevronUp className="h-4 w-4" />
      ) : (
        <ChevronDown className="h-4 w-4" />
      )}
    </Button>
  );
});
ReasoningTrigger.displayName = 'ReasoningTrigger';

export const ReasoningContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { open } = React.useContext(ReasoningContext);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn('mt-2 p-3 text-sm whitespace-pre-wrap border-t', className)}
      {...props}
    >
      {children}
    </div>
  );
});
ReasoningContent.displayName = 'ReasoningContent';
