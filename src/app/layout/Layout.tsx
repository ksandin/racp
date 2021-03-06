import { ReactNode, Suspense } from "react";
import {
  AppBar,
  Box,
  Drawer as MuiDrawer,
  Toolbar as MuiToolbar,
  Container,
  Divider,
  styled,
  CssBaseline,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { LoadingPage } from "../pages/LoadingPage";
import { globalStyles } from "./globalStyles";
import { Logo } from "./Logo";
import { Toolbar } from "./Toolbar";
import { Menu } from "./Menu";

const title = process.env.appTitle;

export function Layout({ children }: { children?: ReactNode }) {
  const width = 240;
  const maxWidth = "xl" as const;
  const contentBounds = {
    width: `calc(100% - ${width}px)`,
    ml: `${width}px`,
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CssBaseline />
      {globalStyles}
      <AppBar position="fixed" sx={contentBounds}>
        <MuiToolbar disableGutters>
          <Container maxWidth={maxWidth} sx={{ display: "flex" }}>
            <Toolbar />
          </Container>
        </MuiToolbar>
      </AppBar>
      <MuiDrawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width,
          },
        }}
        open
      >
        <MuiToolbar>
          <Logo>{title}</Logo>
        </MuiToolbar>
        <Divider />
        <Menu />
      </MuiDrawer>
      <Box component="main" sx={contentBounds}>
        <MuiToolbar />
        <FullscreenContainer maxWidth={maxWidth}>
          <Suspense fallback={<LoadingPage />}>{children}</Suspense>
        </FullscreenContainer>
      </Box>
    </>
  );
}

const FullscreenContainer = styled(Container)`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(3)};
`;
