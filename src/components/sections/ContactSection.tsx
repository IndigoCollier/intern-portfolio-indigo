"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

/**
 * ContactSection
 *
 * Displays a contact form with fields for Name, Email, Subject, and Message.
 * submissions are handled via Formspree.
 */
export default function ContactSection() {
    const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("SUBMITTING");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("ERROR");
        }
    };
    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
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
            <form className="animate-fade-in-up delay-200 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-heading font-bold text-text-secondary uppercase tracking-wider">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
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
                            name="email"
                            required
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
                        name="subject"
                        required
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
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me what's on your mind..."
                        className="w-full bg-space-light/5 border border-space-card-border/30 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-pink focus:ring-1 focus:ring-accent-pink transition-all resize-none"
                    />
                </div>

                {/* Status Messages */}
                {status === "SUCCESS" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500 text-center animate-fade-in-up">
                        Message sent successfully! I&apos;ll get back to you soon.
                    </div>
                )}
                {status === "ERROR" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-center animate-fade-in-up">
                        Something went wrong. Please try again or email me directly.
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                    <Button
                        type="submit"
                        variant="primary"
                        disabled={status === "SUBMITTING" || status === "SUCCESS"}
                    >
                        {status === "SUBMITTING" ? "Sending..." : "Send Message"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
