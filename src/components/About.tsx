
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50 dark:bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold mb-2 gradient-text">About Me</h2>
          <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground max-w-3xl">
            My journey, experience, and philosophy as a data professional
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
              <p className="text-muted-foreground mb-4">
                With over 4.5 years at Numerator as a Senior QC Data Analyst, I've developed 
                a passion for transforming raw data into meaningful insights that drive business decisions.
                I specialize in building scalable data solutions and automating processes to enhance 
                efficiency and accuracy in data workflows.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with business acumen to deliver 
                results that matter. I believe in continuous learning and staying updated with 
                the latest advancements in data technologies and methodologies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Education & Background</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Bachelor's in Mechanical Engineering</p>
                  <p className="text-sm text-muted-foreground">Silver Oak College of Engineering & Technology, 2020</p>
                </div>
                <div>
                  <p className="font-medium">12th Grade</p>
                  <p className="text-sm text-muted-foreground">Kendriya Vidyalaya Sangathan (KVS), 2016</p>
                </div>
                <div>
                  <p className="font-medium">Big Data Course</p>
                  <p className="text-sm text-muted-foreground">Currently pursuing</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md md:col-span-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">My Approach to Data</h3>
              <p className="text-muted-foreground mb-4">
                I believe that data is more than just numbers—it's a story waiting to be told. My work focuses on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Transforming complex datasets into clear, actionable insights</li>
                <li>Building robust data pipelines that ensure data quality and reliability</li>
                <li>Creating intuitive visualizations that communicate findings effectively</li>
                <li>Implementing data solutions that scale with business growth</li>
                <li>Continuously optimizing processes for greater efficiency and accuracy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
