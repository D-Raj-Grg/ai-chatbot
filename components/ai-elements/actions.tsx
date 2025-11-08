'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Actions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex gap-2 items-center', className)}
      {...props}
    >
      {children}
    </div>
  );
});
Actions.displayName = 'Actions';

interface ActionProps extends React.ComponentProps<typeof Button> {
  label?: string;
}

export const Action = React.forwardRef<HTMLButtonElement, ActionProps>(
  ({ className, children, label, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        className={cn('h-8 gap-2', className)}
        {...props}
      >
        {children}
        {label && <span className="text-xs">{label}</span>}
      </Button>
    );
  }
);
Action.displayName = 'Action';
