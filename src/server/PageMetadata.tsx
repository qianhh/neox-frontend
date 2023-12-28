// SPDX-License-Identifier: LicenseRef-Blockscout

import Head from 'next/head';
import type { Route } from 'nextjs-routes';
import React from 'react';

import type { Props as PageProps } from 'src/server/getServerSideProps/handlers';

// import * as metadata from 'src/shell/metadata';

import config from 'src/config';

interface Props<Pathname extends Route['pathname']> {
  pathname: Pathname;
  query?: PageProps<Pathname>['query'];
  apiData?: PageProps<Pathname>['apiData'];
}

const title = 'NeoX Blockchain Explorer';
const description = 'NeoX blockchain explorer allows you to explore and search the Neox blockchain for transactions, addresses, tokens, prices and other activities taking place on NeoX';
const opengraph = {
  title: 'NeoX Blockchain Explorer',
  description: 'NeoX blockchain explorer allows you to explore and search the Neox blockchain for transactions, addresses, tokens, prices and other activities taking place on NeoX',
  imageUrl: 'https://neo-web.azureedge.net/images/twitter-img.jpg',
  url: 'https://xt1scan.ngd.network/',
};

const PageMetadata = <Pathname extends Route['pathname']>(props: Props<Pathname>) => {
  // const { title, description, opengraph, canonical } = metadata.generate(props, props.apiData);

  return (
    <Head>
      <title>{ title }</title>
      <meta name="description" content={ description }/>

      { /* OG TAGS */ }
      <meta property="og:title" content={ opengraph.title }/>
      { opengraph.description && <meta property="og:description" content={ opengraph.description }/> }
      { opengraph.imageUrl && <meta property="og:image" content={ opengraph.imageUrl }/> }
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={ opengraph.url }/>
      <meta property="og:site_name" content={ opengraph.title }/>
      <meta property="og:image:alt" content="Visit NeoX Blockchain Explorer"/>

      { /* Twitter Meta Tags */ }
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content={ config.app.host }/>
      <meta name="twitter:title" content={ opengraph.title }/>
      { opengraph.description && <meta name="twitter:description" content={ opengraph.description }/> }
      <meta name="twitter:site" content="@neo_blockchain"/>
      { opengraph.imageUrl && <meta property="twitter:image" content={ opengraph.imageUrl }/> }

      { /* Prevent auto zoom in inputs on mobile */ }
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    </Head>
  );
};

export default PageMetadata;
