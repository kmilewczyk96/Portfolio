import {
  httpRequestMethods,
  projectTagTypes
} from "./enums.ts";


export interface IMessage {
  name: string,
  email: string,
  company: string,
  message: string,
}

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

export interface IURL {
  path: string,
  method: httpRequestMethods,
  extraConfig?: {},
}