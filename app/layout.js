import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Zcrum",
    description: "Project Management App",
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: shadesOfPurple,
            }}
        >
            <html lang="en">
                <body className={`${inter.className}`}>
                    <ThemeProvider attribute="class" defaultTheme="dark">
                        <Header />
                        <main className="min-h-screen">{children}</main>
                        <footer className="bg-gray-900 p-12">
                            <div className="container mx-auto px-4 text-center text-gray-200">
                                <p>Made with by Han Nhat</p>
                            </div>
                        </footer>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
