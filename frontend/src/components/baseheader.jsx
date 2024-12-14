import Header from './header';

const BaseLayout = ({ children }) => {
  return (
    <>
    <Header />
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
    </>
  );
};

export default BaseLayout;
