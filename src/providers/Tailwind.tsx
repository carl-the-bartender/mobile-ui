import { TailwindProvider } from 'tailwind-rn';
import utilities from './../../tailwind.json';
import React from 'react';

type Props = {
    children: React.ReactNode;
}

export default ({ children }: Props) => {
    return (
        <TailwindProvider utilities={utilities}>
            {children}
        </TailwindProvider>
    )
}