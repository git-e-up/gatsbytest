import React from "react";
import styles from "../styles/sassy-stuff.scss";

import Container from "../components/container";


const User = props => (
  <div>
    <img src={props.avatar} alt="" />
    <div>
      <div>{props.username}</div>
      <h4>{props.excerpt}</h4>
    </div>
  </div>
);

export default () => (
  <Container>
    <h1>About Styled Components</h1>
    <p>Styled Components is cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
);
