interface SkillBadgeProps {
  skill: string;
  level: string;
}

export default function SkillBadge({ skill, level }: SkillBadgeProps) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-between items-center">
      <span className="font-semibold text-gray-800">{skill}</span>
      <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
        {level}
      </span>
    </div>
  );
}
