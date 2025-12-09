
export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900/50 py-8 border-t border-neutral-800">
            <div className="container mx-auto px-6 text-center text-neutral-400 text-sm">
                <p>&copy; {currentYear} Vishwajeet Singh. All rights reserved.</p>
            </div>
        </footer>
    );
};
