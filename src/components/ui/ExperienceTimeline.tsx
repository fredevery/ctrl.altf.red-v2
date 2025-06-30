import { FC } from 'react';

type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights?: string[];
};

const experiences: Experience[] = [
  {
    company: 'ExampleCorp',
    role: 'Senior Engineer',
    start: '2022',
    end: 'Present',
    highlights: [
      'Led migration to serverless architecture',
      'Mentored 5+ junior engineers',
      'Improved accessibility and performance across products',
    ],
  },
  {
    company: 'WebWorks',
    role: 'Lead Developer',
    start: '2018',
    end: '2022',
    highlights: [
      'Architected multi-tenant SaaS platform',
      'Introduced automated testing and CI/CD',
    ],
  },
  {
    company: 'DevStudio',
    role: 'Full Stack Developer',
    start: '2012',
    end: '2018',
    highlights: [
      'Built and maintained client web apps',
      'Collaborated with cross-functional teams',
    ],
  },
];

export const ExperienceTimeline: FC = () => (
  <ol className="relative border-l border-muted-foreground/20 pl-6">
    {experiences.map((exp) => (
      <li key={exp.company + exp.start} className="mb-10 ml-4">
        <div
          className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border-2 border-white"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">
            {exp.start} – {exp.end}
          </span>
          <span className="font-semibold text-base">{exp.role}</span>
          <span className="text-base">{exp.company}</span>
          {exp.highlights && (
            <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
);
