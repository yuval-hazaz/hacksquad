import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GithubLoginButton } from 'react-social-login-buttons';
import { NavigationBar } from '../shared/NavBar';
import { api, AUTH_URL } from '../../shared/api';
import { Leaderboard } from '../Leaderboard';
import { isServerSide } from '../../shared/utils';
import { getUser } from '../../shared/auth.service';
import { trackAnalyticsEvent } from '../../shared/analytics.service';

export function PageBanner() {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="w-nav">
      <div className="banner">
        <div className="banner-wrap">
          <div>
            Join and support open-source and
{' '}
            <a href="#" className="link-white link-bold">
              hacktoberfest
            </a>
            , every commit counts
          </div>
        </div>
      </div>
      <NavigationBar />
      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
    </div>
  );
}

export function MainPageHero() {
  return (
    <div className="header-section-dark">
      <div className="container home-header-grid">
        <div>
          <div className="title-blue">Join with your squad</div>
          <h1 className="hero-heading-white">Friendly Open-Source Squad Competition</h1>
          <p className="body-large-400 max-width">
            Participate in Hacktoberfest 2021. Contribute Code. Help the community. Win Swag.
          </p>
          <div className="button-wrapper-centre">
            {/* <a
              href={AUTH_URL}
              className="button button-space w-button"
              onClick={() => trackAnalyticsEvent('register:main-hero')}>
              Start now
            </a> */}
            <GithubLoginButton
              text="Sign up with GitHub"
              style={{ maxWidth: 300 }}
              onClick={() => window.open(`${AUTH_URL}`)}
            />
          </div>
        </div>
        <div className="header-image">
          <a href="/" target="_blank" className="footer-link footer-link-social w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150dba88e067439ddf862fe_hackSquad-2021.png"
              loading="lazy"
              alt=""
              className="hero-image"
            />
          </a>

          <a
            href="https://hacktoberfest.digitalocean.com/"
            target="_blank"
            className="footer-link footer-link-social w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150a858f36d6885738ff836_logo-hacktoberfest-full2.aa1e9d9.svg"
              loading="lazy"
              alt=""
              className="hero-image"
            />
          </a>
        </div>
      </div>
      <img
        src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6130b55cdc153db305632f31_Hero%20Modern%20Dark%20Pattern.svg"
        loading="lazy"
        alt=""
        className="dark-pattern"
      />
    </div>
  );
}

