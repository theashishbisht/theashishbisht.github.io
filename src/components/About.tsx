import { Card, CardContent } from '@/components/ui/card';
import { YEARS_OF_EXPERIENCE, EDUCATION_ITEMS } from '@/constants';

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
                With over {YEARS_OF_EXPERIENCE} years in data analytics, I've developed a passion
                for transforming raw data into meaningful insights that drive business decisions.
                I currently work at <span className="font-medium text-foreground">Naabhik Solutions LLP</span> as
                a Senior Data Analyst, focusing on SAP technologies, Data Quality &amp; Governance,
                and SAP FICO master-data engagements for clients.
              </p>
              <p className="text-muted-foreground">
                Previously, I spent four-plus years at <span className="font-medium text-foreground">Numerator</span> as
                a Senior QC Data Analyst, building scalable data pipelines on Azure and PySpark
                and shipping Power BI dashboards for leadership.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Education &amp; Background</h3>
              <div className="space-y-4">
                {EDUCATION_ITEMS.map((item) => (
                  <div key={item.title}>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.institution}
                      {item.year && item.year !== 'Present' ? `, ${item.year}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md md:col-span-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">My Approach to Data</h3>
              <p className="text-muted-foreground mb-4">
                I believe data is more than just numbers — it's a story waiting to be told. My work focuses on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Transforming complex datasets into clear, actionable insights</li>
                <li>Establishing data quality and governance standards that hold at scale</li>
                <li>Aligning master data across pricing, finance (FICO), and operations</li>
                <li>Building robust pipelines that ensure data reliability across systems</li>
                <li>Creating intuitive visualizations that communicate findings effectively</li>
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
