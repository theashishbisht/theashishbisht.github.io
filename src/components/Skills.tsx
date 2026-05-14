
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Database, Code, Server, CloudCog, PenTool, LineChart, Cpu, Wrench, Cloud, Monitor } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('tech-stack');

  const technicalSkills = [
    { name: 'SQL', level: 95 },
    { name: 'NoSQL', level: 85 },
    { name: 'Azure Data Factory', level: 90 },
    { name: 'PySpark', level: 88 },
    { name: 'Power BI', level: 92 },
    { name: 'Python', level: 85 },
    { name: 'Linux', level: 80 },
    { name: 'Hadoop', level: 82 },
    { name: 'Apache Spark', level: 85 },
    { name: 'Google Cloud Platform', level: 78 },
  ];

  const techStack = [
    { name: 'SQL', icon: <Database className="h-8 w-8 text-brand-blue" /> },
    { name: 'Python', icon: <Code className="h-8 w-8 text-brand-blue" /> },
    { name: 'Azure', icon: <Cloud className="h-8 w-8 text-brand-blue" /> },
    { name: 'NoSQL', icon: <Database className="h-8 w-8 text-brand-orange" /> },
    { name: 'PySpark', icon: <Cpu className="h-8 w-8 text-brand-orange" /> },
    { name: 'Power BI', icon: <LineChart className="h-8 w-8 text-brand-blue" /> },
    { name: 'Hadoop', icon: <Server className="h-8 w-8 text-brand-orange" /> },
    { name: 'Linux', icon: <Wrench className="h-8 w-8 text-brand-darkblue" /> },
    { name: 'GCP', icon: <CloudCog className="h-8 w-8 text-brand-blue" /> },
    { name: 'Apache Spark', icon: <Cpu className="h-8 w-8 text-brand-orange" /> },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Technical Skills</h2>
          <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground max-w-3xl">
            The technologies and tools I use to analyze data and create solutions
          </p>
        </div>

        <Tabs 
          defaultValue="tech-stack" 
          className="w-full mb-10"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
            <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
            <TabsTrigger value="skill-levels">Skill Levels</TabsTrigger>
          </TabsList>

          <TabsContent value="tech-stack" className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {techStack.map((tech) => (
                <Card key={tech.name} className="border-none shadow-md hover:shadow-lg transition-all card-hover">
                  <CardContent className="flex flex-col items-center justify-center pt-6 pb-4">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-4 mb-4 shadow-md flex items-center justify-center w-16 h-16">
                      {tech.icon}
                    </div>
                    <h3 className="font-medium text-center">{tech.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skill-levels" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2">
              {technicalSkills.map((skill) => (
                <Card key={skill.name} className="border-none shadow-md card-hover">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className={`mt-16 grid gap-8 md:grid-cols-3 ${activeTab === 'tech-stack' ? '' : 'mt-8'}`}>
          <Card className="border-none shadow-md bg-gradient-to-br from-brand-blue to-brand-darkblue text-white card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
              <p className="text-white/90">
                Expert in transforming raw data into actionable insights through statistical analysis 
                and advanced visualization techniques.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-gradient-to-br from-brand-orange to-brand-yellow text-white card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
              <p className="text-white/90">
                Skilled at building efficient data pipelines and ETL processes to ensure 
                reliable and accessible data infrastructure.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md bg-gradient-to-br from-brand-darkblue to-brand-blue text-white card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-white/90">
                Experienced in implementing and optimizing data solutions across cloud platforms
                for scalable and robust performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
