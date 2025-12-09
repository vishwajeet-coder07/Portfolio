import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AntigravityBackground } from '../ui/AntigravityBackground';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-neutral-950 min-h-screen text-neutral-100 font-sans selection:bg-blue-500/30 relative">
            <AntigravityBackground />
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};
