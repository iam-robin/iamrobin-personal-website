import { RoughNotation } from "react-rough-notation";
import { useTheme } from 'next-themes';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const MarkerLink = (props) => {
  const { theme } = useTheme();
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <RoughNotation
      type={props.type}
      show={true}
      color={theme === 'dark' ? fullConfig.theme.colors.accent.dark : fullConfig.theme.colors.accent.light}
      strokeWidth={3}
      iterations={2}
      padding={props.type === "circle" ? [16,10] : 2}
      animationDelay={props.delay}
      multiline={true}
      className={props.type === "circle" ? "mx-3": ""}
    >
      <span>
        {props.text}
      </span>
    </RoughNotation>
  );
}

export default MarkerLink;
