"use client";

import Button from "@/components/ui/Button";

/**
 * ContactSection
 *
 * Displays a contact form with fields for Name, Email, Subject, and Message.
 * Visual only for Task 5 — submission logic will be added in Task 7.
 */
export default function ContactSection() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
                <span className="text-accent-pink tracking-widest font-heading text-sm uppercase">
                    Let&apos;s Connect
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mt-2 mb-4">
                    Get In Touch
                </h2>
                <p className="max-w-2xl mx-auto text-text-secondary font-body">
                    I&apos;m currently open to opportunities and would love to connect.
                    Whether you have a question or just want to say hi, feel free to reach out.
                </p>
            </div>

            {/* Contact Form */}
            <form className="animate-fade-in-up delay-200 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-heading font-bold text-text-secondary uppercase tracking-wider">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="w-full bg-space-light/5 border border-space-card-border/30 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-heading font-bold text-text-secondary uppercase tracking-wider">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            className="w-full bg-space-light/5 border border-space-card-border/30 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all"
                        />
                    </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-heading font-bold text-text-secondary uppercase tracking-wider">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="What's this about?"
                        className="w-full bg-space-light/5 border border-space-card-border/30 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all"
                    />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-heading font-bold text-text-secondary uppercase tracking-wider">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={6}
                        placeholder="Tell me what's on your mind..."
                        className="w-full bg-space-light/5 border border-space-card-border/30 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all resize-none"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                    <Button type="submit" variant="primary">
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    );
}
