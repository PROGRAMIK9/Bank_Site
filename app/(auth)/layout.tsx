import Image from "next/image";

// app/{auth}/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className = "flex min-h-screen w-full justify-between font-inter">  
      {children}      
      <div className="auth-asset">
        <div>
          <Image src = "/icons/auth-image.svg" alt ="auth-img" width={500} height={500}/>
        </div>
      </div>
    </main>
       
  );
}
