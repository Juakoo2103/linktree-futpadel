import { useEffect, useMemo, useState } from "react";
import {
  Box,
  ButtonBase,
  Container,
  CssBaseline,
  IconButton,
  Stack,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import {
  AccountBalance,
  CalendarToday,
  ContentCopy,
  DarkMode,
  Instagram,
  LightMode,
  LocationOn,
  SportsSoccer,
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

const palettes = {
  light: {
    mode: "light",
    background: "#f4f1ea",
    backgroundOverlay:
      "linear-gradient(180deg, rgba(244,241,234,0.78), rgba(244,241,234,0.96))",
    surface: "rgba(255, 255, 255, 0.82)",
    elevated: "rgba(255, 255, 255, 0.92)",
    border: "rgba(20, 83, 45, 0.14)",
    text: "#14221a",
    muted: "#5c675f",
    primary: "#14532d",
    primaryText: "#ffffff",
    accent: "#d6a21f",
    petrol: "#0f3f46",
    shadow: "rgba(15, 23, 42, 0.18)",
    toggleBackground: "rgba(255, 255, 255, 0.84)",
    galleryOverlay: "linear-gradient(180deg, rgba(8,15,20,0.08), rgba(8,15,20,0.78))",
  },
  dark: {
    mode: "dark",
    background: "#071311",
    backgroundOverlay:
      "linear-gradient(180deg, rgba(7,19,17,0.82), rgba(7,19,17,0.98))",
    surface: "rgba(13, 30, 27, 0.78)",
    elevated: "rgba(18, 39, 35, 0.9)",
    border: "rgba(210, 255, 185, 0.14)",
    text: "#f6fff4",
    muted: "#b6c8bd",
    primary: "#97d44b",
    primaryText: "#071311",
    accent: "#f1c94a",
    petrol: "#49a5a8",
    shadow: "rgba(0, 0, 0, 0.42)",
    toggleBackground: "rgba(18, 39, 35, 0.86)",
    galleryOverlay: "linear-gradient(180deg, rgba(3,8,8,0.04), rgba(3,8,8,0.82))",
  },
};

const getPreferredMode = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const carouselImages = [
  {
    src: imagen1,
    alt: "Futpadel Club - Canchas de padel",
    title: "Canchas de Padel",
    description: "Reserva tu turno y juega en club.",
  },
  {
    src: imagen2,
    alt: "Futpadel Club - Futbolito",
    title: "Futbolito",
    description: "Partidos, amigos y tercer tiempo.",
  },
  {
    src: imagen3,
    alt: "Futpadel Club - Eventos deportivos",
    title: "Eventos",
    description: "Torneos, comunidad y deporte.",
  },
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  arrows: false,
  fade: true,
  cssEase: "ease-in-out",
};

function App() {
  const [activeButton, setActiveButton] = useState(null);
  const [colorMode, setColorMode] = useState(getPreferredMode);
  const colors = palettes[colorMode];

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
          background: {
            default: colors.background,
            paper: colors.elevated,
          },
          text: {
            primary: colors.text,
            secondary: colors.muted,
          },
          primary: {
            main: colors.primary,
            contrastText: colors.primaryText,
          },
          secondary: {
            main: colors.petrol,
          },
        },
        typography: {
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
      }),
    [colorMode, colors]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemModeChange = (event) => {
      setColorMode(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemModeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemModeChange);
    };
  }, []);

  const toggleColorMode = () => {
    setColorMode((currentMode) => (currentMode === "dark" ? "light" : "dark"));
  };

  const phone = "56952626330";
  const whatsappMessage =
    "Hola! Vengo desde el enlace de Futpadel Club. Me gustaria hacer una reserva. Podrian ayudarme?";
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
      setActiveButton("bank");
      await navigator.clipboard.writeText(bankData.trim());
      toast.success("Datos copiados correctamente", {
        duration: 2500,
        position: "bottom-center",
        style: {
          background: colors.elevated,
          color: colors.text,
          fontWeight: 700,
          borderRadius: "18px",
          border: `1px solid ${colors.border}`,
          boxShadow: `0 16px 38px ${colors.shadow}`,
          padding: "12px 18px",
        },
        iconTheme: {
          primary: colors.primary,
          secondary: colors.primaryText,
        },
      });
      setTimeout(() => setActiveButton(null), 180);
    } catch (err) {
      console.error("Error al copiar", err);
      toast.error("Error al copiar los datos", {
        duration: 2500,
        position: "bottom-center",
        style: {
          background: "#b91c1c",
          color: "white",
          fontWeight: 700,
          borderRadius: "18px",
          padding: "12px 18px",
        },
      });
      setTimeout(() => setActiveButton(null), 180);
    }
  };

  const handleTap = (buttonName) => {
    setActiveButton(buttonName);
    setTimeout(() => setActiveButton(null), 180);
  };

  const actionCards = [
    {
      id: "schedule",
      icon: <CalendarToday />,
      title: "Agendar hora",
      description: "Revisa disponibilidad",
      href: "https://futpadel-club-la-tuna.getskedu.com/",
      onClick: () => handleTap("schedule"),
    },
    {
      id: "bank",
      icon: <AccountBalance />,
      title: "Datos bancarios",
      description: "Copia la informacion de pago",
      onClick: handleCopy,
      trailingIcon: <ContentCopy fontSize="small" />,
    },
    {
      id: "instagram",
      icon: <Instagram />,
      title: "Instagram",
      description: "Siguenos y mira novedades",
      href: "https://www.instagram.com/futpadel.club/",
      onClick: () => handleTap("instagram"),
    },
  ];

  const cardSx = (id, featured = false) => ({
    width: "100%",
    minHeight: featured ? 92 : 78,
    px: featured ? 2.25 : 1.75,
    py: featured ? 2 : 1.6,
    borderRadius: featured ? 4 : 3,
    border: `1px solid ${featured ? "rgba(255,255,255,0.24)" : colors.border}`,
    background: featured
      ? `linear-gradient(135deg, ${colors.primary}, ${colors.petrol})`
      : colors.elevated,
    color: featured ? colors.primaryText : colors.text,
    boxShadow: `0 ${featured ? 18 : 12}px ${
      featured ? 44 : 30
    }px ${colors.shadow}`,
    display: "flex",
    alignItems: "center",
    gap: 1.6,
    textAlign: "left",
    transform: activeButton === id ? "scale(0.985)" : "scale(1)",
    transition:
      "transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease",
    touchAction: "manipulation",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: `0 ${featured ? 22 : 16}px ${
        featured ? 54 : 38
      }px ${colors.shadow}`,
    },
    "&:focus-visible": {
      outline: `3px solid ${colors.accent}`,
      outlineOffset: 3,
    },
  });

  const iconSx = (featured = false) => ({
    width: featured ? 52 : 46,
    height: featured ? 52 : 46,
    borderRadius: featured ? 3 : 2.5,
    display: "grid",
    placeItems: "center",
    flex: "0 0 auto",
    color: featured ? colors.primaryText : colors.primary,
    backgroundColor: featured ? "rgba(255,255,255,0.18)" : colors.surface,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          color: colors.text,
          backgroundColor: colors.background,
          backgroundImage: `${colors.backgroundOverlay}, url(${imagen1})`,
          backgroundPosition: "center, center",
          backgroundSize: "cover, cover",
          backgroundAttachment: "fixed",
          transition: "background-color 0.25s ease, color 0.25s ease",
        }}
      >
        <Tooltip title={colorMode === "dark" ? "Modo claro" : "Modo oscuro"}>
          <IconButton
            aria-label={
              colorMode === "dark" ? "Activar modo claro" : "Activar modo oscuro"
            }
            onClick={toggleColorMode}
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
              zIndex: 10,
              width: 44,
              height: 44,
              color: colors.text,
              backgroundColor: colors.toggleBackground,
              border: `1px solid ${colors.border}`,
              boxShadow: `0 12px 28px ${colors.shadow}`,
              backdropFilter: "blur(14px)",
              "&:hover": {
                backgroundColor: colors.elevated,
              },
            }}
          >
            {colorMode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Tooltip>

        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            maxWidth: 520,
            minHeight: "100vh",
            px: { xs: 2, sm: 3 },
            py: { xs: 3, sm: 4 },
            mx: "auto",
          }}
        >
          <Stack spacing={3.2}>
            <Box
              component="header"
              sx={{
                pt: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  width: 132,
                  minHeight: 126,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="Futpadel Club"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Box>

              <Box sx={{ pt: 1 }}>
                <Typography
                  component="h1"
                  sx={{
                    color: colors.muted,
                    fontSize: "1rem",
                    fontWeight: 600,
                    maxWidth: 320,
                  }}
                >
                  Canchas, reservas y comunidad deportiva
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                position: "relative",
                mx: { xs: -0.4, sm: 0 },
              }}
            >
              <Slider {...carouselSettings}>
                {carouselImages.map((image) => (
                  <Box key={image.title}>
                    <Box
                      sx={{
                        position: "relative",
                        height: { xs: 280, sm: 320 },
                        borderRadius: 5,
                        overflow: "hidden",
                        boxShadow: `0 24px 60px ${colors.shadow}`,
                        border: `1px solid ${colors.border}`,
                        backgroundColor: colors.surface,
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background: colors.galleryOverlay,
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: 18,
                          right: 18,
                          bottom: 20,
                          color: "white",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1.55rem",
                            lineHeight: 1,
                            fontWeight: 900,
                          }}
                        >
                          {image.title}
                        </Typography>
                        <Typography
                          sx={{
                            mt: 0.7,
                            color: "rgba(255,255,255,0.82)",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                          }}
                        >
                          {image.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>

            <Stack spacing={1.5}>
              <ButtonBase
                component="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                onClick={() => handleTap("whatsapp")}
                sx={cardSx("whatsapp", true)}
              >
                <Box sx={iconSx(true)}>
                  <WhatsApp fontSize="large" />
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 900, fontSize: "1.08rem" }}>
                    Reservar por WhatsApp
                  </Typography>
                  <Typography sx={{ opacity: 0.84, fontWeight: 600 }}>
                    Agenda tu cancha al instante
                  </Typography>
                </Box>
              </ButtonBase>

              {actionCards.map((action) => (
                <ButtonBase
                  key={action.id}
                  component={action.href ? "a" : "button"}
                  href={action.href}
                  target={action.href ? "_blank" : undefined}
                  rel={action.href ? "noopener" : undefined}
                  onClick={action.onClick}
                  sx={cardSx(action.id)}
                >
                  <Box sx={iconSx()}>{action.icon}</Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 850, fontSize: "1rem" }}>
                      {action.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.2,
                        color: colors.muted,
                        fontSize: "0.88rem",
                        fontWeight: 600,
                      }}
                    >
                      {action.description}
                    </Typography>
                  </Box>
                  {action.trailingIcon}
                </ButtonBase>
              ))}
            </Stack>

            <Box
              component="footer"
              sx={{
                pb: 1,
                color: colors.muted,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.8,
                fontSize: "0.82rem",
                fontWeight: 650,
              }}
            >
              <LocationOn sx={{ fontSize: 17 }} />
              <span>La Tuna</span>
              <SportsSoccer sx={{ fontSize: 17 }} />
              <span>Reservas y comunidad deportiva</span>
            </Box>
          </Stack>
        </Container>

        <Toaster />
      </Box>
    </ThemeProvider>
  );
}

export default App;
