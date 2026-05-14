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
                I've spent the last {YEARS_OF_EXPERIENCE}+ years in data analytics, building systems
                that take noisy, raw data and turn it into something a business can rely on.
                Today I'm a Senior Data Analyst at <span className="font-medium text-foreground">Naabhik Solutions LLP</span>,
                where I lead Data Quality and Governance work on SAP and support client engagements
                across Master Data, Pricing, and FICO.
              </p>
              <p className="text-muted-foreground">
                Before that, I spent over four years at <span className="font-medium text-foreground">Numerator</span> as a
                Senior QC Data Analyst. I built and automated data pipelines on Azure and PySpark,
                ran quality control on large consumer panel datasets, and shipped Power BI dashboards
                that leadership used to make day-to-day decisions.
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
                Good data work isn't about producing more reports. It's about asking the right
                questions and making sure the numbers behind the answer can actually be trusted.
                That's where I focus my time:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Transforming complex datasets into clear, actionable insights</li>
                <li>Setting data quality and governance standards that hold at scale</li>
                <li>Aligning master data across pricing, finance (FICO), and operations</li>
                <li>Building pipelines that stay reliable as systems and teams grow</li>
                <li>Creating visualizations that communicate findings without the noise</li>
                <li>Continuously refining processes for greater efficiency and accuracy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
