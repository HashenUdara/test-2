import { env } from '@/env';
import { ModeToggle } from '@repo/design-system/components/mode-toggle';
import Link from 'next/link';
import type { ReactNode } from 'react';

type AuthLayoutProps = {
  readonly children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="container relative grid h-dvh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
    <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
      <div className="absolute inset-0 bg-zinc-900">
        <div className=" relative h-dvh w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-zinc-900/80" />
          <img
            src="/assets/bg.jpg"
            alt="Vacatina Logo"
            className="mr-2 h-dvh w-full object-cover"
          />
        </div>
      </div>
      <div className="relative z-20 flex items-center font-medium text-lg">
        <img
          src="/assets/logo.png"
          alt="Vacatina Logo"
          className="mr-2 h-6 w-6"
        />
        Vacatina
      </div>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg">
            &ldquo;Vacatina made planning our dream vacation effortless. Their
            expert travel advisors helped us discover amazing destinations and
            create unforgettable memories.&rdquo;
          </p>
          <footer className="text-sm">Sofia Davis</footer>
        </blockquote>
      </div>
    </div>
    <div className="lg:p-8">
      <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center space-y-6">
        {children}
        <p className="px-8 text-center text-muted-foreground text-sm">
          By clicking continue, you agree to our{' '}
          <Link
            href={new URL('/legal/terms', env.NEXT_PUBLIC_WEB_URL).toString()}
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href={new URL('/legal/privacy', env.NEXT_PUBLIC_WEB_URL).toString()}
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  </div>
);

export default AuthLayout;
