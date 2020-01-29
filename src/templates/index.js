import Helmet from "react-helmet";
import React from "react";

import userConfig from "../../config";

import Layout from "./layout";

import Card from "../components/Card";
import Container from "../components/Container";
import Pagination from "../components/Pagination";
import Summary from "../components/Summary";
import Intro from "../components/Intro";

const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <Layout>
      <Container>
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: "en" }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
        </Helmet>
        <Intro>
          Hi, I'm Lena Zerlav! I'm a multimedia artist, with a background in
          film studies. I've always had a passion for watching movies that
          resonate with me in a deep emotional level so I've decided to share
          thses ideas in the form of a weekly blog. Every week I will be
          reviewing a movie or TV show, going through the technical, and
          cinematographical impact I feel it has to me and to the world at
          large. Hopefully we can find some common ground and create forum where
          we can share ideas.
        </Intro>
        {group.map(({ node }) => (
          <Card key={node.fields.slug}>
            <Summary
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              image={node.frontmatter.featuredImage}
              slug={node.fields.slug}
            />
          </Card>
        ))}
        <Pagination
          isFirst={index === 1}
          isLast={index === pageCount}
          nextUrl={nextUrl}
          previousUrl={previousUrl}
        />
      </Container>
    </Layout>
  );
};
export default IndexPage;
