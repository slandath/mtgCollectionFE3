import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "calc(5% + 60px)",
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "primary.main",
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <IconButton
            href="https://github.com/slandath/mtgCollectionFE3"
            target="_blank"
            style={{ color: "white" }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "white" }}>
            Created by&nbsp;
            <a
              href="https://rakazirut.github.io"
              target="_blank"
              style={{ color: "#FF8C00", textDecoration: "none" }}
            >
              Rob Kazirut
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://slandath.github.io"
              target="_blank"
              style={{ color: "#FF8C00", textDecoration: "none" }}
            >
              Tom Slanda
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
