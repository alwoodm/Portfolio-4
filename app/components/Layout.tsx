import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 