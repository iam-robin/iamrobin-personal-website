import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

const getActiveRoute = (router) => {
  return router.pathname.split('/')[1];
};

const NavItem = (props) => {
    const router = useRouter();
    const [activeRoute, setActiveRoute] = useState(getActiveRoute(router));

    useEffect(() => {
      setActiveRoute(getActiveRoute(router));
    }, [router]);

    return (
        <li className='inline-block mx-1 text-sm'>
            <Link href={'/' + props.route}>
                <a className={"py-2 px-3 rounded inline-block " + (activeRoute == props.route ? 'bg-grey-100' : '')}>
                    {props.content}
                </a>
            </Link>
        </li>
    );
}

export default NavItem;
