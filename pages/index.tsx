import React from "react";
import Head from "next/head";
import Card from "@/components/common/Card";
import { CardProps } from "@/types";

const mockData: CardProps[] = [
  {
    id: "1",
    title: "Cozy Cottage",
    description: "A beautiful cottage in the countryside.",
    imageUrl: "/images/cottage.jpg",
    onClick: () => alert("Viewing Cozy Cottage"),
  },
  {
    id: "2",
    title: "Modern Apartment",
    description: "An apartment in the heart of the city.",
    imageUrl: "/images/apartment.jpg",
    onClick: () => alert("Viewing Modern Apartment"),
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Property Listings</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Available Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.map((property) => (
            <Card key={property.id} {...property} />
          ))}
        </div>
      </main>
    </>
  );
}