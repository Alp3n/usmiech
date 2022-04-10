import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Title from '../../components/Title';
import Description from '../../components/Description';

const FaQ = ({ slice }) => (
  <>
    {/* <Title>
      <h2>F&Q</h2>
    </Title> */}
    {slice.items.map((item) => (
      <div key={item.uid}>
        <Title>
          <PrismicRichText field={item.Question} />
        </Title>
        <Description>
          <PrismicRichText field={item.Answer} />
        </Description>
      </div>
    ))}
  </>
);

export default FaQ;
