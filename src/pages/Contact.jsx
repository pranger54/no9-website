import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Fade from "../components/Fade";
import PageHero from "../components/PageHero";
import { Muted } from "../components/Shared";
import { colors, faint, fonts, media, pagePadding } from "../theme";
import { PHOTOS } from "../data/photos";

const DETAILS = [
  ["Studio", "99/5172 Moo 2, Tha it, Pak kret, Nonthaburi 11120"],
  ["Email", "studio@numbernineassociate.com"],
  ["Phone", "+66 2 458 8178"],
  ["Hours", "Mon – Fri · 9:00 – 18:00"],
];

const Wrap = styled.section`
  padding-top: 4rem;
  padding-bottom: 7rem;
  background: ${colors.ink};
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  ${pagePadding}

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  ${media.mobile} {
    padding-top: 2.5rem;
    padding-bottom: 4rem;
  }
`;

/* Name + Email sit side by side on desktop, stack on phones */
const Row = styled.div`
  display: flex;
  gap: 1.25rem;

  ${media.mobile} {
    flex-direction: column;
  }
`;

const Detail = styled.div`
  padding: 1.25rem 0;
  border-bottom: 0.5px solid ${faint(0.07)};
`;

const DetailLabel = styled.div`
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.gold};
  margin-bottom: 0.4rem;
  font-weight: 300;
`;

const DetailValue = styled.div`
  font-size: 0.95rem;
  color: ${faint(0.6)};
  font-weight: 200;
`;

const ThanksTitle = styled.div`
  font-family: ${fonts.serif};
  font-size: 1.8rem;
  font-weight: 300;
  color: ${colors.offwhite};
`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        label="Contact"
        photo={PHOTOS.testimonial}
        title={<>Ready to build something <em style={{ color: colors.gold }}>that endures?</em></>}
      />

      <Wrap>
        <Fade delay={100}>
          {DETAILS.map(([label, value]) => (
            <Detail key={label}>
              <DetailLabel>{label}</DetailLabel>
              <DetailValue>{value}</DetailValue>
            </Detail>
          ))}
        </Fade>

        {sent ? (
          <Stack justifyContent="center" spacing={2}>
            <ThanksTitle>Thank you.</ThanksTitle>
            <Muted>
              Your message has been noted. We respond to every enquiry within
              two working days.
            </Muted>
          </Stack>
        ) : (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <Row>
                <TextField required placeholder="Name" />
                <TextField required type="email" placeholder="Email" />
              </Row>
              <TextField placeholder="Project location" />
              <TextField required multiline rows={6} placeholder="Tell us about your vision…" />
              <Button type="submit" variant="contained" sx={{ alignSelf: "flex-start" }}>
                Send Message
              </Button>
            </Stack>
          </form>
        )}
      </Wrap>
    </>
  );
}
