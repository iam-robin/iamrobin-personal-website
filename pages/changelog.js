import VersionItem from "../components/VersionItem";
import { ArrowSmRightIcon } from '@heroicons/react/outline';

const Changelog = () => {
  return (
    <div>
      <h1 className="text-lg mb-12 font-medium">Changelog</h1>
      <ul>
        <VersionItem
          version="1.0.0"
          headline="🚀 Hello world"
          date={new Date('2022-06-19T19:30')}
        >
          <p>This website went live! It contains all the basic functions that I have planned for the first release: an overview of my side projects, a reading list and a gallery of my photos. The Data for the reading list and photo gallery is based on Notion. The page can be navigated via a command bar and contains a dark theme.</p>
          <div className="mt-4 space-y-6 sm:space-y-[0] sm:space-x-20 sm:flex">
            <div>
              <p className="mt-2 font-medium text-sm">Used tools</p>
              <ul className="mt-1 list-inside list-disc text-sm">
                <li className="flex items-center"><ArrowSmRightIcon className="h-4 w-4 mr-1 text-grey-300 dark:text-grey-400" />VS Code</li>
                <li className="flex items-center"><ArrowSmRightIcon className="h-4 w-4 mr-1 text-grey-300 dark:text-grey-400" />Figma</li>
                <li className="flex items-center"><ArrowSmRightIcon className="h-4 w-4 mr-1 text-grey-300 dark:text-grey-400" />Notion</li>
              </ul>
            </div>
            <div>
              <p className="mt-2 font-medium text-sm">Tech stack</p>
              <ul className="mt-1 list-inside list-disc text-sm">
                <li className="flex items-center"><ArrowSmRightIcon className="h-4 w-4 mr-1 text-grey-300 dark:text-grey-400" />Next.js</li>
                <li className="flex items-center"><ArrowSmRightIcon className="h-4 w-4 mr-1 text-grey-300 dark:text-grey-400" />Typescript</li>
                <li className="flex items-center"><ArrowSmRightIcon className="h-4 w-4 mr-1 text-grey-300 dark:text-grey-400" />Tailwind</li>
              </ul>
            </div>
            <div>
              <p className="mt-2 font-medium text-sm">Hosting</p>
              <ul className="mt-1 list-inside list-disc text-sm">
                <li className="flex items-center"><ArrowSmRightIcon className="h-4 w-4 mr-1 text-grey-300 dark:text-grey-400" />Github</li>
                <li className="flex items-center"><ArrowSmRightIcon className="h-4 w-4 mr-1 text-grey-300 dark:text-grey-400" />Netlify</li>
              </ul>
            </div>
          </div>
        </VersionItem>
        <VersionItem
          version="0.0.0"
          headline="👨🏼‍💻 Initial commit"
          date={new Date('2022-03-17T18:30')}
          hasLine={false}
        >
          <p>The idea to build a website with a larger personal reference is born and the rough project structure based on next.js, typescript and tailwind is set up.</p>
        </VersionItem>
      </ul>
    </div>
  );
}

Changelog.layout = "LayoutDefault";

export default Changelog;
