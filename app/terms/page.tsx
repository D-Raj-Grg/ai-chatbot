import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Terms of Service | AI Chatbot',
  description: 'Terms of Service for AI Chatbot',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using AI ChatBot (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                AI ChatBot provides an artificial intelligence-powered conversational interface that allows users to interact with advanced language models. The Service includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Access to multiple AI models (GPT-4o, GPT-4 Turbo, GPT-3.5)</li>
                <li>Web search integration capabilities</li>
                <li>File and image upload functionality</li>
                <li>Conversation history and management</li>
                <li>Additional features as we may add from time to time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground mb-4">
                To use certain features of the Service, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
                <li>Not share your account with others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Generate harmful, abusive, or offensive content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service for automated or bulk queries without permission</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Generate spam or misleading content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Subscription Plans and Payments</h2>
              <p className="text-muted-foreground mb-4">
                We offer different subscription plans with varying features and limits:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Free Plan: Limited messages, basic features</li>
                <li>Pro Plan: Unlimited messages, all models, advanced features</li>
                <li>Enterprise Plan: Custom solutions, dedicated support</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Payment terms:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Subscriptions are billed monthly or annually</li>
                <li>Payments are non-refundable except as required by law</li>
                <li>We may change pricing with 30 days notice</li>
                <li>You can cancel your subscription at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The Service and its content (excluding user-generated content) are owned by us and protected by intellectual property laws. You retain ownership of content you submit, but grant us a license to use it to provide the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. AI-Generated Content</h2>
              <p className="text-muted-foreground mb-4">
                AI-generated content is provided &quot;as is&quot; and may contain errors or inaccuracies. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Accuracy or completeness of AI responses</li>
                <li>That AI outputs are suitable for your specific purpose</li>
                <li>That AI-generated content does not infringe third-party rights</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                You are responsible for verifying AI-generated content before use, especially for critical decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Disclaimers and Limitations of Liability</h2>
              <p className="text-muted-foreground mb-4">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
              <p className="text-muted-foreground mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may suspend or terminate your access to the Service:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>If you violate these Terms</li>
                <li>If your account is inactive for an extended period</li>
                <li>For any reason with notice (unless immediate action is required)</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                You may terminate your account at any time through your account settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We may modify these Terms at any time. We will notify you of material changes by email or through the Service. Your continued use after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law provisions. Any disputes shall be resolved in the courts of [Your Jurisdiction].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms, please contact us at:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>Email: legal@aichatbot.com</li>
                <li>Address: 123 AI Street, Tech City, TC 12345</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
