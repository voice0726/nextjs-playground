import type { HTMLAttributes } from 'react';

import { css } from '../../../../styled-system/css';

export function Checkbox(props: HTMLAttributes<HTMLInputElement>) {
  const style = css`
    appearance: none;
    width: 1rem;
    height: 1rem;
    color: rgb(37 99 235);
    background-color: rgb(243 244 246);
    &:focus-visible {
      box-shadow: 0 0 0 3px rgb(37 99 235);
    };
    border-color: rgb(209 213 219);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    position: relative;
    &:checked {
      border-width: 1px;
      border-style: solid;
      border-color: rgb(209 213 219);
      background-color: rgb(37 99 235);
    };
    &:checked::before {
      content: '';
      display: block;
      position: absolute;
      left: 4px;
      top: 1px;
      width: 4px;
      height: 8px;
      border-style: solid;
      border-color: white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
  `;

  const { className, ...rest } = props;
  const styles = className ? `${style} ${className}` : style;

  return <input type={'checkbox'} className={styles} {...rest} />;
}
