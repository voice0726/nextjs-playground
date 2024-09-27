import { Fragment, HTMLAttributes } from 'react';

import { css } from 'restyle';

export const Checkbox = (props: HTMLAttributes<HTMLInputElement>) => {
  const [className, Styles] = css({
    appearance: 'none',
    width: '1rem',
    height: '1rem',
    color: 'rgb(37 99 235)',
    backgroundColor: 'rgb(243 244 246)',
    ':focus-visible': {
      boxShadow: '0 0 0 3px rgb(37 99 235)',
    },
    borderColor: 'rgb(209 213 219)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '0.25rem',
    position: 'relative',
    ':checked': {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgb(209 213 219)',
      backgroundColor: 'rgb(37 99 235)',
    },
    ':checked::before': {
      content: '',
      display: 'block',
      position: 'absolute',
      left: '3px',
      top: '1px',
      width: '4px',
      height: '8px',
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: '0 3px 3px 0',
      transform: 'rotate(45deg)',
    },
  });

  return (
    <Fragment>
      <Styles />
      <input type="checkbox" className={className} {...props} />
    </Fragment>
  );
};