export function ValuesSection() {
  return (
    <div className="feature-section-dark">
      <div className="container-large">
        <div className="feature-wrapper">
          <div className="w-layout-grid feature-grid">
            <div id="w-node-_514b032d-d573-f43d-3da9-16dbc81ff8e5-c81ff8e0">
              <div className="title title-large heading-white">
                {' '}
                what we
                <br />
                Value most
              </div>
              <div className="div-block-2">
                <Link href="/rules" passHref>
                  <a className="button button-space w-button">Rules</a>
                </Link>

                <Link href="/resources" passHref>
                  <a className="button-dark w-button">Resources</a>
                </Link>
              </div>
            </div>
            <div id="w-node-_514b032d-d573-f43d-3da9-16dbc81ff8f2-c81ff8e0" className="w-layout-grid feature-card-grid">
              <div id="w-node-_514b032d-d573-f43d-3da9-16dbc81ff8f3-c81ff8e0" className="feature-block-dark">
                <img
                  src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6130b55cdc153de76b632fd0_Icon%20Reliable.svg"
                  loading="lazy"
                  alt=""
                  className="icon-medium"
                />
                <h5 className="heading-white">Quality First</h5>
                <p className="body-medium">
                  Quality first. We want you to have fun, and even win some prizes. But meaningful contributions, and
                  helping the community is why you should join.
                </p>
              </div>
              <div className="feature-block-dark">
                <img
                  src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6130b55cdc153d2100632fcb_Icon%20Quality.svg"
                  loading="lazy"
                  alt=""
                  className="icon-medium"
                />
                <h5 className="heading-white">Developers Community</h5>
                <p className="body-medium">
                  Open source is much more than just accessible code. It's being part of a community, educate peers,
                  learn together, help projects, have fun.
                </p>
              </div>
              <div className="feature-block-dark">
                <img
                  src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6130b55cdc153d5e10632f49_Icon%20Communication.svg"
                  loading="lazy"
                  alt=""
                  className="icon-medium"
                />
                <h5 className="heading-white">Friendly Competition</h5>
                <p className="body-medium">
                  Compete, try to be better, contribute more, crush the competition :) But never forget, it's friendly,
                  helping the community is why you joined.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="value-background" />
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <div className="content-section-dark">
      <div className="container-large">
        <div className="title-wrap-large-centre">
          <div className="title-blue">How it works</div>
          <h3 className="h3-title-white">Simple steps to join the competition</h3>
        </div>
        <div className="w-layout-grid company-grid">
          <div className="content-card-dark">
            <div className="number-blue-large number-meduim">Join a Squad</div>
            <p className="body-medium text-neutral-400">
              Register with Github, and join your squad, or open a new one with your unique name and colors.
            </p>
            <div className="div-block">
              <a
                href={AUTH_URL}
                className="button-dark w-button"
                onClick={() => trackAnalyticsEvent('register:join-team')}>
                Join Team
              </a>
            </div>
          </div>
          <div className="content-card-dark">
            <div className="number-blue-large number-meduim">Invite Others</div>
            <p className="body-medium text-neutral-400">
              Invite your fellow developers or company to join your squad. Don't forget to invite your competitors as
              well.
            </p>
            <div className="div-block">
              <a
                href={AUTH_URL}
                className="button-dark w-button"
                onClick={() => trackAnalyticsEvent('register:invite-friends')}>
                Invite Friends
              </a>
            </div>
          </div>
          <div className="content-card-dark">
            <div className="number-blue-large number-meduim">Contribute Code</div>
            <p className="body-medium text-neutral-400">
              Just start to contribute code as a squad. From big projects to small ones. Every language count.
            </p>
            <div className="div-block">
              <Link href="/rules" passHref>
                <a href="#" className="button-dark w-button">
                  Find Repos
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedTeams() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  async function loadLeaderboard() {
    const response = await api.get('/v1/leaderboard');

    setLeaderboard(response.leaderboard);
  }

  return (
    <div className="testimonial-section-dark">
      <div className="container">
        <div className="title-wrap-centre">
          <h3 className="h3-title-white">The Squads</h3>
          <h4 className="body-large-400">
            Here are some the best
            <a href="#" className="link-white" />
          </h4>
        </div>
        <div style={{ width: '100%', maxWidth: 700, margin: '0 auto' }}>
          <Leaderboard items={leaderboard?.slice(0, 4)} />
        </div>
        <div className="feature-wrapper">
          <div className="background-dark-800" />
          <div className="button-center" style={{ marginTop: 0 }}>
            <Link href="/leaderboard">
              <a
                className="button button-space w-button"
                onClick={() => trackAnalyticsEvent('leaderboard:full-standings')}>
                Go to Leaderboard
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SponsorsSection() {
  return (
    <div className="customer-section-dark" style={{ marginTop: -160 }}>
      <div className="container">
        <div className="title-wrap-centre-small">
          <h4 className="h4-title-white" style={{ fontSize: 20, marginBottom: -30, color: '#bbb' }}>
            Sponsored by
          </h4>
        </div>
        <div className="w-layout-grid logo-centre">
          <a
            href="https://notifire.co/"
            target="_blank"
            onClick={() => trackAnalyticsEvent('sponsor:notifire')}
            style={{ position: 'relative', top: -5 }}>
            <img
              src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White.png"
              loading="lazy"
              sizes="(max-width: 991px) 94vw, 840px"
              srcSet="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White-p-500.png 500w, https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White-p-800.png 800w, https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White-p-1080.png 1080w, https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White-p-1600.png 1600w, https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White-p-2000.png 2000w, https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White-p-2600.png 2600w, https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White-p-3200.png 3200w, https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e1aab11e8403a836e5af_SideLogo%20-%20White.png 4048w"
              alt=""
            />
          </a>
          <a href="https://appwrite.io/" target="_blank" onClick={() => trackAnalyticsEvent('sponsor:appwrite')}>
            <img
              src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150e00f6eb1ae11ee270243_logo-1.svg"
              loading="lazy"
              id="w-node-d667362f-3d76-0aba-5d94-efeb72b93135-72b9312f"
              alt=""
              className="logo"
            />
          </a>
          <a href="https://daily.dev/" target="_blank" onClick={() => trackAnalyticsEvent('sponsor:daily.dev')}>
            <img
              src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6151a1dc5ce80b84a433d024_Logo%20-%20White.png"
              loading="lazy"
              id="w-node-d667362f-3d76-0aba-5d94-efeb72b94236-72b9312f"
              alt=""
              className="logo"
            />
          </a>
          <a href="https://amplication.com/" target="_blank" onClick={() => trackAnalyticsEvent('sponsor:amplication')}>
            <img
              src="/amplication-logo.svg"
              loading="lazy"
              id="w-node-d667362f-3d76-0aba-5d94-efeb72b94236-72b9312f"
              alt=""
              className="logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer-section-template">
      <div className="container">
        <div className="w-layout-grid footer-grid">
          <div className="footer-column">
            <a href="/" aria-current="page" className="w-inline-block w--current">
              <img
                src="https://uploads-ssl.webflow.com/6130b55cdc153dd345632ef1/6150edec1e11a6802fe4a951_hacksquad-color.png"
                loading="lazy"
                height="50"
                alt=""
                className="footer-logo"
              />
            </a>
          </div>
          <div className="footer-column">
            <div className="title-grey-400">Contest</div>
            <Link href="/rules" passHref>
              <a className="footer-link w-inline-block">
                <div>Rules</div>
              </a>
            </Link>

            <a href="/resources" className="footer-link w-inline-block">
              <div>Resources</div>
            </a>
            <a href="/assets" className="footer-link w-inline-block">
              <div>Logos &amp; Assets</div>
            </a>
          </div>
          <div className="footer-column">
            <div className="title-grey-400">Other</div>
            <a href="/terms" className="footer-link w-inline-block">
              <div>Terms</div>
            </a>
            <a href="/privacy" className="footer-link w-inline-block">
              <div>Privacy</div>
            </a>
            <a href="/contact-us" className="footer-link w-inline-block">
              <div>Contact</div>
            </a>
          </div>
        </div>
        <div className="footer-line" />
        <div className="footer-legal-bar">
          <div className="w-layout-grid footer-socials">
            <a href="/" className="footer-legal-link">
              © HackSquad 2021
            </a>
          </div>
          <a
            href="https://github.com/notifirehq/hacksquad"
            target="_blank"
            className="footer-link footer-link-social w-inline-block">
            <div className="text-block-2"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
