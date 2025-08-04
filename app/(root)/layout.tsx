import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
// app/{root}/layout.tsx
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const loggedUser = { firstName: 'John', lastName: 'Doe' }; // Example user data
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
