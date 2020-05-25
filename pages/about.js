import Layout from '../components/Layout';
import Highlight from '../components/Highlight';

export default function About() {
  return (
    <Layout pageTitle="About">
      <h1 className="mb-4 text-3xl font-semibold md:text-4xl">About Evan</h1>
      <div className="space-y-4 md:space-y-6">
        <p>Hi there! I'm Evan Burrell.</p>
        <p>
          I'm a
          <Highlight additionalClasses="mx-2">Software Developer</Highlight>
          from Northern California, currently residing in the United Kingdom
          <span className="ml-2" aria-label="United Kingdom">
            🇬🇧
          </span>
          .
        </p>
        <p>
          By day, I work for an e-commerce company writing
          <Highlight additionalClasses="ml-2">PHP</Highlight> and
          <Highlight additionalClasses="ml-2">Javascript</Highlight>.
        </p>
        <p>
          I enjoy all aspects of web development. Currently focused on React.js,
          Laravel, Next.js, Magento, performance, and testing.
        </p>
        <p>
          After hours, you can find me playing ultimate frisbee, running or
          enjoying a good cup of coffee with my family.
        </p>
        <p>
          Want to get in touch?
          <a
            href="https://mobile.twitter.com/ev_burrell"
            className="ml-2 font-semibold text-blue-900 border-b-2"
          >
            @ev_burrell
          </a>
        </p>
      </div>
    </Layout>
  );
}
