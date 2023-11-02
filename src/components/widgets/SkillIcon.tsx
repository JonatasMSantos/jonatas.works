import { Item } from "~/types"

interface SkillIconProps {
  name: string
}

export default function SkillIcon(props: SkillIconProps) {
  return (
    <span  className="text-sm p-2 rounded-md border-primary dark:border-blue-700 border-2">
      {props.name} <i className={`devicon-${props.name}-plain`} />
    </span>
  )
}