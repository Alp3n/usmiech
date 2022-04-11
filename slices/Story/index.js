import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import { Media } from '../../components/MediaQueries';
import styled from '@emotion/styled';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Description from '../../components/Description';

const Story = ({ slice }) => (
  <>
    <Media at='sm' className='full-bleed'>
      <Image
        src={`${slice.primary.image.mobile.url}&auto=noCompress`}
        alt={slice.primary.image.mobile.alt}
        width={slice.primary.image.mobile.dimensions.width}
        height={slice.primary.image.mobile.dimensions.height}
        layout='responsive'
        quality={100}
      />
    </Media>
    <Media greaterThan='sm' className='full-bleed'>
      <Image
        src={`${slice.primary.image.url}&auto=noCompress`}
        alt={slice.primary.image.alt}
        width={slice.primary.image.dimensions.width}
        height={slice.primary.image.dimensions.height}
        layout='responsive'
        quality={100}
      />
    </Media>
    <StyledGrid>
      <Title gridArea='title'>
        <PrismicRichText field={slice.primary.title} />
      </Title>
      <Title gridArea='subtitle'>
        <PrismicRichText field={slice.primary.subTitle} />
      </Title>
      <Description>
        <PrismicRichText field={slice.primary.description} />
      </Description>
      <Button
        label={slice.primary?.buttonLabel}
        link={slice.primary?.buttonLink}
        gridArea='button'
        color='black'
      />
    </StyledGrid>
  </>
);

export default Story;

const StyledGrid = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'subtitle'
    'description'
    'button';
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 6rem;
    grid-template-areas:
      'title description'
      'subtitle button';
  }
`;
