import styled from '@emotion/styled';

const Dashborad = () => {
  return (
    <div>
      <Title>Quant Vault Escrow </Title>
    </div>
  );
};

export default Dashborad;

const Title = styled.div`
  ${({ theme }) => theme.fonts.title_1};
`;
