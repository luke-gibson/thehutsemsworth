import classNames from 'classnames';
import React from 'react';

export default function MenuButton({ children, ...props}) {
    const path = window.location.pathname;

    var aClasses = classNames(
        'text-center block hover:bg-blue-400 p-3',
        {
            'bg-blue-400': props.href == path.substring(0, path.length - 1),
        }
    );

    return (
        <a {...props} className={aClasses}>
            {children}
        </a>
    );
}