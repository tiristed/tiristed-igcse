export interface Note {
  id: string;
  title: string;
  content: string;
  pdfUrl?: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  notes: Note[];
}

export interface Subject {
  id: string;
  title: string;
  icon: string;
  color: string;
  topics: Topic[];
}

import { biologySubject } from './biologyData';

export const subjects: Subject[] = [
  biologySubject,
  {
    id: 'chemistry',
    title: 'Chemistry',
    icon: 'FlaskConical',
    color: 'from-blue-900 to-black',
    topics: [
      {
        id: 'chem-1',
        title: '1. The particulate nature of matter',
        description: 'States of matter, kinetic particle theory.',
        notes: [
          {
            id: 'chem-1-1',
            title: '1.1 States of matter',
            content: `
# States of Matter

Solid: Fixed shape and volume. Particles are closely packed in a regular arrangement and vibrate about fixed positions.
Liquid: Fixed volume but takes the shape of the container. Particles are closely packed in an irregular arrangement and can move past each other.
Gas: No fixed shape or volume. Particles are far apart and move randomly at high speeds.
            `
          }
        ]
      }
    ]
  },
  {
    id: 'physics',
    title: 'Physics',
    icon: 'Atom',
    color: 'from-purple-900 to-black',
    topics: [
      {
        id: 'phys-1',
        title: '1. Motion, forces and energy',
        description: 'Physical quantities and measurement techniques, motion, mass and weight, density, forces, momentum, energy, work and power, pressure.',
        notes: [
          {
            id: 'phys-1-1',
            title: '1.1 Physical quantities and measurement',
            content: `
# Measurement

Length can be measured using a ruler, micrometer screw gauge, or vernier calipers.
Volume can be measured using a measuring cylinder.
Time can be measured using a stopwatch or clock.
            `
          },
          {
            id: 'phys-1-2',
            title: '1.2 Motion',
            content: `
# Motion

Speed = Distance / Time
Velocity is speed in a given direction.
Acceleration = Change in velocity / Time taken
            `
          }
        ]
      }
    ]
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    icon: 'Calculator',
    color: 'from-red-900 to-black',
    topics: [
      {
        id: 'math-1',
        title: '1. Number',
        description: 'Types of numbers, sets, fractions, decimals, percentages, ratio, proportion.',
        notes: [
          {
            id: 'math-1-1',
            title: '1.1 Types of numbers',
            content: `
# Types of Numbers

Natural numbers: 1, 2, 3, ...
Integers: ..., -2, -1, 0, 1, 2, ...
Prime numbers: Numbers with exactly two distinct factors (1 and itself). e.g., 2, 3, 5, 7, 11...
Rational numbers: Can be written as a fraction a/b where a and b are integers and b is not 0.
Irrational numbers: Cannot be written as a fraction. e.g., pi, sqrt(2).
            `
          }
        ]
      }
    ]
  },
  {
    id: 'computer-science',
    title: 'Computer Science',
    icon: 'Binary',
    color: 'from-cyan-900 to-black',
    topics: [
      {
        id: 'cs-1',
        title: '1. Data representation',
        description: 'Binary systems, hexadecimal, data storage.',
        notes: [
          {
            id: 'cs-1-1',
            title: '1.1 Binary systems',
            content: `
# Binary Systems

Computers use binary (base-2) to represent all data and instructions.
Binary uses only two digits: 0 and 1.
A single binary digit is called a bit.
8 bits make up 1 byte.
            `
          }
        ]
      }
    ]
  }
];
