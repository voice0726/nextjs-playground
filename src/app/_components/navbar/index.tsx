import { styled } from '@linaria/react';
import Link from 'next/link';

import { Button } from '~/app/_components/button';

const navItems = [
  {
    href: '/dashboard',
    name: 'Dashboard',
  },
  { href: '/dashboard/todos', name: 'Todos' },
  { href: '/dashboard/addresses', name: 'Addresses' },
];

const Nav = styled.nav`
  width: 100%;
  margin: 0;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
`;

const Li = styled.li`
  margin: 0;
  width: 100%;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Ul>
        {navItems.map((item) => (
          <Li key={item.href}>
            <Link href={item.href}>{item.name}</Link>
          </Li>
        ))}
      </Ul>
      <a href="/logout">
        <Button>Logout</Button>
      </a>
    </Nav>
  );
};
