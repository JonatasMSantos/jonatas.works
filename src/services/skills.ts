import { Item } from './../types'

export async function fetchSkillsData(): Promise<Item[]> {
  const SKILLS_URL_API = import.meta.env.SKILLS_URL_API;

  const listsResponse = await fetch(`${SKILLS_URL_API}/data.json`);
  const listsData: Promise<Item[]> = await listsResponse.json();
  return listsData
}
