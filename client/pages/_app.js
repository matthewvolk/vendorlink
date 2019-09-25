import React from "react";
import App, { Container } from "next/app";
import { StripeProvider } from "react-stripe-elements-universal";

class VendorLink extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <StripeProvider apiKey="pk_test_TQb9cUvlHIRLrcxaUcNCItyL001rCgG9kd">
          <Component {...pageProps} />
        </StripeProvider>
      </Container>
    );
  }
}

export default VendorLink;
