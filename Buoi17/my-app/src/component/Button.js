import styled from "styled-components";

import React from "react";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Button() {
  return (
    <div className="button">
      <Title>
        <h1>hello</h1>
      </Title>
    </div>
  );
}
