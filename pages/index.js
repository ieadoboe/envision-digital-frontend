import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Envision Digital | Home</title>
        <meta name="keywords" content="digital" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className='container'>
        <h1>Homepage</h1>
        <p>
          Advertising is a marketing communication that employs an openly
          sponsored, non-personal message to promote or sell a product, service
          or idea. The Best Advertising Campaigns of All Time (And What Made
          Them Successful ) Nike: Just Do It. Ad Campaign: Print, Television,
          Internet. Source: brandchannel. Coke: Share a Coke. Ad Campaign:
          Print. Absolut Vodka: The Absolut Bottle. Ad Campaign: Print.
          Anheuser-Busch: Whassup (1999) Ad Campaign: Television
        </p>
      </div>
    </>
  );
}
