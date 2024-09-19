import React from "react";
import {RiReactjsLine,RiJavascriptFill} from "react-icons/ri"
import { FaNode, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";




export const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
  <h1 className="my-20 text-center text-4xl">Technologies</h1>
  <div className="flex flex-wrap items-center justify-center gap-4">
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiJavascriptFill className="text-7xl text-yellow-400"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaNode className="text-7xl text-green-500"/>
    </div> 
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiExpress className="text-7xl"/>
    </div> 
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-green-400"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <BiLogoPostgresql className="text-7xl text-blue-500"/>
    </div>
    <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaPython className="text-7xl text-cyan-400"/>
    </div>
  </div>
  </div>;
};
