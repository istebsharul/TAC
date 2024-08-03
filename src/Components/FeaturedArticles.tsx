// components/FeaturedArticles.tsx
import React from 'react';

const FeaturedArticles: React.FC = () => {
    const articles = [
        {
            date: '22-05-2022',
            category: 'Branding',
            title: 'When is the right time to rebrand?',
            link: '#',
        },
        {
            date: '07-05-2022',
            category: 'Digital Marketing',
            title: 'Difference between Advertising and Marketing?',
            link: '#',
        },
    ];

    return (
        <div className='w-full flex justify-center items-center bg-[#1A1A1A]'>
            <div className="md:w-3/5 bg-[#1A1A1A] text-white p-10">
                <div className="text-center">
                    <h2 className="flex md:flex-row justify-start items-center text-xl font-bold relative inline-block">
                        Featured Articles
                        <svg className="hidden md:block mx-5 md:w-[30rem] md:h-[3rem]" width="480" height="32" viewBox="0 0 580 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M579.061 13.0607C579.646 12.4749 579.646 11.5251 579.061 10.9393L569.515 1.3934C568.929 0.807612 567.979 0.807612 567.393 1.3934C566.808 1.97918 566.808 2.92893 567.393 3.51472L575.879 12L567.393 20.4853C566.808 21.0711 566.808 22.0208 567.393 22.6066C567.979 23.1924 568.929 23.1924 569.515 22.6066L579.061 13.0607ZM0 13.5H578V10.5H0V13.5Z" fill="#9747FF" />
                        </svg>
                        <svg className='block md:hidden absolute bottom-[5%] right-[18%]' width="108" height="18" viewBox="0 0 108 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107.061 13.0607C107.646 12.4749 107.646 11.5251 107.061 10.9393L97.5147 1.3934C96.9289 0.807611 95.9792 0.807611 95.3934 1.3934C94.8076 1.97919 94.8076 2.92893 95.3934 3.51472L103.879 12L95.3934 20.4853C94.8076 21.0711 94.8076 22.0208 95.3934 22.6066C95.9792 23.1924 96.9289 23.1924 97.5147 22.6066L107.061 13.0607ZM0 13.5H106V10.5H0V13.5Z" fill="#9747FF" />
                        </svg>
                    </h2>
                </div>
                <br/>
                <div className=" flex md:flex-row flex-col justify-between md:space-x-10 md:space-y-0 space-y-10 mt-10">
                    {articles.map((article, index) => (
                        <div key={index} className="w-full md:max-w-md max-w-sm">
                            <div className="flex text-xs space-x-4 text-gray-400 mb-2 underline">
                                <span>{article.date}</span>
                                <span>{article.category}</span>
                            </div>
                            <h3 className="md:text-4xl text-3xl font-medium mb-2 relative">{article.title}
                                <a href="/services/digitalmarketing">
                                    <svg className='absolute bottom-[5%] right-[18%]' width="108" height="18" viewBox="0 0 108 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M107.061 13.0607C107.646 12.4749 107.646 11.5251 107.061 10.9393L97.5147 1.3934C96.9289 0.807611 95.9792 0.807611 95.3934 1.3934C94.8076 1.97919 94.8076 2.92893 95.3934 3.51472L103.879 12L95.3934 20.4853C94.8076 21.0711 94.8076 22.0208 95.3934 22.6066C95.9792 23.1924 96.9289 23.1924 97.5147 22.6066L107.061 13.0607ZM0 13.5H106V10.5H0V13.5Z" fill="#9747FF" />
                                    </svg>
                                </a>
                            </h3>
                        </div>
                    ))}
                </div>
                <br/>
                <div className="mt-10 flex justify-start items-center">
                    View All
                    <a href="/services/digitalmarketing">
                        <svg width="108" height="18" viewBox="0 0 108 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M107.061 13.0607C107.646 12.4749 107.646 11.5251 107.061 10.9393L97.5147 1.3934C96.9289 0.807611 95.9792 0.807611 95.3934 1.3934C94.8076 1.97919 94.8076 2.92893 95.3934 3.51472L103.879 12L95.3934 20.4853C94.8076 21.0711 94.8076 22.0208 95.3934 22.6066C95.9792 23.1924 96.9289 23.1924 97.5147 22.6066L107.061 13.0607ZM0 13.5H106V10.5H0V13.5Z" fill="#9747FF" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeaturedArticles;
