import { FC } from 'react';

// You can add icons using react-icons or your own SVGs
// For now, this is a simple text-based showcase with categories

type Skill = {
  name: string;
  icon?: React.ReactNode;
  category: string;
};

const skills: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'API Design', category: 'Backend' },
  { name: 'Cloudflare Workers', category: 'DevOps' },
  { name: 'Accessibility (WCAG 2.1 AA)', category: 'Quality' },
  { name: 'Performance Optimization', category: 'Quality' },
];

const categories = Array.from(new Set(skills.map((s) => s.category)));

export const SkillsShowcase: FC = () => (
  <div className="space-y-6">
    {categories.map((category) => (
      <div key={category}>
        <h3 className="text-lg font-semibold mb-2">{category}</h3>
        <ul className="flex flex-wrap gap-3" aria-label={category + ' skills'}>
          {skills
            .filter((s) => s.category === category)
            .map((skill) => (
              <li
                key={skill.name}
                className="px-3 py-1 rounded bg-muted text-sm font-medium border border-muted-foreground/20"
              >
                {skill.icon && <span className="mr-2">{skill.icon}</span>}
                {skill.name}
              </li>
            ))}
        </ul>
      </div>
    ))}
  </div>
);
