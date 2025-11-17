import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/data';

const Testimonials = () => {
    return (
        <div>
            <div id="testimonials" className="">
                {/* Decorative Elements */}
                <div className=""></div>
                <div className=""></div>

                <div className="">
                    {/* Header */}
                    <div className="">
                        <div className="">
                            <Star className="" />
                            <span className="">Testimonials</span>
                        </div>
                        <h2 className="">
                            Loved by Creators
                            <span className="">Everywhere</span>
                        </h2>
                        <p className="">
                            Don't just take our word for it. Here's what our
                            users have to say about their experience.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className="">
                                {/* Quote Icon */}
                                <div className="">
                                    <Quote className="" />
                                </div>

                                {/* Rating Stars */}
                                <div className="">
                                    {[...Array(testimonial.rating || 5)].map(
                                        (_, i) => (
                                            <Star key={i} className="" />
                                        )
                                    )}
                                </div>

                                {/* Quote */}
                                <p className="">"{testimonial.quote}"</p>

                                {/* Author Info */}
                                <div className="">
                                    <div className="">
                                        <div className=""></div>
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                            className=""
                                        />
                                    </div>
                                    <div className="">
                                        <p className="">{testimonial.author}</p>
                                        <p className="">{testimonial.title}</p>
                                    </div>
                                </div>

                                {/* Hover Gradient Background */}
                                <div className=""></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Stats */}
                    <div className="">
                        <div className="">
                            <div className="">50K+</div>
                            <div className="">Happy Creators</div>
                        </div>
                        <div className="">
                            <div className="">4.9/5</div>
                            <div className="">Average Rating</div>
                        </div>
                        <div className="">
                            <div className="">100K+</div>
                            <div className="">Ebooks Created</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
