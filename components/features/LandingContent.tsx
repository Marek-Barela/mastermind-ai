"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah",
    avatar: "S",
    title: "UX Designer",
    description:
      "I'm really impressed with this app's user interface. It's incredibly user-friendly!",
  },

  {
    id: 2,
    name: "John",
    avatar: "J",
    title: "Data Scientist",
    description:
      "This software has revolutionized the way we analyze data. A must-have for data enthusiasts!",
  },

  {
    id: 3,
    name: "Emily",
    avatar: "E",
    title: "Marketing Manager",
    description:
      "As a marketing professional, I find this application indispensable for campaign planning.",
  },

  {
    id: 4,
    name: "Michael",
    avatar: "M",
    title: "Project Manager",
    description:
      "I've tried numerous project management tools, but this one stands out as the best.",
  },

  {
    id: 5,
    name: "Jessica",
    avatar: "J",
    title: "Graphic Designer",
    description:
      "The features of this software have greatly enhanced my design workflow.",
  },

  {
    id: 6,
    name: "David",
    avatar: "D",
    title: "Web Developer",
    description:
      "This application has saved me hours of coding. A game-changer for web development.",
  },

  {
    id: 7,
    name: "Sophia",
    avatar: "S",
    title: "Content Writer",
    description:
      "Writing content has never been this easy and enjoyable. Highly recommended!",
  },

  {
    id: 8,
    name: "Alex",
    avatar: "A",
    title: "Financial Analyst",
    description:
      "I rely on this software for financial modeling, and it hasn't disappointed me yet.",
  },

  {
    id: 9,
    name: "Olivia",
    avatar: "O",
    title: "Product Manager",
    description: "Managing product development has become a breeze with this tool.",
  },

  {
    id: 10,
    name: "Daniel",
    avatar: "D",
    title: "Data Analyst",
    description: "Data analysis has never been this efficient. Kudos to the developers!",
  },

  {
    id: 11,
    name: "Ava",
    avatar: "A",
    title: "Customer Support",
    description:
      "Our customers love the seamless experience provided by this application.",
  },
  {
    id: 12,
    name: "Ethan",
    avatar: "E",
    title: "HR Manager",
    description:
      "Streamlining HR processes has become so much easier with this software.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10 ">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map(item => (
          <Card key={item.id} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
