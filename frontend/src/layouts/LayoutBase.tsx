import { ReactNode } from 'react';
import { Footer, Header } from '../components';

interface LayoutBaseProps {
  children: ReactNode;
}

export function LayoutBase({ children }: LayoutBaseProps) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
