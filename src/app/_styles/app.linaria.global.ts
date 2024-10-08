import { css } from '@linaria/core';

export const globalStyles = css`
  :global() {
    html {
      font-size: 14px;
      line-height: 1.5rem;
      font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
