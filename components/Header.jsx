import { Button } from "@/components/ui/button"; // Import từ ShadCN UI
import UserMenu from "@/components/UserMenu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="container mx-auto">
            <nav className="py-6 px-4 flex justify-between items-center">
                <Link href="/">
                    <Image
                        src={"/logo2.png"}
                        alt="Zscrum Logo"
                        width={200}
                        height={56}
                        className="h-10 w-auto object-contain"
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/project/create">
                        <Button
                            variant="destructive"
                            className="flex items-center gap-2"
                        >
                            <PenBox size={18} />
                            <span className="hidden md:inline">
                                Create Project
                            </span>
                        </Button>
                    </Link>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/onboarding">
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserMenu />
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
};
export default Header;
