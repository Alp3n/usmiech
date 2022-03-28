import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Button from '../../components/Button';

const SingleImage = ({ slice }) => (
  <>
    <div className='full-bleed'>
      <Image
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
        width={slice.primary.image.dimensions.width}
        height={slice.primary.image.dimensions.height}
        layout='responsive'
      />
    </div>
    <Title>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : null}
    </Title>
    <Description>
      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : null}
    </Description>
    <Button link={slice.primary.buttonLink} label={slice.primary.buttonLabel} />
  </>
);

export default SingleImage;
