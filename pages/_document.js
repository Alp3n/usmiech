import Document, { Html, Head, Main, NextScript } from 'next/document';
import { mediaStyle } from '../components/MediaQueries';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <style
            type='text/css'
            dangerouslySetInnerHTML={{ __html: mediaStyle }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-MNR2WBR'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
