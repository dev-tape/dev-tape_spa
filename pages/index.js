import Head from "next/head";
import React from "react";
import { Col, Container } from "styled-bootstrap-grid";
import { ColorBlock, ColorBlockContent, ColorBlockTitle } from "../components/block/Block";
import Shadow from "../components/box-shadow/Shadow";
import Button from "../components/button/Button";
import Emoji from "../components/emoji/Emoji";
import Header from "../components/header/Header";
import MainAds from "../components/main/MainAds";
import MainSlider from "../components/main/MainSlider";
import Section from "../components/section/Section";
import Sidebar from "../components/sidebar/Sidebar";
import { Title } from "../components/title/Title";
import { colors, font_size } from "../config/var";

const Index = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <main>
      <Container className="d-flex">
        <Col xs={2} sm={2} md={2} lg={2}>
          <Section>
            <ColorBlock color={colors.accent_4}>
              <ColorBlockTitle color={colors.accent_4}>
                <h5>Browse by</h5>
              </ColorBlockTitle>
              <ColorBlockContent>
                <Button className="mb-2">Events</Button>
                <Button className="mb-2">Speakers</Button>
              </ColorBlockContent>
            </ColorBlock>
            <MainAds className="mt-4" />
          </Section>
        </Col>
        <Col xs={7} sm={7} md={7} lg={7}>
          <Section>
            <Container fluid="true">
              <Shadow color={colors.accent_3}>
                <Title>
                  Newest <Emoji size={font_size.text}>🌈</Emoji>
                </Title>
                <MainSlider className="mb-1" />
              </Shadow>
            </Container>
          </Section>
          <Section>
            <Container fluid="true">
              <Shadow color={colors.accent_2}>
                <Title>
                  Top Rated <Emoji size={font_size.text}>🚀🚀🚀</Emoji>
                </Title>
                <MainSlider className="mb-1" />
              </Shadow>
            </Container>
          </Section>
          <Section>
            <Container fluid="true">
              <Shadow color={colors.accent_4}>
                <Title>
                  Popular on this week{" "}
                  <Emoji size={font_size.text}>🔥🔥🔥</Emoji>
                </Title>
                <MainSlider className="mb-1" />
              </Shadow>
            </Container>
          </Section>
          <Section>
            <Container fluid="true">
              <Shadow color={colors.accent_1}>
                <Title>
                  Live Streams <Emoji size={font_size.text}>🎥✨</Emoji>
                </Title>
                <MainSlider className="mb-1" />
              </Shadow>
            </Container>
          </Section>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          <Section>
            <Sidebar />
          </Section>
        </Col>
      </Container>
    </main>
  </>
);

export default Index;