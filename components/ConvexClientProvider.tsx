'use client'

import {ClerkProvider} from '@clerk/nextjs';
import {ConvexReactClient} from "convex/react";
import {ConvexProviderWithClerk} from 'convex/react-clerk';
import {useAuth} from "@clerk/clerk-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


export default function ConvexClientProvider({
 children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}