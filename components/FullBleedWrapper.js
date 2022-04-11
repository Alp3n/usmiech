const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr min(115ch, calc(100% - 48px)) 1fr;
  grid-column-gap: 24px;
  > * {
    grid-column: 2;
  }

  .full-bleed {
    grid-column: 1 / -1;
    width: 100%;
  }
`;
