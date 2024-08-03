import React from 'react';

const TacApp: React.FC = () => {
    return (
        <div className="w-full flex flex-col justiy-center items-center bg-[#1A1A1A] pt-40">
            <div className='md:w-2/5 text-center'>
                <p className="text-2xl md:text-4xl font-medium mb-4">
                    TAC-tical approach to provide<br/> solutions tailored to your needs.
                </p>
                <p className="mb-6 font-light">
                    Our approach ensures that we understand your objectives,<br />
                     create a strategic plan, execute effectively, and <br />
                    continuously optimize for the best results.
                </p>
            </div>
            <div className="w-3/6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col justify-between h-full text-purple-500">
                    <p className="text-2xl font-semibold py-5">
                        Discovery <br />
                        and Strategy
                    </p>
                    <p className="text-2xl font-semibold py-5">
                        Design and <br />
                        Development
                    </p>
                    <p className="text-2xl font-semibold py-5">
                        Implementation <br />
                        and Marketing
                    </p>
                    <p className="text-2xl font-semibold py-5">
                        Analysis and <br />
                        Optimization
                    </p>
                </div>
                <div className="space-y-3">
                    <p className='border-b border-1 text-sm py-5'>
                        We understand your business and challenges, researching your
                        audience, competitors, and trends, then crafting a clear,
                        customized strategy.
                    </p>
                    <p className='border-b border-1 text-sm py-5'>
                        After planning, our teams create digital assets for a seamless
                        user experience, combining aesthetics and functionality for
                        diverse audiences.
                    </p>
                    <p className='border-b border-1 text-sm py-5'>
                        With assets ready, we execute strategies, monitoring and
                        optimizing campaigns across SEO, PPC, content, and email marketing
                        for effective reach.
                    </p>
                    <p className='border-b border-1 text-sm py-5'>
                        Core to our approach is continuous improvement through data
                        analysis, making data-driven refinements for better results, and
                        ensuring transparency with regular reports.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TacApp;
