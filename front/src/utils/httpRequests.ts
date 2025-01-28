import {IProject} from "./interfaces.ts";


export async function fetchProjects(): Promise<IProject[]> {
  const response = await fetch("/api/projects");
  const responseData = await response.json();

  console.log(responseData);
  if (!response.ok) {
    throw Error("Failed to fetch Projects data from MongoDB!");
  }

  return responseData;
}
