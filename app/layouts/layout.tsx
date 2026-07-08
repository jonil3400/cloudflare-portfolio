import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/header";

export default function Layout() {
      return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col pt-24 transition-colors duration-300">
        <Header 
            activeTab={'about'} 
            setActiveTab={() => {}} 
            openResume={() => {}} 
            isDark={false}
            toggleTheme={() => {}}
        />
        <main className="flex-grow max-w-[1200px] mx-auto px-6 md:px-8 py-16 w-full flex flex-col gap-16 md:gap-24">
            <Outlet />
        </main>

        <Footer setActiveTab={()=>{}} />
    </div>
  );
}