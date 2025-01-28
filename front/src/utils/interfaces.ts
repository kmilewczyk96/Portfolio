import {projectTagTypes} from "./enums.ts";


export interface IProject {
  id: string,
  name: string,
  photoURI: string,
  tags: ITags[],
  description: string,
  sourceCode: string,
}

export interface ISection {
  id: string,
  label: string,
}

export interface ITags {
  name: string,
  role: projectTagTypes
}
