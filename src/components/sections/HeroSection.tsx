import { ChevronDown, Code } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 text-center">

            {/* Content Container - Centers vertically in available space */}
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl mx-auto pt-20 pb-8">

                {/* Code Icon with Pulse Effect */}
                <ScrollReveal delay={0} distance={20}>
                    <div className="relative mb-4 group">
                        <div className="absolute inset-0 bg-accent-pink/20 rounded-full blur-xl animate-glow-pulse" />
                        <div className="relative p-4 bg-space-light/5 border border-accent-pink/30 rounded-full">
                            <Code size={48} className="text-accent-pink" />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Role Label */}
                <ScrollReveal delay={100} distance={20}>
                    <div className="flex items-center gap-2 mb-4 text-accent-pink tracking-widest font-heading text-sm uppercase">
                        <span>✨</span>
                        <span>Software Developer</span>
                        <span>✨</span>
                    </div>
                </ScrollReveal>

                {/* Main Heading */}
                <ScrollReveal delay={200} distance={20}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-4 glitch-text leading-tight">
                        <span className="text-text-primary">Welcome. I&apos;m </span>
                        <span className="bg-gradient-to-r from-accent-pink to-accent-gold bg-clip-text text-transparent">
                            Indigo
                        </span>
                    </h1>
                </ScrollReveal>

                {/* Intro Paragraph */}
                <ScrollReveal delay={300} distance={20}>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-text-secondary font-body leading-relaxed mb-8">
                        I&apos;ve launched into the software development universe and never looked back. Currently turning ideas into interfaces, one constellation of code at a time.
                    </p>
                </ScrollReveal>

                {/* CTA Buttons */}
                <ScrollReveal delay={400} distance={20}>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button href="#skills" variant="primary" className="glitch-text">
                            View My Skills
                        </Button>
                        <Button href="#contact" variant="outline" className="glitch-text">
                            Get In Touch
                        </Button>
                        <Button
                            href="/resume/Indigo-Resume.pdf"
                            variant="ghost"
                            className="text-accent-pink hover:bg-accent-pink/10"
                            download="Indigo-Resume.pdf"
                        >
                            Download Resume
                        </Button>
                    </div>
                </ScrollReveal>
            </div>

            {/* Scroll Indicator */}
            <ScrollReveal delay={1000} direction="down" distance={10}>
                <div className="flex-none pb-8 flex flex-col items-center gap-2 text-text-secondary animate-bounce z-20">
                    <span className="text-xs tracking-widest font-body uppercase">Scroll</span>
                    <ChevronDown size={20} />
                </div>
            </ScrollReveal>

        </div>
    );
}
