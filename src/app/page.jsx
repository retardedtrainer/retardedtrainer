"use client";
import React from "react";
import { Nav } from "@/components/Nav";
import { Intro } from "@/components/Intro";
import { Buy } from "@/components/Buy";
import { Toke } from "@/components/Toke";
import { Header } from "@/components/Header";

import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div
      style={{ backgroundImage: 'url("/7921445.jpg")' }}
      className="bg-cover bg-center"
    >
      <Nav />
      <div>
        <Header />
      </div>
      <div>
        <div className="flex lg:flex-row flex-col justify-center m-auto lg:w-10/12 ">
          <div className="lg:w-1/2">
            <Intro />
          </div>
          <div className="lg:w-1/2">
            <Toke />
          </div>
        </div>
        <Buy />
      </div>
      <Footer />
    </div>
  );
}
