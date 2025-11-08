'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  SendHorizontal,
  Paperclip,
  X,
  MoreHorizontal,
  StopCircle,
} from 'lucide-react';

export interface PromptInputMessage {
  text?: string;
  files?: File[];
}

interface PromptInputContextValue {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  onSubmit?: (message: PromptInputMessage) => void;
  globalDrop?: boolean;
  multiple?: boolean;
}

const PromptInputContext = React.createContext<PromptInputContextValue>({
  files: [],
  setFiles: () => {},
  globalDrop: false,
  multiple: false,
});

interface PromptInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  onSubmit?: (message: PromptInputMessage) => void;
  globalDrop?: boolean;
  multiple?: boolean;
}

export const PromptInput = React.forwardRef<HTMLDivElement, PromptInputProps>(
  ({ className, children, onSubmit, globalDrop, multiple, ...props }, ref) => {
    const [files, setFiles] = React.useState<File[]>([]);

    return (
      <PromptInputContext.Provider
        value={{ files, setFiles, onSubmit, globalDrop, multiple }}
      >
        <div
          ref={ref}
          className={cn(
            'rounded-lg border bg-background shadow-sm',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </PromptInputContext.Provider>
    );
  }
);
PromptInput.displayName = 'PromptInput';

export const PromptInputHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('border-b p-2', className)}
      {...props}
    >
      {children}
    </div>
  );
});
PromptInputHeader.displayName = 'PromptInputHeader';

export const PromptInputBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('p-3', className)}
      {...props}
    >
      {children}
    </div>
  );
});
PromptInputBody.displayName = 'PromptInputBody';

export const PromptInputFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-between p-2 border-t', className)}
      {...props}
    >
      {children}
    </div>
  );
});
PromptInputFooter.displayName = 'PromptInputFooter';

export const PromptInputTools = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      {children}
    </div>
  );
});
PromptInputTools.displayName = 'PromptInputTools';

interface PromptInputTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const PromptInputTextarea = React.forwardRef<
  HTMLTextAreaElement,
  PromptInputTextareaProps
>(({ className, ...props }, ref) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useImperativeHandle(ref, () => textareaRef.current!);

  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    }
  }, [props.value]);

  return (
    <textarea
      ref={textareaRef}
      className={cn(
        'w-full resize-none bg-transparent outline-none placeholder:text-muted-foreground min-h-[60px]',
        className
      )}
      placeholder="Type a message..."
      {...props}
    />
  );
});
PromptInputTextarea.displayName = 'PromptInputTextarea';

export const PromptInputAttachments = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
    children: (file: File) => React.ReactNode;
  }
>(({ className, children, ...props }, ref) => {
  const { files } = React.useContext(PromptInputContext);

  if (files.length === 0) return null;

  return (
    <div
      ref={ref}
      className={cn('flex flex-wrap gap-2', className)}
      {...props}
    >
      {files.map((file, index) => (
        <div key={index}>{children(file)}</div>
      ))}
    </div>
  );
});
PromptInputAttachments.displayName = 'PromptInputAttachments';

interface PromptInputAttachmentProps {
  data: File;
}

export const PromptInputAttachment = React.forwardRef<
  HTMLDivElement,
  PromptInputAttachmentProps
>(({ data }, ref) => {
  const { setFiles } = React.useContext(PromptInputContext);

  const removeFile = () => {
    setFiles((prev) => prev.filter((f) => f !== data));
  };

  return (
    <div
      ref={ref}
      className="flex items-center gap-2 rounded-md border bg-muted px-3 py-1.5 text-sm"
    >
      <span className="truncate max-w-[200px]">{data.name}</span>
      <Button
        size="icon"
        variant="ghost"
        className="h-4 w-4"
        onClick={removeFile}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
});
PromptInputAttachment.displayName = 'PromptInputAttachment';

interface PromptInputSubmitProps extends React.ComponentProps<typeof Button> {
  status?: 'streaming' | 'submitted' | 'idle';
}

export const PromptInputSubmit = React.forwardRef<
  HTMLButtonElement,
  PromptInputSubmitProps
>(({ className, status, ...props }, ref) => {
  const isLoading = status === 'streaming' || status === 'submitted';

  return (
    <Button
      ref={ref}
      size="icon"
      className={cn('rounded-full', className)}
      type="submit"
      {...props}
    >
      {isLoading ? (
        <StopCircle className="h-4 w-4" />
      ) : (
        <SendHorizontal className="h-4 w-4" />
      )}
    </Button>
  );
});
PromptInputSubmit.displayName = 'PromptInputSubmit';

export const PromptInputActionMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div ref={ref} className={cn('relative', className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { open, setOpen } as any);
        }
        return child;
      })}
    </div>
  );
});
PromptInputActionMenu.displayName = 'PromptInputActionMenu';

export const PromptInputActionMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button> & { open?: boolean; setOpen?: any }
>(({ className, open, setOpen, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn('h-8 w-8', className)}
      onClick={() => setOpen?.(!open)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  );
});
PromptInputActionMenuTrigger.displayName = 'PromptInputActionMenuTrigger';

export const PromptInputActionMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { open?: boolean; setOpen?: any }
>(({ className, children, open, setOpen, ...props }, ref) => {
  if (!open) return null;

  return (
    <div
      ref={ref}
      className={cn(
        'absolute bottom-full left-0 mb-2 rounded-md border bg-popover p-1 shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
PromptInputActionMenuContent.displayName = 'PromptInputActionMenuContent';

export const PromptInputActionAddAttachments = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
  const { setFiles, multiple } = React.useContext(PromptInputContext);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        multiple={multiple}
        onChange={handleFileChange}
      />
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        className={cn('w-full justify-start gap-2', className)}
        onClick={() => inputRef.current?.click()}
        {...props}
      >
        <Paperclip className="h-4 w-4" />
        <span>Add attachments</span>
      </Button>
    </>
  );
});
PromptInputActionAddAttachments.displayName = 'PromptInputActionAddAttachments';

export const PromptInputButton = Button;

// Select components re-exports
export const PromptInputSelect = Select;
export const PromptInputSelectTrigger = SelectTrigger;
export const PromptInputSelectContent = SelectContent;
export const PromptInputSelectItem = SelectItem;
export const PromptInputSelectValue = SelectValue;
