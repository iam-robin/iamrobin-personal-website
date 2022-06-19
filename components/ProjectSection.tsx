import clsx from 'clsx';

interface ProjecSectionProps {
  headline: string;
  description: string;
}

const ProjecSection: React.FC<ProjecSectionProps> = ({ headline, description }) => {

  return (
    <div className="flex mt-16 flex-wrap sm:mt-30">
      <h2 className={clsx(
        "w-full text-lg font-medium",
        "sm:w-1/3"
      )}>{headline}</h2>
      <p className="w-full mt-2 sm:w-2/3 sm:mt-[0px]">{description}</p>
    </div>
  );
}

export default ProjecSection;
