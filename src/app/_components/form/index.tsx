import { styled } from 'restyle';

export const Container = styled('div', {
  width: '100%',
  display: 'grid',
  gridColumn: 1,
  gap: '1rem',
});

export const FormGroup = styled('div', {
  width: '100%',
});

export const Label = styled('label', {
  width: '100%',
  display: 'block',
  fontWeight: 'bold',
});

export const Input = styled('input', {
  width: '100%',
  padding: '0.25rem',
  borderColor: 'rgb(229 231 235)',
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: '0.25rem',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
});
