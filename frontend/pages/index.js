import Layout from "../components/Layout";
import Link from 'next/link';

const Index = () => {
  console.log("This is index page");
  return (
    <Layout>
      <p>Index Page</p>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </Layout>
  );
};

export default Index;
