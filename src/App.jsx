import { useState } from "react";
import {
  Container,
  Button,
  Typography,
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
import toast, { Toaster } from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import logo from "./assets/logo.png";
import imagen1 from "./assets/img/imagen1.jpg";
import imagen2 from "./assets/img/imagen2.jpg";
import imagen3 from "./assets/img/imagen3.jpg";

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

// Imágenes para el carrusel - usando las imágenes locales
const carouselImages = [
  {
    src: imagen1,
    alt: "Futpadel Club - Instalaciones",
    title: "Nuestras Instalaciones",
  },
  {
    src: imagen2,
    alt: "Futpadel Club - Canchas de Pádel",
    title: "Canchas de Pádel",
  },
  {
    src: imagen3,
    alt: "Futpadel Club - Canchas de Futbolito",
    title: "Canchas de Futbolito",
  },
];

// Configuración del carrusel
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
  fade: true,
  cssEase: "linear",
};

function App() {
  const [activeButton, setActiveButton] = useState(null);

  // Datos de contacto
  const phone = "56952626330";
  const whatsappMessage =
    "🏆 Hola! Vengo desde el enlace de Futpadel Club. Me gustaría hacer una reserva. ¿Podrían ayudarme? 🎾⚽";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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
      toast.success("¡Datos bancarios copiados! 😃", {
        duration: 2500,
        position: "bottom-center",
        style: {
          background: logoColors.green,
          color: "white",
          fontWeight: "bold",
          borderRadius: "25px",
          padding: "12px 20px",
        },
        iconTheme: {
          primary: "white",
          secondary: logoColors.green,
        },
      });
      setTimeout(() => setActiveButton(null), 200);
    } catch (err) {
      console.error("Error al copiar", err);
      toast.error("Error al copiar los datos", {
        duration: 2500,
        position: "bottom-center",
        style: {
          background: "#f44336",
          color: "white",
          fontWeight: "bold",
          borderRadius: "25px",
          padding: "12px 20px",
        },
      });
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
            paddingTop: 2,
            paddingBottom: 4,
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

        {/* Image Carousel Section */}
        <Box sx={{ mb: 4, mx: 2 }}>
          <Slider {...carouselSettings}>
            {carouselImages.map((image, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    position: "relative",
                    height: "200px",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      color: "white",
                      padding: "20px 15px 15px",
                      borderRadius: "0 0 15px 15px",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {image.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
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
                  color: "white",
                  "@media (hover: none)": {
                    backgroundColor: logoColors.green,
                    color: "white",
                  },
                },
                "&:active": {
                  backgroundColor: logoColors.blue,
                  color: "white",
                  transform: "scale(0.98)",
                },
                "&:focus": {
                  backgroundColor: logoColors.green,
                  color: "white",
                },
                transition: "all 0.2s ease-in-out",
                touchAction: "manipulation",
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
                    ? logoColors.darkBlue
                    : logoColors.green,
                color: "white",
                transform:
                  activeButton === "agenda" ? "scale(0.98)" : "scale(1)",
                "&:hover": {
                  backgroundColor: logoColors.blue,
                  color: "white",
                  "@media (hover: none)": {
                    backgroundColor: logoColors.green,
                    color: "white",
                  },
                },
                "&:active": {
                  backgroundColor: logoColors.blue,
                  color: "white",
                  transform: "scale(0.98)",
                },
                "&:focus": {
                  backgroundColor: logoColors.green,
                  color: "white",
                },
                transition: "all 0.2s ease-in-out",
                touchAction: "manipulation",
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
                    ? logoColors.darkBlue
                    : logoColors.green,
                color: "white",
                transform:
                  activeButton === "instagram" ? "scale(0.98)" : "scale(1)",
                "&:hover": {
                  backgroundColor: logoColors.blue,
                  color: "white",
                  "@media (hover: none)": {
                    backgroundColor: logoColors.green,
                    color: "white",
                  },
                },
                "&:active": {
                  backgroundColor: logoColors.blue,
                  color: "white",
                  transform: "scale(0.98)",
                },
                "&:focus": {
                  backgroundColor: logoColors.green,
                  color: "white",
                },
                transition: "all 0.2s ease-in-out",
                touchAction: "manipulation",
              }}
            >
              Síguenos en Instagram
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsApp />}
              href={whatsappUrl}
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
                  color: "white",
                  "@media (hover: none)": {
                    backgroundColor: logoColors.green,
                    color: "white",
                  },
                },
                "&:active": {
                  backgroundColor: logoColors.blue,
                  color: "white",
                  transform: "scale(0.98)",
                },
                "&:focus": {
                  backgroundColor: logoColors.green,
                  color: "white",
                },
                transition: "all 0.2s ease-in-out",
                touchAction: "manipulation",
              }}
            >
              Reservar por WhatsApp
            </Button>
          </Stack>
        </Box>

        {/* Toast notifications */}
        <Toaster />
      </Container>
    </ThemeProvider>
  );
}

export default App;
