import Image from 'next/image'
import Link from 'next/link'
import ExternalLink from "@/components/external-link";
import WorkItemComponent, { WorkItem } from '@/components/work-item';
import DividerWithTextComponent from '@/components/divider-with-text';
import ProjectItemComponent, { ProjectItem } from '@/components/project-item';
import UntitledFinanceApp from '@/components/untitiled-finance-app';

import kikisAdventurePic from '../images/kikis-scavenger-hunt.png';
import mindLabPic from '../images/mindlab-website.png';
import profilePic from '../images/Dale Chang Profile Costco.jpg';
import climbPic from '../images/pink-v6-v7.png'

const profileImageStyle = {
  borderRadius: '50%',
  border: '1px solid #F1F5F9',
}

const climbImageStyle = {
  
}

const workItems: WorkItem[] = [
  {
    companyName: 'SAIC, Koverse',
    companyLink: 'https://www.saic.com/',
    jobTitle: 'Sr Software Engineer',
    startYear: 2023,
    notableTechnologies: [
      { displayText: 'React', href: 'https://react.dev/' },
      { displayText: 'TypeScript', href: 'https://www.typescriptlang.org/' },
      { displayText: 'Java', href: 'https://www.java.com/en/' },
      { displayText: 'Spring', href: 'https://spring.io/' },
      { displayText: 'Docker', href: 'https://www.docker.com/' },
      { displayText: 'Kubernetes', href: 'https://kubernetes.io/' },
      { displayText: 'Azure', href: 'https://azure.microsoft.com/' },
      { displayText: 'Helm', href: 'https://helm.sh/' }
    ],
    description: 'Build, research, and test experimental solutions for DARPA.',
  },
  {
    companyName: 'Innovim',
    companyLink: 'https://innovim.com/',
    jobTitle: 'Tech Lead',
    otherTitles: ['Sr Software Engineer'],
    startYear: 2022,
    endYear: 2023,
    notableTechnologies: [
      { displayText: 'React', href: 'https://react.dev/' },
      { displayText: 'TypeScript', href: 'https://www.typescriptlang.org/' },
      { displayText: 'GitLab', href: 'https://about.gitlab.com/' }
    ],
    description: 'Built and maintained UX-tracking software to understand and improve how airmen use technology. Eventually lead this team within a few months of joining to fill the lead/PM role.',
  },
  {
    companyName: 'Cigna',
    companyLink: 'https://www.cigna.com/',
    jobTitle: 'Sr Software Engineer',
    startYear: 2019,
    endYear: 2022,
    notableTechnologies: [
      { displayText: 'Angular', href: '' },
      { displayText: 'TypeScript', href: 'https://www.typescriptlang.org/' },
      { displayText: 'Java', href: 'https://www.java.com/en/' },
      { displayText: 'Spring', href: 'https://spring.io/' },
      { displayText: 'Docker', href: 'https://www.docker.com/' },
      { displayText: 'AWS', href: 'https://aws.amazon.com/' }
    ],
    description: 'Lead, designed, and engineered internal financial reporting applications and workflows. Additionally I also frequently lead complex software upgrade deployments.',
  },
  {
    companyName: 'Leidos',
    companyLink: 'https://www.leidos.com/',
    jobTitle: 'Data Integration Engineer',
    startYear: 2018,
    endYear: 2019,
    notableTechnologies: [
      { displayText: 'JavaScript', href: '' },
      { displayText: 'Java', href: 'https://www.java.com/en/' },
      { displayText: 'Spark', href: 'https://spark.apache.org/' },
      { displayText: 'Hadoop', href: 'https://hadoop.apache.org/' }
    ],
    description: 'Developed CAADS, a data science platform that enabled government agencies to manage and analyze their data. Also I prototyped and presented a variety of best-of-breed solutions for capturing new lines of business.',
  },
  {
    companyName: 'Leidos',
    companyLink: 'https://www.leidos.com/',
    jobTitle: 'Text Analytics & Software Analyst',
    startYear: 2016,
    endYear: 2018,
    notableTechnologies: [
      { displayText: 'Java', href: 'https://www.java.com/en/' },
      { displayText: 'Spring', href: 'https://spring.io/' },
      { displayText: 'Spark', href: 'https://spark.apache.org/' },
      { displayText: 'Hadoop', href: 'https://hadoop.apache.org/' }
    ],
    description: 'Designed and developed features for COBRA, an e-discovery platform for underfunded government agencies to help with civil litigation.',
  }
]

