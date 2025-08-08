import Image from "next/image";

// app/{auth}/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>  
      {children}      
    </main>
       
  );
}
