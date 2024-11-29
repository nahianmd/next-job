'use client';
import React from 'react';
import { AlignJustify, Component } from 'lucide-react';
import { ModeToggle } from '@/components/layout/theme-toggle';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Jobs', href: '/jobs', current: false },
  { name: 'Post a Job', href: 'job/create', current: false }
];

export default function Navbar() {
  return (
    <Sheet>
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <nav aria-label="Global" className="mx-auto container flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/*<img alt="" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />*/}
              <div className="flex gap-2 text-left text-sm leading-tight items-center">
                <Component />
                <span className="truncate font-semibold">Next Jobs</span>
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <SheetTrigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ">
              <span className="sr-only">Open main menu</span>
              <AlignJustify aria-hidden="true" className="size-6" />
            </SheetTrigger>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold ">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <a href="#" className="text-sm/6 font-semibold ">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
            <ModeToggle />
          </div>
        </nav>

        <SheetContent side="right">
          <div className={'hidden'}>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
          </div>

          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/*<img alt="" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />*/}
              <Component />
            </a>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-foreground">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold">
                  Log in
                </a>
                <ModeToggle />
              </div>
            </div>
          </div>
        </SheetContent>
      </header>
    </Sheet>
  );
}
