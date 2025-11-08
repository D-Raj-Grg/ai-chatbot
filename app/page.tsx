import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to AI Chatbot</h1>
        <p className="text-lg text-muted-foreground">
          A Next.js application with shadcn/ui components
        </p>

        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Your Next.js app is ready with shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 justify-center">
              <Button>Primary Button</Button>
              <Button variant="outline">Secondary</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
