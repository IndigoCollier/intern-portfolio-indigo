import { ChevronDown, Code } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 text-center">

            {/* Content Container - Centers vertically in available space */}
            {/* Using flex-grow and justify-center to center content, but ensuring it pushes against the bottom element */}
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl mx-auto pt-32 pb-12">

                {/* Code Icon with Pulse Effect */}
                <div className="relative mb-8 group">
                    <div className="absolute inset-0 bg-accent-pink/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative p-4 bg-space-light/5 border border-accent-pink/30 rounded-full">
                        <Code size={48} className="text-accent-pink" />
                    </div>
                </div>

                {/* Role Label */}
                <div className="flex items-center gap-2 mb-6 text-accent-pink tracking-widest font-heading text-sm animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <span>✨</span>
                    <span>FRONTEND DEVELOPER</span>
                    <span>✨</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 animate-fade-in-up glitch-text" style={{ animationDelay: "0.2s" }}>
                    <span className="text-text-primary">Welcome. I&apos;m </span>
                    <span className="bg-gradient-to-r from-accent-pink to-accent-gold bg-clip-text text-transparent">
                        Indigo
                    </span>
                </h1>

                {/* Intro Paragraph */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary font-body leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    I've launched into the software development universe and never looked back. Currently turning ideas into interfaces, one constellation of code at a time.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <Button href="#skills" variant="primary" className="glitch-text">
                        View My Skills
                    </Button>
                    <Button href="#contact" variant="outline" className="glitch-text">
                        Get In Touch
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator - Fixed height allocation at bottom */}
            <div className="flex-none pb-8 flex flex-col items-center gap-2 text-text-secondary animate-bounce z-20">
                <span className="text-xs tracking-widest font-body uppercase">Scroll</span>
                <ChevronDown size={20} />
            </div>

        </div>
    );
}
