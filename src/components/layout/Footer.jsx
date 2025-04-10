import { Section } from "./Section";
import Heading from "../elements/Heading";
import Grid from "./Grid";
import { LinkedInLogo, BlueSkyLogo, GitHubLogo, StorybookLogo } from "../elements/Icons";
import { MailForm } from "../elements/MailForm";

export const Footer = () => {
  return (
    <>
      <Section className="bg-p2 text-xs py-5 md:sticky bottom-0 z-50">
        <nav className="flex justify-center gap-5 items-center flex-wrap">
          <h3 className="font-semibold max-sm:w-full text-center">Check under the hood!</h3>
          <ul className="flex justify-center gap-5 items-center">
            <li>
              <a href="https://github.com/aweidele/awcom/tree/sites/2025-site" target="_blank" className="underline hover:text-p duration-300 flex gap-2 items-center">
                <GitHubLogo className="h-6 w-6 fill-current" />
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://storybook.aaronweidele.com/" target="_blank" className="underline hover:text-p duration-300 flex gap-2 items-center">
                <StorybookLogo className="h-6 w-6 fill-current" />
                <span>Storybook</span>
              </a>
            </li>
          </ul>
        </nav>
      </Section>
      <footer>
        <Section className="bg-s2 text-white py-28">
          <Heading l={3}>Connect With Me</Heading>
          <Grid>
            <div className="col-span-5">
              <MailForm />
            </div>
            <nav className="col-span-7 max-md:pt-10">
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
            </nav>
          </Grid>
        </Section>
      </footer>
    </>
  );
};
