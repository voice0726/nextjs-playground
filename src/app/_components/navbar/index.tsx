import Link from 'next/link';
import { styled } from 'restyle';

import { Button } from '@/app/_components/button';

const navItems = [
  {
    href: '/dashboard',
    name: 'Dashboard',
  },
  { href: '/dashboard/todos', name: 'Todos' },
  { href: '/dashboard/addresses', name: 'Addresses' },
];

const Nav = styled('nav', {
  width: '100%',
  margin: 0,
});

const UL = styled('ul', {
  listStyle: 'none',
  margin: 0,
});

const LI = styled('li', {
  margin: 0,
  width: '100%',
});

export const Navbar = () => {
  return (
    <Nav>
      <UL>
        {navItems.map((item) => (
          <LI key={item.href}>
            <Link href={item.href}>{item.name}</Link>
          </LI>
        ))}
      </UL>
      <a href="/logout">
        <Button>Logout</Button>
      </a>
    </Nav>
  );
};
