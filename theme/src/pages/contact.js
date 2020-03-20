import React from "react";
import { Label, Input, Textarea, Button, Styled } from "theme-ui";
import Page from "../components/page";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Page>
      <SEO title="Contact" />
      <Styled.h1>Contact</Styled.h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <Label htmlFor="name" mb={2}>
          Name
        </Label>
        <Input name="name" required mb={3} />

        <Label htmlFor="email" mb={2}>
          Email
        </Label>
        <Input type="email" name="email" required mb={3} />

        <Label htmlFor="message" mb={2}>
          Message
        </Label>
        <Textarea name="message" required rows="6" mb={3} />

        <Button type="submit">Submit</Button>
      </form>
    </Page>
  );
};

export default Contact;
