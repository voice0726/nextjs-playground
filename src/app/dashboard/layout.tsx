import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Navbar } from '~/app/_components/navbar';

import { css } from '../../../styled-system/css';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Nav>
        <Navbar />
      </Nav>
      <Content>{children}</Content>
    </Container>
  );
}

const containerClassName = css`
  display: flex;
  height: 100vh;
  flex-direction: row;
  overflow: hidden;
`;

function Container({ children }: { children: ReactNode }) {
  return <div className={containerClassName}>{children}</div>;
}

const navClassName = css`
  width: 10rem;
  flex: none;
`;

function Nav({ children }: { children: ReactNode }) {
  return <div className={navClassName}>{children}</div>;
}

const contentClassName = css`
  flex-grow: 1;
  overflow-y: auto;
`;

function Content({ children }: { children: ReactNode }) {
  return <div className={contentClassName}>{children}</div>;
}
