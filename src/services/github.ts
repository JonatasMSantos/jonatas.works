import { Item } from './../types';

export async function fetchGitHubData(): Promise<Item[]> {
  const token = import.meta.env.GITHUB_API;

  const lists: Item[] = [];

  const myHeaders = new Headers();
  myHeaders.append('access_token', 'ACCESS_TOKEN_TO_CHECK');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append(
    'Authorization',
    `${token}`
  );

  const params: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const listsResponse = await fetch('https://api.github.com/users/JonatasMSantos/repos', params)
  const listsData: [] = await listsResponse.json();

  const home: Item = {
    title: 'Public Projects',
    icon: 'tabler:list-check',
    subitems: [],
  };

  const starterProjects: Item = {
    title: 'Starters | Github',
    icon: 'tabler:list-check',
    subitems: [],
  };

  const othersProjects: Item = {
    title: 'Others | Github',
    icon: 'tabler:list-check',
    subitems: [],
  };

  for (let index = 0; index < listsData.length; index++) {
    const { name, description, topics, html_url } = JSON.parse(JSON.stringify(listsData[index]));

    const item: Item = {};

    item.name = `${name}`;
    item.title = `Project: ${name}`;
    item.url = `${html_url}`
    item.labels = topics.map((t) => {
      return { name: `${t}` };
    });

    item.completed = true;
    item.subitems = [];

    const subItem: Item = {};

    subItem.name = `${description}`;
    subItem.title = `${description}`;
    subItem.completed = true;
    subItem.url = `${html_url}`
    
    item.subitems.push(subItem);

    if (name.includes('start')) {
      starterProjects.subitems!.push(item);
    } else {
      othersProjects.subitems!.push(item);
    }
  }

  home.subitems!.push(starterProjects);
  home.subitems!.push(othersProjects);

  lists.push(home);

  return lists;
}
