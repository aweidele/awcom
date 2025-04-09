import { Section } from "./Section";
import Heading from "../elements/Heading";
import Grid from "./Grid";
import { LinkedInLogo, BlueSkyLogo, GitHubLogo } from "../elements/Icons";
import { MailForm } from "../elements/MailForm";

export const Footer = () => {
  return (
    <Section tag="footer" className="bg-s2 text-white py-32">
      <Heading l={3}>Connect With Me</Heading>
      <Grid>
        <div className="col-span-5">
          <MailForm />
        </div>
        <div className="col-span-7 max-md:pt-10">
          <ul className="flex justify-center md:justify-end gap-2">
            <li>
              <a href="https://www.linkedin.com/in/aaron-weidele/" target="_blank">
                <LinkedInLogo className="h-8 w-8 fill-current" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/aweidele.bsky.social" target="_blank">
                <BlueSkyLogo className="h-8 w-8 fill-current" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/aweidele" target="_blank">
                <GitHubLogo className="h-8 w-8 fill-current" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
          </ul>
          <p className="text-xs text-center md:text-right font-sans my-4">
            <a href="https://github.com/aweidele/awcom/tree/sites/2024b-site" target="_blank" className="underline hover:text-p2 duration-300">
              See the repo for this site!
            </a>
          </p>
        </div>
      </Grid>
    </Section>
  );
};
