import Box from "@mui/material/Box";
import logo from "../assets/images/logo/logo-white.png";

/* ── NUMBER NINE ASSOCIATE logo ──

   Sized with MUI's responsive `sx` breakpoints (defined in theme.js):
       xs = phone (0–639)   sm = tablet (640–899)   md = desktop (900+)

   Only the HEIGHT is set — `width: auto` lets the image keep its real
   proportions (287 × 164), so it can never stretch or squash.

   Usage:
       <Logo />                      normal — footer
       <Logo small />                compact — nav bar
       <Logo height={{ xs: 28, md: 80 }} />   custom responsive height
       <Logo height={64} />                   custom fixed height

   To swap the logo file, change the import above. */

const SIZES = {
  normal: { xs: 62, sm: 76, md: 92 },
  small: { xs: 46, sm: 56, md: 68 },
};

export default function Logo({ small = false, height, sx }) {
  return (
    <Box
      component="img"
      src={logo}
      alt="Number Nine Associate"
      sx={{
        display: "block",
        flexShrink: 0,
        width: "auto",
        height: height ?? (small ? SIZES.small : SIZES.normal),
        objectFit: "contain",
        ...sx,
      }}
    />
  );
}
