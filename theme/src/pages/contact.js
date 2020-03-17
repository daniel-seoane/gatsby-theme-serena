import React from "react";
import { Label, Input, Textarea, Button, Styled } from "theme-ui";
import Page from "../components/page";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Page>
      <SEO title="Contact" />
      <Styled.h1>Contact</Styled.h1>

      <form method="post" netlify-honeypot="bot-field" data-netlify="true" action="/contact/">
        <input type="hidden" name="bot-field" />

        <Label htmlFor="name" mb={2}>
          Name
        </Label>
        <Input name="name" mb={3} />

        <Label htmlFor="email" mb={2}>
          Email
        </Label>
        <Input type="email" name="email" mb={3} />

        <Label htmlFor="message" mb={2}>
          Message
        </Label>
        <Textarea name="message" rows="6" mb={3} />

        <Button type="submit">Submit</Button>
      </form>
    </Page>
  );
};

export default Contact;
