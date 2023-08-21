import { IconListCheck } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Item } from '~/services/trello';
import { SkillsItems } from './SkillsItems';
import Modal from '../common/Modal';


export interface Props {
  title?: string;
  subtitle?: string;
  highlight?: string;
  items?: Array<Item>;
}

export default function Skills({items}: Props) { 

  const [skills, setSkills] = useState<Item[] | null>()
  const [showModal, setShowModal] = useState<boolean>(false)

  function handleHideModal() {
    setShowModal(false)
  }

  useEffect(() => {
    console.log('entrou')
    setSkills(items)
  }, [items])

  function onHandleClick(name?: string) {  
    // setShowModal(true)    
    setSkills((previous) => {
      if (previous) {
        console.log(previous)
        return previous.map(s => {
          console.log(s.title, name, s.show)
          if (s.title === name) {
            
            s.show = !s.show
            return s
          }
          return s
        })
      }
      return null      
    })
    
  }

  return (
    <section className="bg-blue-50 dark:bg-slate-900">
      <Modal show={showModal} hide={handleHideModal} />

      <div className={`lg:px-80 px-1 mx-auto flex flex-col items-center justify-center flex-wrap dark:text-white mt-50`}>
        {
          skills &&
            skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} onClick={() => onHandleClick(skill.title)} className="cursor-pointer relative h-full mt-2 p-4 w-full lg:max-w-[800px] bg-white dark:bg-slate-900 rounded shadow-lg hover:shadow-md transition border border-transparent dark:border-slate-800">
                  <div className="flex items-center justify-start gap-3 relative text-slate-400 z-20">
                    <IconListCheck/>
                    {skill.title}
                  </div>

                {
                  skill.subitems && skill.subitems.length > 0 && 
                  skill.subitems.map((ssb, index) => <SkillsItems key={index} title={ssb.title} items={ssb.subitems} labels={ssb.labels} />)
                }
              </div>
            ))
        }
      </div>
    </section>
  )  
}