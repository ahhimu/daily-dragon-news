import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[350px]' src="/src/assets/logo.png" alt="Dragon News Logo" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;