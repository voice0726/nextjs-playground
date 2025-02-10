import { styled } from '../../../../styled-system/jsx';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-column: 1;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  display: block;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.25rem;
  border-color: rgb(229 231 235);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
`;
