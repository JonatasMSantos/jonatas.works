import { IconBook, IconCircleCheck, IconClick, IconCode, IconListCheck } from '@tabler/icons-react';
import { useState } from 'react';
import { Item } from '~/types';

export interface Props {
  title?: string;
  items?: Array<Item>;
  labels?: Array<Item>;
  image?: string | any; // TODO: find HTMLElementProps
}

export function SkillsItems({ title, items = [], labels }: Props) {

  title = title?.replace(/"/g, '');

  const [showItems, setShowItems] = useState(false)

  function handleClick() {
    setShowItems(previous => !previous)
  }

  function openNewTab(url) {
    if (url) {
      window.open(url, "_blank");
    }
    
  }

  return (
    <section>
      <div className="m-6">
        {
          title && (

            <div className="ml-1" onClick={handleClick}>

              <h1 className="flex items-center justify-start gap-2 mt-1 text-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-primary dark:border-blue-700 border-2">
                  <IconCode />
                </div>

                {title}

                {
                  labels && labels.map((l: Item, index) => (

                    <div key={index}>
                      {l.name === 'I got it' ?
                        <span className="flex gap-1 items-center justify-center w-20 h-6 bg-emerald-100 text-zinc-950 dark:text-zinc-50 dark:bg-green-950 rounded-md text-xs text-center">
                          <IconCircleCheck /> I got it
                        </span> :
                        <span className="flex gap-1 items-center justify-center w-20 h-6 bg-slate-200 text-zinc-950 dark:text-zinc-50 dark:bg-slate-800 rounded-md text-xs text-center">
                          <IconBook /> {l.name}
                        </span>
                      }
                    </div>
                  ))
                }

              </h1>
            </div>

          )
        }

        {
          showItems && items &&
          items.length > 0 &&
          items.map((item, index) => (
            <div className="ml-5 mt-5 flex" key={index}>
              <div className="flex flex-col items-center">
                <div>
                  {
                    <div className="flex items-center justify-center w-10 h-10">
                      <IconListCheck />
                    </div>
                  }
                </div>
                <div className="w-px h-full bg-gray-300 dark:bg-slate-500" />
              </div>
              <div className="pt-1 pb-8">
                {item.title &&
                  <p className="flex gap-2 items-center justify-start mb-2 ml-3 text-muted text-lg dark:text-gray-400">
                    {item.title} 

                    {item.labels ? item.labels.map((l, index) => (
                      <span key={index} className="flex gap-1 items-center text-sm justify-center p-2 h-8 rounded-md border-primary dark:border-blue-700 border-2">
                        {l.name} <i className={`devicon-${l.name}-plain`}></i>
                      </span>
                    )) : <></>}
                    
                  </p>}
                {item.subitems &&
                  item.subitems.length &&
                  item.subitems.map((si: Item, index) => (
                    <div key={index} className="flex justify-start gap-3 mt-5" onClick={() => openNewTab(si.url)}>
                      {si.completed ?
                        <span className="flex gap-1 items-center justify-center w-20 h-6 bg-emerald-100 text-zinc-950 dark:text-zinc-50 dark:bg-green-950 rounded-md text-xs text-center">
                          <IconCircleCheck /> I got it
                        </span> :
                        <span className="flex gap-1 items-center justify-center w-20 h-6 bg-slate-200 text-zinc-950 dark:text-zinc-50 dark:bg-slate-800 rounded-md text-xs text-center">
                          <IconBook /> Learning
                        </span>
                      }
                      {/*<Icon name={si.completed} className="w-5 h-6 m-0 p-0 dark:text-slate-200" /> */}
                      <span className="flex-1">{si.title}</span>

                      { item.url ? <IconClick/> : <></>}
                    </div>
                  ))}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
