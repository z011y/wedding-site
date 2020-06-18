import styled from "styled-components";

import Layout from "../components/layout";

export default function Information() {
  return (
    <Layout>
      <Content>
        <h1>information</h1>
        <Alert>
          <p>
            due to covid-19, we will be limiting our wedding guests to a small
            group of close family and friends
            <br />
            we hope this website will help share this celebration with all those
            who aren't able to attend
          </p>
        </Alert>
        <Container>
          <Column>
            <h2>wedding video</h2>
            <p>coming soon</p>
          </Column>
          <Column>
            <h2>livestream</h2>
            <p>coming soon</p>
          </Column>
          <Column>
            <h2>details</h2>
            <p>
              date: august 15th, 2020
              <br />
              location: fairfield, ca
              <br />
            </p>
          </Column>
        </Container>
      </Content>
      <Content>
        <h1>about the bride and groom</h1>
        <Text>
          They met in the least romantic location: Ms. Wray's AP Statistics
          classroom. Nicole's partner was gone so Ms. Wray made Cameron move
          from his seat in the back row, to the seat in the front row next to
          Nicole. Apparently Cameron was known for being LDS, so Nicole mustered
          up the courage to say "I think I'm going to your church on Sunday."
          After that, they continued to run into each other all the time.
          Cameron asked Nicole to Mormon Prom and then to high school Prom.
          <br />
          <br />
          They continued to see each other as much as possible after high school
          graduation. Eventually, Cameron asked Nicole to offically be his
          girlfriend on July 17th, 2015 by singing Brown Eyed Girl on his
          guitar. Later, after watching a movie on the projector screen on the
          trampoline in Cameron's parent's backyard, they had their first kiss.
          After seeing a shooting star, Nicole asked Cameron to make a wish. He
          said he made one but couldn't tell her or it wouldn't come true. He
          was thinking of a smooth way to kiss her at the moment and missed the
          obvious hint she was giving him. Eventually, another shooting star
          came across the sky and Nicole again asked Cameron to make a wish. He
          realized now that he missed the perfect opportunity and hoped he would
          see one more shooting star to save him. There were no more shooting
          stars, instead Nicole asked "Are you ready to tell me your wish?" He
          replied "Yes." and went in for the kiss.
          <br />
          <br />
          In August 2015 Cameron left California to go to BYU Idaho while Nicole
          went down to UC Santa Cruz. There were many facetime calls and even a
          flight from Idaho to California during Halloween. They hardly survived
          the semester. Once the semester was over, Cameron moved back to
          California and got his first job at the RH Outlet in Vacaville. He
          travelled down to Santa Cruz almost every weekend to visit Nicole and
          eventually moved there in preparation to transfer to UC Santa Cruz
          after changing his major to Biotechnology. After visiting Utah and
          realizing how much cheaper school and housing would be there, Cameron
          and Nicole moved to Utah and started school at UVU.
          <br />
          <br />
          After moving in to their first apartment together, they realized
          things would be a little harder than they imagined. They managed to
          get jobs and start paying rent. Once they started school, things got a
          little harder. Eventually, they got the hang of things and Cameron
          graduated from Bottega Code School as a Full-Stack Web Developer. They
          also adopted a puppy named Piper, which may just be the best thing
          that ever happened to them.
        </Text>
        <img src="/piper-before.png" alt="" />
        <Caption>Piper: then</Caption>
        <img src="/piper-after.png" alt="" />
        <Caption>Piper: now</Caption>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  padding: 100px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 30px;
  }

  h4 {
    text-align: center;
  }

  img {
    width: 50%;
    align-self: center;
    margin-top: 50px;

    @media (max-width: 925px) {
      width: 75%;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  @media (max-width: 925px) {
    padding: 50px;
    padding-top: 100px;
  }

  @media (max-width: 800px) {
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

const Column = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
  border: 5px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 50px;
  }

  p {
    text-align: center;
    line-height: 30px;
  }
`;

const Alert = styled.div`
  padding: 10px;
  background-color: rgba(242, 242, 242, 1);
  margin-bottom: 50px;

  p {
    align-self: center;
    line-height: 30px;
    text-align: center;
  }
`;

const Text = styled.p`
  width: 50vw;
  align-self: center;
  line-height: 40px;

  @media (max-width: 925px) {
    width: 75vw;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Caption = styled.p`
  align-self: center;
  width: 50%;
  margin-bottom: 50px;
`;
