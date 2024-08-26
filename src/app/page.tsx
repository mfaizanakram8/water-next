import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <figure className="md:flex bg-sky-100 rounded-xl p-8 md:p-0 dark:bg-sky-200">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-full rounded-full mx-auto"
          src="/faizan.png"
          alt="Faizan"
          width={384}
          height={512}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-sky-900 dark:text-sky-800">
              “Tailwind CSS is the only framework that I&apos;ve seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-600 dark:text-sky-500">
              Sarah Dayan
            </div>
            <div className="text-slate-800 dark:text-slate-700">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default page;
