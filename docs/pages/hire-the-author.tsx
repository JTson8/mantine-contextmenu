import { Container, Text } from '@mantine/core';
import ExternalLink from '~/components/ExternalLink';
import PageNavigation from '~/components/PageNavigation';
import PageText from '~/components/PageText';
import PageTitle from '~/components/PageTitle';
import { AUTHOR_LINK, MANTINE_DATATABLE_LINK } from '~/config';
import classes from './hire-the-author.module.css';

const PATH = 'hire-the-author';

export default function Page() {
  return (
    <Container>
      <PageTitle of={PATH} />
      <div className={classes.intro}>
        <ExternalLink to={AUTHOR_LINK}>
          <img className={classes.picture} src="https://avatars.githubusercontent.com/u/581999" alt="@icflorescu" />
        </ExternalLink>
        <div>
          <Text className={classes.greeting} component="h3">
            Hi there!
          </Text>
          <Text>
            I’m Ionut-Cristian Florescu, a full-stack developer from Bucharest, Romania, EU, with more than 20 years of
            experience in building commercial web applications and open-source projects.
          </Text>
        </div>
      </div>
      <PageText>
        <ExternalLink to={MANTINE_DATATABLE_LINK}>Mantine DataTable</ExternalLink>, one of my dearest open-source
        projects, was much appreciated by the community partially due to its rather unique row context-menu
        functionality since its early days.
      </PageText>
      <PageText>
        That’s why I decided to package the functionality into a separate component so you can use it anywhere in your
        app.
      </PageText>
      <PageText>
        You can learn more about what I do by visiting my profiles on{' '}
        <ExternalLink to={AUTHOR_LINK}>GitHub</ExternalLink>{' '}
        <img className={classes.badge} src="https://img.shields.io/github/stars/icflorescu" alt="GitHub stars" />{' '}
        <img
          className={classes.badge}
          src="https://img.shields.io/github/followers/icflorescu"
          alt="GitHub followers"
        />{' '}
        or <ExternalLink to="https://www.linkedin.com/in/icflorescu">LinkedIn</ExternalLink>, but since you are on this
        page, you probably have a pretty good idea of how my skills could help you.
      </PageText>
      <PageText>
        So, if you want to hire my services, don’t hesitate to{' '}
        <Text className={classes.emphasis} component="span">
          drop me a line
        </Text>{' '}
        at the email address listed in my GitHub profile.
        <br />
        I’m currently getting a constant flow of approaches, some of them relevant, others not so relevant.
        <br />
        Mentioning <em>“Mantine ContextMenu”</em> in your text would help me{' '}
        <Text className={classes.emphasis} component="span">
          <em>prioritize your message</em>.
        </Text>
      </PageText>
      <PageText>
        Thank you for your interest,
        <br />
        <ExternalLink to={AUTHOR_LINK}>Ionut-Cristian Florescu</ExternalLink>
      </PageText>
      <PageNavigation of={PATH} />
    </Container>
  );
}
