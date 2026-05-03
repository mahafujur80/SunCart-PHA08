import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-2 h-screen">
                <Spinner color="accent" size='lg'/>
                <span className="text-xs text-muted">Loading....!</span>
            </div>
        </div>
    );
};

export default loading;