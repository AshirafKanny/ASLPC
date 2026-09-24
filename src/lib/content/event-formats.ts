import type { StaticImageData } from "next/image";
import congressHallImg from "../../../public/chairs-row-congress-hall-with-no-people.jpg";
import decoratedHallImg from "../../../public/decorated-hall-wedding-is-ready-celebration.jpg";

export type EventFormat = {
  label: string;
  description: string;
  image: StaticImageData;
};

export const EVENT_FORMATS: EventFormat[] = [
  {
    label: "Conferences & Policy Roundtables",
    description:
      "The African Sports Law and Policy Conference, the Sports Governance Forum and periodic policy roundtables convening government, federations and academia.",
    image: congressHallImg,
  },
  {
    label: "Flagship Convenings & Lecture Series",
    description:
      "The African Sports Law Lecture Series, Athlete Rights Week and other flagship convenings marking milestones in the Centre's institutional calendar.",
    image: decoratedHallImg,
  },
];
