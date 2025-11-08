'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export const Response = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('whitespace-pre-wrap', className)}
      {...props}
    >
      {children}
    </div>
  );
});
Response.displayName = 'Response';