const latestProjects: ProjectItem[] = [
  {
    projectName: 'Kiki\'s Scavenger Hunt',
    projectLink: 'https://github.com/eloquia/kikis-adventure',
    startYear: 2024,
    isCompleted: true,
    notableTechnologies: [
      { displayText: 'TypeScript', href: 'https://www.typescriptlang.org/' },
      { displayText: 'Phaser 3', href: 'https://phaser.io/' },
      { displayText: 'CapacitorJS', href: 'https://capacitorjs.com/' },
      { displayText: 'iOS', href: 'https://www.apple.com/ios/' }
    ],
    description: 'Developed a visual novel game in 6 weeks using Phaser 3 and various LLM prompting techniques.',
    projectImage: kikisAdventurePic,
    projectImageAlt: 'Screenshot of Kiki\'s Scavenger Hunt game',
    projectImageType: 'mobile'
  },
  {
    projectName: 'MIND Lab',
    projectLink: 'http://mindlab.cs.umd.edu/',
    startYear: 2020,
    isCompleted: false,
    notableTechnologies: [
      { displayText: 'Java', href: 'https://www.java.com/en/' },
      { displayText: 'Spring', href: 'https://spring.io/' },
      { displayText: 'Spark', href: 'https://spark.apache.org/' },
      { displayText: 'Hadoop', href: 'https://hadoop.apache.org/' }
    ],
    description: 'Manage and mentor undergraduate interns on fundamentals of full-stack development and also CI/CD.',
    projectImageType: 'desktop',
    projectImage: mindLabPic,
    projectImageAlt: 'Screenshot of MIND Lab website',
  },
]

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center lg:col-span-1 lg:row-span-2 lg:self-start lg:justify-start lg:items-end lg:sticky lg:top-20 lg:mr-24">
        <div className="flex flex-col max-w-md">
          <h2 className="mb-3 text-2.5xl font-semibold text-slate-100 place-self-center">Dale Chang</h2>
          <h3 className="mb-2 text-2xl text-slate-100 place-self-center">Senior Software Engineer</h3>
          <Image
            src={profilePic}
            width={300}
            height={300}
            alt="Picture of Dale Chang"
            style={profileImageStyle}
            className="mb-8 mt-4 place-self-center"
          />
          <a
            href="/files/dale-chang-software-engineer-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary rounded-lg text-slate-100 place-self-center hover:bg-indigo-300 hover:text-slate-800"
            download
          >
            Get my Resume
          </a>
          <p className={`my-8 opacity-50 text-balance text-center`}>
            I build scalable tech solutions.
          </p>
        </div>
      </div>

      <div className="lg-content w-screen flex flex-col items-center mb-16 lg:grid-cols-1 lg:w-96">

        <div className="about-content flex flex-col mb-16 xl:col-span-1">
          <DividerWithTextComponent text="About" />
          <article className="flex flex-col gap-4 items-center lg:items-start">
            <div className="w-80 lg:w-full">
              <p className="text-slate-400 sm:text-lg">For all my life I&apos;ve always been interested in creating things, from building legos as a child to cooking delicious recipes. Before my software career, I graduated in physics because I wanted to know how everything works. Now, I&apos;ve worked in a Fortune 20 company, for a start up, and on various government contracts.</p>
            </div>
            <div className="w-80 lg:w-full">
              <p className="text-slate-400 sm:text-lg">From the very start, I&apos;ve worked my way up to dreaming of, developing, and delegating large-scale features. I love both green-field and brown-field opportunities and I enjoy finding elegant solutions to complex problems.</p>
            </div>
            <div className="w-80 lg:w-full">
              <p className="text-slate-400 sm:text-lg">When I&apos;m not prgramming, I enjoy climbing, learning German, tending my knowledge garden in <ExternalLink externalLink="https://obsidian.md" displayText="Obsidian" />,  cooking, and spending time with my partner.</p>
            </div>
          </article>
        </div>

        <div className="work-content sm:mb-16">
          <DividerWithTextComponent text="Work" />
          <article className="flex flex-col gap-4 items-center">
            <WorkItemComponent {...workItems[0]} />
            <WorkItemComponent {...workItems[1]} />
            <WorkItemComponent {...workItems[2]} />
            <WorkItemComponent {...workItems[3]} />
            <WorkItemComponent {...workItems[4]} />
          </article>
        </div>

        <div className="climbing-content mb-16 xl:col-span-2">
          <DividerWithTextComponent text="Latest Climb" />
          <article className="climb-container flex flex-col items-center">
            <Image
              src={climbPic}
              alt="Pink Boulder"
              width={300}
              height={300}
              style={climbImageStyle}
              className="mb-8"
            />
            <h1 className='w-80 text-slate-100 mb-2 font-bold lg:w-96'>Pink Boulder</h1>
            <p className="w-80 text-slate-400 lg:w-96">Vert wall climb with tiny-moderate crimps and tiny footholds. This climb really works my body tension because I need to push through my feet to make the holds better. It also challenges my lats because I need to pull my weight closer to the wall to feel more secure.</p>
          </article>
        </div>

        <div className="latest-projects-content mb-16 w-screen flex flex-col items-center lg:w-96 xl:col-span-2">
          <div className="relative mb-8 w-80 lg:w-96">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-500"></div>
            </div>
            <div className="relative flex justify-start sm:justify-center">
              <span className="font-mono bg-slate-900 pr-3 text-base font-semibold leading-6 text-gray-200 sm:pl-3">Latest Projects</span>
            </div>
          </div>
          <ProjectItemComponent {...latestProjects[0]} />
          <ProjectItemComponent {...latestProjects[1]} />
          <UntitledFinanceApp />
        </div>

      </div>
    </>
  );
}
