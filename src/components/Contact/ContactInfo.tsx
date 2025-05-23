import { SocialLink } from '@/types';
import { SOCIAL_LINKS } from '@/constants';

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {SOCIAL_LINKS.map((link) => (
        <div key={link.title} className="flex items-start space-x-4">
          <div className="bg-brand-lightblue dark:bg-brand-blue/20 p-3 rounded-full">
            <link.icon className="h-5 w-5 text-brand-blue" />
          </div>
          <div>
            <p className="font-medium">{link.title}</p>
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand-blue transition-colors"
            >
              {link.username}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}; 