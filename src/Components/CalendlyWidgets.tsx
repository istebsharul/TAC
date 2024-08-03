import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = () => {
    return (
        <div className="w-full h-full m-0 p-0">
            <InlineWidget url="https://calendly.com/ontopgroups/free-strategy-consultation" />
        </div>
    );
};

export default CalendlyWidget;