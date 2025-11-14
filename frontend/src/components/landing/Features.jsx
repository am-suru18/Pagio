import React from 'react';
import { FEATURES } from '../../utils/data';

const Features = () => {
    return (
        <div id="features" className="">
            <div className="">
                <div className="">
                    <span className=""></span>
                    <span className="">Features</span>
                </div>
                <h2 className="">
                    Everything You Need to
                    <span className="">Create Your eBook</span>
                </h2>
                <p className="">
                    Our platform is packed with powerful features to help you
                    write, design, and publish your ebook effortlessly.
                </p>
            </div>

            <div className="">
                {FEATURES.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="">
                            <div className=""></div>
                            <div className="">
                                <div
                                    className={`w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg shadow-${feature.gradient}/20 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon className="" />
                                </div>
                                <div>
                                    <h3 className=''>
                                        {feature.title}
                                    </h3>
                                    <p className="">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="">
                                    <span className="">
                                        Learn More
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Features;
