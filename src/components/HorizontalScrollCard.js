import React, { useRef, useState } from "react";
import Card from "./Card";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const HorizontalScrollCard = ({ data = [], heading, trending }) => {
    const containerRef = useRef();
    const handleNext = () => {
        //esnure there is a next image to display
        containerRef.current.scrollLeft += 300;
    };

    const handlePrevious = () => {
        //esnure there is a next image to display
        containerRef.current.scrollLeft -= 300;
    };

    return (
        <div>
            <div className="container mx-auto px-3 my-10">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 text-white">
                    {heading}
                </h2>
                <div className="relative">
                    <div
                        ref={containerRef}
                        className="grid grid-cols-[repeat(auto-fit,230px) grid-flow-col gap-6] overflow-hidden overflow-x-scroll z-10 relative scroll-smooth transition-all scrollbar-none"
                    >
                        {data.map((data, index) => {
                            return (
                                <Card
                                    key={data.id + "heading" + index}
                                    data={data}
                                    index={index + 1}
                                    trending={trending}
                                />
                            );
                        })}
                    </div>
                    <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
                        <button
                            onClick={handlePrevious}
                            className="bg-white p-1 text-black rounded-full -ml-2 z-10"
                        >
                            <FaAngleLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-white p-1 text-black rounded-full -mr-2 z-10"
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollCard;
