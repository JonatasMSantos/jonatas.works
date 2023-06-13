export interface Item {
  title?: string;
  description?: string;
  subitems?: Array<Item>;
  color?: string;
  icon?: string;
  idChecklists?: Array<string>;
}

interface TrelloData {
  id?: string;
  name: string;
  cards?: TrelloData[];
  color?: string;
  idChecklists?: string[];
  checkItems: TrelloData[];
}

export async function fetchData(): Promise<Item[]> {
  const lists: Item[] = [];

  const apiKey = '981bff4bed5e45ee5ded50059bda468e';
  const token = 'ATTA7b2219abbf59ac8834047f399e45616fa698dc4fee0c19e2037134d2ec70fa056F85ECED';
  const board_id = 'M2igNFyq';

  // Obter todas as listas
  const listsResponse = await fetch(`https://api.trello.com/1/boards/${board_id}/lists?key=${apiKey}&token=${token}`);
  const listsData: TrelloData[] = await listsResponse.json();

  for (let index = 0; index < listsData.length; index++) {
    const { name, id } = JSON.parse(JSON.stringify(listsData[index]));

    if (name && id) {
      const cardListResponse = await fetch(`https://api.trello.com/1/lists/${id}/cards?key=${apiKey}&token=${token}`);
      const cardListData = await cardListResponse.json();

      const list: Item = {
        title: name,
        icon: 'tabler:list-check',
      };

      if (cardListData) {
        list.subitems = cardListData.map((objeto: TrelloData) => {
          const checklistItens: Array<string> = JSON.parse(JSON.stringify(objeto.idChecklists));

          if (objeto && objeto.name) {
            const its: Item = {
              title: JSON.stringify(objeto.name),
              icon: 'tabler:list-check',
              idChecklists: checklistItens,
            };
            return its;
          }
          return {};
        });
      }

      lists.push(list);
    }
  }

  //carregar checklists
  for (let index = 0; index < lists.length; index++) {
    const element: Item = lists[index];

    if (element.subitems) {
      for (let index = 0; index < element.subitems.length; index++) {
        const subElement: Item = element.subitems[index];
        subElement.subitems = [];

        if (subElement.idChecklists && subElement.idChecklists.length > 0) {
          for (let index = 0; index < subElement.idChecklists.length; index++) {
            const idChecklist = subElement.idChecklists[index];
            const checkListResponse = await fetch(
              `https://api.trello.com/1/checklists/${idChecklist}?key=${apiKey}&token=${token}`
            );
            const checkListData: TrelloData = await checkListResponse.json();

            if (checkListData && checkListData) {
              const ck: Item = {
                title: checkListData.name,
                icon: 'tabler:list-check',
                subitems: checkListData.checkItems.map((checkItem: TrelloData) => {
                  const ckItem: Item = {
                    icon: 'tabler:list-check',
                    title: checkItem.name,
                  };
                  return ckItem;
                }),
              };

              subElement.subitems.push(ck);
            }
          }
        }
      }
    }
  }

  return lists;
}
