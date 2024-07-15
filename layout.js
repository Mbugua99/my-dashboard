import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>My Dashboard</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chart.js/dist/Chart.min.css" />
      </Head>
      <header>
        <h1>My Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
