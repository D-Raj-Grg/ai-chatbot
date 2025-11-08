'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const SourcesContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

export const Sources = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <SourcesContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {children}
      </div>
    </SourcesContext.Provider>
  );
});
Sources.displayName = 'Sources';

interface SourcesTriggerProps extends React.ComponentProps<typeof Button> {
  count?: number;
}

export const SourcesTrigger = React.forwardRef<
  HTMLButtonElement,
  SourcesTriggerProps
>(({ className, count, ...props }, ref) => {
  const { open, setOpen } = React.useContext(SourcesContext);

  return (
    <Button
      ref={ref}
      variant="outline"
      size="sm"
      className={cn('gap-2', className)}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <ExternalLink className="h-3 w-3" />
      {count && <span>{count} sources</span>}
    </Button>
  );
});
SourcesTrigger.displayName = 'SourcesTrigger';

export const SourcesContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { open } = React.useContext(SourcesContext);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn('grid gap-2 mt-2', className)}
      {...props}
    >
      {children}
    </div>
  );
});
SourcesContent.displayName = 'SourcesContent';

interface SourceProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Source = React.forwardRef<HTMLAnchorElement, SourceProps>(
  ({ className, children, href, title, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center gap-2 p-2 rounded-md border hover:bg-accent text-sm',
          className
        )}
        {...props}
      >
        <ExternalLink className="h-3 w-3 flex-shrink-0" />
        <span className="truncate">{title || href}</span>
      </a>
    );
  }
);
Source.displayName = 'Source';
