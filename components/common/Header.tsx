import React from "react";
import Head from "next/head";
import Script from "next/script";

type IProps = {
  title: string;
};
type IState = {};

class Header extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <Script
          src="https://kit.fontawesome.com/53a805d199.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        ></Script>
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Roomey" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content={this.props.title} />
          <meta name="theme-color" content="#0a337a" />
          <link
            rel="icon"
            type="image/vnd.microsoft.icon"
            sizes="32x32"
            href="/favicon.ico"
          />
          <link
            rel="icon"
            type="image/vnd.microsoft.icon"
            sizes="16x16"
            href="/favicon.ico"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icons/192.png" />
          <title>{this.props.title}</title>
        </Head>
      </React.Fragment>
    );
  }
}
export default Header;
