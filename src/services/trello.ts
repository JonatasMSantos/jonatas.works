import { Item } from './../types'

// export async function fetchTrelloData(): Promise<Item[]> {
//   const lists: Item[] = [];

//   const apiKey = import.meta.env.TRELLO_API_KEY;
//   const token = import.meta.env.TRELLO_TOKEN;
//   const board_id = import.meta.env.TRELLO_BOARD;
//   // const board_id = 'AbC6zqbg';

//   // Obter todas as listas
//   const listsResponse = await fetch(`https://api.trello.com/1/boards/${board_id}/lists?key=${apiKey}&token=${token}`);
//   const listsData: TrelloData[] = await listsResponse.json();

//   for (let index = 0; index < listsData.length; index++) {
//     const { name, id } = JSON.parse(JSON.stringify(listsData[index]));

//     if (name && id) {
//       // Obter todos os cartões da lista
//       const cardListResponse = await fetch(`https://api.trello.com/1/lists/${id}/cards?key=${apiKey}&token=${token}`);
//       const cardListData = await cardListResponse.json();

//       const list: Item = {
//         title: name,
//         icon: 'tabler:list-check',
//       };

//       if (cardListData) {
//         list.subitems = cardListData.map((objeto: TrelloData) => {
//           const checklistItens: Array<string> = JSON.parse(JSON.stringify(objeto.idChecklists));

//           if (objeto && objeto.name) {
//             const its: Item = {
//               title: JSON.stringify(objeto.name),
//               icon: 'tabler:list-check',
//               labels: objeto.labels,
//               idChecklists: checklistItens,
//             };
//             return its;
//           }
//           return {};
//         });
//       }

//       lists.push(list);
//     }
//   }

//   //carregar checklists
//   for (let index = 0; index < lists.length; index++) {
//     const element: Item = lists[index];   

//     if (element.subitems) {
//       for (let index = 0; index < element.subitems.length; index++) {
//         const subElement: Item = element.subitems[index];
//         subElement.subitems = [];

//         if (subElement.idChecklists && subElement.idChecklists.length > 0) {
//           for (let index = 0; index < subElement.idChecklists.length; index++) {
//             const idChecklist = subElement.idChecklists[index];
//             const checkListResponse = await fetch(
//               `https://api.trello.com/1/checklists/${idChecklist}?key=${apiKey}&token=${token}`
//             );
//             const checkListData: TrelloData = await checkListResponse.json();

//             if (checkListData && checkListData) {              
//               const ck: Item = {
//                 title: checkListData.name,
//                 icon: 'tabler:list-check',
//                 subitems: checkListData.checkItems.map((checkItem: TrelloData) => {
//                   const ckItem: Item = {
//                     icon: checkItem.state === 'incomplete' ? 'tabler:circle-dashed' : 'tabler:circle-check',
//                     completed: checkItem.state === 'incomplete' ? false : true,
//                     title: checkItem.name,
//                   };
//                   return ckItem;
//                 }),
//               };

//               subElement.subitems.push(ck);
//             }
//           }
//         }
//       }
//     }
//   }


//   console.log(JSON.stringify(lists))

//   return lists;
// }


export async function fetchTrelloData(): Promise<Item[]> {
  const SKILLS_URL_API = import.meta.env.SKILLS_URL_API;

  const listsResponse = await fetch(`${SKILLS_URL_API}/data.json`);
  const listsData: Promise<Item[]> = await listsResponse.json();
  return listsData
}
