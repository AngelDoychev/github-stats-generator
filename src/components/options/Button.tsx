import React from 'react';
import { motion } from 'framer-motion';
import { useOptions } from '../../context/OptionsContext';

export const Button: React.FC = () => {
  const { copyStats, copyStreak, copyLangs, copied, username } = useOptions();

  return (
    <div className='col-span-2  text-center'>
      <div className='mb-4 border-t-4 border-b-4 py-4 border-green-600 rounded-lg'>
        <p className='pb-4'>[ copy to clipboard ]</p>

        <div className='flex gap-4'>
          <Copy action={copyStats} about='stats 💪' />
          <Copy action={copyStreak} about='streak 🚀' />
          <Copy action={copyLangs} about='top languages 🏅' />
        </div>
      </div>
      <button className='btn'>
        <a
          href='https://github.com/joshxfi/gh-stats-generator'
          target='_blank'
          rel='noreferrer'
        >
          star this repository ✨
        </a>
      </button>

      <motion.p
        className='text-base'
        initial={{ opacity: 0 }}
        animate={{ opacity: copied ? 1 : 0 }}
      >
        📋 copied to clipboard! paste it on the repo: {username}/{username}
      </motion.p>
    </div>
  );
};

export const Copy: React.FC<CopyProps> = ({ action, about }) => {
  return (
    <button onClick={() => action()} className='btn'>
      {about}
    </button>
  );
};
