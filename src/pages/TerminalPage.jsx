import React from 'react';
import { MobileTerminal, Navbar } from '@components';

const TerminalPage = () => {
    return (
        <div className="h-screen w-screen flex flex-col bg-primary">
            <Navbar />
            <div className="flex-grow">
                <MobileTerminal />
            </div>
        </div>
    );
};

export default TerminalPage;
