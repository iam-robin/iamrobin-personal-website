import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { RoughNotation } from "react-rough-notation";
import { useTheme } from 'next-themes';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const getActiveRoute = (router) => {
  return router.pathname.split('/')[1];
};

const NavItem = (props) => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(getActiveRoute(router));
  const { theme } = useTheme();
  const fullConfig = resolveConfig(tailwindConfig);

  useEffect(() => {
    setActiveRoute(getActiveRoute(router));
  }, [router]);

  return (
    <li className='inline-block mx-1 text-base'>
      <Link href={'/' + props.route}>
        <a className='py-2 px-3 rounded inline-block font-mono'>
          <RoughNotation
            type="underline"
            show={activeRoute == props.route}
            color={theme === 'dark' ? fullConfig.theme.colors.accent.dark : fullConfig.theme.colors.accent.light}
            strokeWidth={2}
            iterations={2}
            padding={8}
          >
            <span>{props.content}</span>
          </RoughNotation>
        </a>
      </Link>
    </li>
  );
}

export default NavItem;
