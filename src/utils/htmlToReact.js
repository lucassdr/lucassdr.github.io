import React from 'react';
import parse, { domToReact } from 'html-react-parser';
import Link from './link';
import _ from 'lodash';

const convertChildren = (children) => domToReact(children);

export default function htmlToReact(html) {
    if (!html) {
        return null;
    }
    return parse(html, {
        transform: (node, index) => {
            if (node.type === 'script') {
                if (!_.isEmpty(node.children)) {
                    return (
                        <script key={index} {...node.attribs}>
                            {convertChildren(node.children)}
                        </script>
                    );
                } else {
                    return <script key={index} {...node.attribs} />;
                }
            } else if (node.type === 'tag' && node.name === 'a') {
                const href = node.attribs.href;
                const props = _.omit(node.attribs, 'href');
                // use Link only if there are no custom attributes like style, class, and what's not that might break react
                if (_.isEmpty(props)) {
                    return (
                        <Link key={index} href={href} {...props}>
                            {convertChildren(node.children)}
                        </Link>
                    );
                }
            }
        }
    });
}
