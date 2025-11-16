import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Privacy Policy | AI Chatbot',
  description: 'Privacy Policy for AI Chatbot - Learn how we protect your data',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to AI ChatBot (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI chatbot service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Account information (email, username, password)</li>
                <li>Conversation data and chat messages</li>
                <li>Files and attachments you upload</li>
                <li>Usage data and preferences</li>
                <li>Payment information (processed securely by third-party providers)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your requests and transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>End-to-end encryption for data in transit</li>
                <li>Encrypted storage for data at rest</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure data centers with redundancy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>With your consent</li>
                <li>With service providers who assist our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. AI Model Training</h2>
              <p className="text-muted-foreground mb-4">
                We do not use your conversations to train AI models. Your data remains private and is only used to provide you with our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data (right to be forgotten)</li>
                <li>Export your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li>Email: privacy@aichatbot.com</li>
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
