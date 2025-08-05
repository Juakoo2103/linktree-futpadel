import { useState } from "react";
import {
  Container,
  Button,
  Typography,
  Snackbar,
  Stack,
  Avatar,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  ContentCopy,
  CalendarToday,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import logo from "./assets/logo.png";

// Colores del logo
const logoColors = {
  green: "#8bc34a",
  blue: "#3f51b5",
  lightGreen: "#9ccc65",
  darkBlue: "#303f9f",
};

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: logoColors.green,
      dark: logoColors.lightGreen,
    },
    secondary: {
      main: logoColors.blue,
      dark: logoColors.darkBlue,
    },
  },
});

function App() {
  const [copied, setCopied] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const bankData = `
  Inversiones Jlt Spa
  77.238.842-K
  Banco Santander
  Cuenta Corriente
  84954250
  cdfutapdel@gmail.com 
  `;

  const handleCopy = async () => {
    try {
      setActiveButton("copy");
      await navigator.clipboard.writeText(bankData.trim());
      setCopied(true);
      setTimeout(() => setActiveButton(null), 200);
    } catch (err) {
      console.error("Error al copiar", err);
      setTimeout(() => setActiveButton(null), 200);
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 200);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
        sx={{
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingY: 4,
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            paddingTop: 4,
            paddingBottom: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              mb: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              overflow: "hidden",
              /* backgroundColor: "white", */
            }}
          >
            <img
              src={logo}
              alt="Futpadel"
              style={{
                width: "90%",
                height: "90%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            Futpadel club
          </Typography>
          <Typography variant="body2">¡Gracias por preferirnos!</Typography>
        </Box>

        {/* Buttons Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2}>
            <Button
              variant="contained"
              startIcon={<ContentCopy />}
              onClick={handleCopy}
              fullWidth
              size="large"
              sx={{
                backgroundColor:
                  activeButton === "copy"
                    ? logoColors.darkBlue
                    : logoColors.green,
                color: "white",
                transform: activeButton === "copy" ? "scale(0.98)" : "scale(1)",
                "&:hover": {
                  backgroundColor: logoColors.blue,
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Copiar datos bancarios
            </Button>
            <Button
              variant="contained"
              startIcon={<CalendarToday />}
              href="https://futpadel-club-la-tuna.getskedu.com/"
              target="_blank"
              rel="noopener"
              fullWidth
              size="large"
              onClick={() => handleButtonClick("agenda")}
              sx={{
                backgroundColor:
                  activeButton === "agenda"
                    ? logoColors.lightGreen
                    : logoColors.blue,
                color: "white",
                transform:
                  activeButton === "agenda" ? "scale(0.98)" : "scale(1)",
                "&:hover": {
                  backgroundColor: logoColors.green,
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Agendar hora
            </Button>
            <Button
              variant="contained"
              startIcon={<Instagram />}
              href="https://www.instagram.com/futpadel.club/"
              target="_blank"
              rel="noopener"
              fullWidth
              size="large"
              onClick={() => handleButtonClick("instagram")}
              sx={{
                backgroundColor:
                  activeButton === "instagram"
                    ? logoColors.lightGreen
                    : logoColors.blue,
                color: "white",
                transform:
                  activeButton === "instagram" ? "scale(0.98)" : "scale(1)",
                "&:hover": {
                  backgroundColor: logoColors.green,
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Síguenos en Instagram
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsApp />}
              href="https://wa.me/56952626330?text=Hola,%20quiero%20hacer%20una%20reserva%20en%20Futpadel%20Club"
              target="_blank"
              rel="noopener"
              fullWidth
              size="large"
              onClick={() => handleButtonClick("whatsapp")}
              sx={{
                backgroundColor:
                  activeButton === "whatsapp"
                    ? logoColors.darkBlue
                    : logoColors.green,
                color: "white",
                transform:
                  activeButton === "whatsapp" ? "scale(0.98)" : "scale(1)",
                "&:hover": {
                  backgroundColor: logoColors.blue,
                },
                transition: "all 0.2s ease-in-out",
              }}
            >
              Reservar por WhatsApp
            </Button>
          </Stack>
        </Box>

        <Snackbar
          open={copied}
          autoHideDuration={2500}
          onClose={() => setCopied(false)}
          message="Datos bancarios copiados"
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
