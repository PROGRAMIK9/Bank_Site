import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";
import {redirect, useRouter}  from "next/navigation";
import * as Sentry from '@sentry/nextjs';
import type { Metadata } from 'next';
// app/{root}/layout.tsx
export function generateMetadata(): Metadata {
return {
  // ... your existing metadata
  other: {
    ...Sentry.getTraceData()
  }
};
}
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const loggedUser = await getLoggedInUser();
  if(!loggedUser) redirect('sign-in');
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedUser} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
          <div><MobileNav user={loggedUser}/></div>
        </div>
        {children}  
      </div> 
        
    </main>
  );
}
