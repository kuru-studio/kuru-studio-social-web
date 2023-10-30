import { HeartIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <footer className="shadow-lg">
      <div className="bg-gray-600 text-white">
        <div className="container mx-auto py-3 flex flex-col items-center gap-1 text-sm">
          Kuru Studio Social &copy; 2023
        </div>
      </div>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto py-3 flex flex-col items-center gap-1 text-sm">
          <div className="flex items-center gap-1">Made with <HeartIcon className="h-5 w-5 text-red-500" /> by</div>
          <div>Kuru Studio Team and the Kuru Studio Community</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
