import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "../components/Fade";
import PageHero from "../components/PageHero";
import { Muted } from "../components/Shared";
import { colors, faint, fonts, media, pagePadding } from "../theme";
import { PHOTOS } from "../data/photos";
import { CONTACT } from "../data/contact";

/* ── Where the form sends ──
   Web3Forms delivers to whichever inbox the access key was created for.
   Put the key in .env as VITE_WEB3FORMS_KEY — see .env.example. */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const ENDPOINT = "https://api.web3forms.com/submit";

const DETAILS = [
  ["Studio", CONTACT.address],
  ["Email", CONTACT.email],
  ["Phone", CONTACT.phone],
  ["Hours", CONTACT.hours],
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
  word-break: break-word;
`;

const DetailLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${colors.gold};
  }
`;

const ThanksTitle = styled.div`
  font-family: ${fonts.sans};
  font-size: 1.8rem;
  font-weight: 300;
  color: ${colors.offwhite};
`;

/* Invisible field — real people never fill it in, bots usually do.
   If it comes back with a value, we silently drop the message. */
const Honeypot = styled.input`
  position: absolute;
  left: -9999px;
  opacity: 0;
  height: 0;
  width: 0;
`;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    /* Spam trap */
    if (data.get("botcheck")) return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setError(
        `The contact form is not connected yet. Please email us directly at ${CONTACT.email}.`,
      );
      return;
    }

    setStatus("sending");
    setError("");

    data.append("access_key", ACCESS_KEY);
    data.append("subject", `New enquiry from ${data.get("name")} — numbernineassociate.com`);
    data.append("from_name", "Number Nine Associate website");
    /* Hitting "Reply" in your inbox replies straight to the enquirer */
    data.append("replyto", data.get("email"));

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(
          result.message ||
            `Something went wrong. Please email us directly at ${CONTACT.email}.`,
        );
      }
    } catch {
      setStatus("error");
      setError(
        `Could not reach the server — please check your connection, or email us at ${CONTACT.email}.`,
      );
    }
  };

  const sending = status === "sending";

  return (
    <>
      <PageHero
        label="Contact"
        photo={PHOTOS.testimonial}
        title={
          <>
            Ready to build something{" "}
            <em style={{ color: colors.gold }}>that endures?</em>
          </>
        }
      />

      <Wrap>
        <Fade delay={100}>
          {DETAILS.map(([label, value]) => (
            <Detail key={label}>
              <DetailLabel>{label}</DetailLabel>
              <DetailValue>
                {label === "Email" ? (
                  <DetailLink href={`mailto:${value}`}>{value}</DetailLink>
                ) : label === "Phone" ? (
                  <DetailLink href={`tel:${value.replace(/\s/g, "")}`}>{value}</DetailLink>
                ) : (
                  value
                )}
              </DetailValue>
            </Detail>
          ))}
        </Fade>

        {status === "sent" ? (
          <Stack justifyContent="center" spacing={2}>
            <ThanksTitle>Thank you.</ThanksTitle>
            <Muted>
              Your message has been sent. We respond to every enquiry within two
              working days.
            </Muted>
            <Button
              variant="text"
              onClick={() => setStatus("idle")}
              sx={{ alignSelf: "flex-start", pl: 0 }}
            >
              Send another message
            </Button>
          </Stack>
        ) : (
          <form onSubmit={handleSubmit} noValidate={false}>
            <Stack spacing={2.5}>
              {status === "error" && (
                <Alert
                  severity="error"
                  variant="outlined"
                  onClose={() => setStatus("idle")}
                  sx={{ borderRadius: "1px" }}
                >
                  {error}
                </Alert>
              )}

              <Row>
                <TextField required name="name" placeholder="Name" disabled={sending} />
                <TextField
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  disabled={sending}
                />
              </Row>
              <TextField name="location" placeholder="Project location" disabled={sending} />
              <TextField
                required
                name="message"
                multiline
                rows={6}
                placeholder="Tell us about your vision…"
                disabled={sending}
              />

              <Honeypot type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />

              <Button
                type="submit"
                variant="contained"
                disabled={sending}
                sx={{ alignSelf: "flex-start", minWidth: 200 }}
                startIcon={
                  sending ? <CircularProgress size={14} color="inherit" /> : null
                }
              >
                {sending ? "Sending…" : "Send Message"}
              </Button>
            </Stack>
          </form>
        )}
      </Wrap>
    </>
  );
}
