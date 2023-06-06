"use client";

import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme";
import ResetCSS from "common/assets/css/style";
import Sticky from "react-stickynode";
import Image from "next/image";
import styles from "./page.module.css";
import TeamPortfolioSection from "../containers/TeamPortfolio";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "common/assets/css/webpage";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <TeamPortfolioSection/>
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
