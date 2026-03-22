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
import { chemistrySubject } from './chemistryData';
import { physicsSubject } from './physicsData';
import { mathsSubject } from './mathsData';
import { computerScienceSubject } from './computerScienceData';

export const subjects: Subject[] = [
  biologySubject,
  chemistrySubject,
  physicsSubject,
  mathsSubject,
  computerScienceSubject,
];
