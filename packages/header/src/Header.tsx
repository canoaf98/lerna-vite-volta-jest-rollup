import { HeaderProps } from 'common';
import React from 'react';

export function Header(props: HeaderProps) {
    const { description, title} = props;
    return (
        <header>
            {title}
            {description}
            Lerna is the original monorepo tool!
        </header>
    );
}
