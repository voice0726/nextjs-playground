import { ReactNode } from 'react';

import { Metadata } from 'next';
import { styled } from 'restyle';

import ModalContextProvider from '@/app/_components/modal/context';
import { Navbar } from '@/app/_components/navbar';

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
      <ModalContextProvider>
        <Content>{children}</Content>
      </ModalContextProvider>
    </Container>
  );
}

const Container = styled('div', {
  display: 'flex',
  height: '100vh',
  flexDirection: 'row',
  overflow: 'hidden',
});

const Nav = styled('div', {
  width: '10rem',
  flex: 'none',
});

const Content = styled('div', {
  flexGrow: 1,
  overflowY: 'auto',
});
