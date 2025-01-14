import {projectTagTypes} from "./enums.ts";


export interface IProject {
  id: string,
  imgSource: string,
  title: string,
  tags: ITags[],
  description: string,
}

export interface ISection {
  id: string,
  label: string,
}

export interface ITags {
  name: string,
  type: projectTagTypes
}
