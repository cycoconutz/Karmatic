import React, { useEffect } from 'react';
import {
  DemoActions,
  DemoBlurb,
  DemoBox,
  DemoCloseButton,
  DemoLede,
  DemoList,
  DemoOverlay,
  DemoPassword,
  DemoPwHint,
  DemoRow,
  DemoRowHead,
  DemoSecret,
  DemoTag,
  DemoTitle,
  DemoUsername,
} from './DemoAccountsModal.styled';
import { PrettyButton } from '../Buttons/PrettyButton.styled';

export const DEMO_DISMISS_KEY = 'karmatic:demo-accounts-dismissed';

const DEMO_ACCOUNTS = [
  {
    username: 'Tim-Zebra',
    password: 'abc123',
    karma: 100,
    blurb:
      'Browse the wall, offer to help, and earn karma — a classic helper account to start with.',
  },
  {
    username: 'Stiltskinner',
    password: 'potato5',
    karma: 100,
    blurb: 'See what a busy neighbor looks like — plenty of requests to help with.',
  },
  {
    username: 'billycwong19',
    password: 'UI/UX123',
    karma: 9001,
    blurb: 'A well-seasoned helper with a stacked karma balance. Worth a look.',
  },
  {
    username: 'cyconutz',
    password: 'nutz2000',
    karma: 100,
    blurb: 'A regular volunteer profile — check out the profile and dashboard views.',
  },
];

export function demoAccountsWereDismissed() {
  try {
    return sessionStorage.getItem(DEMO_DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

export default function DemoAccountsModal({ open, onDismiss }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') onDismiss();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onDismiss]);

  if (!open) return null;

  return (
    <DemoOverlay onClick={onDismiss} role="presentation">
      <DemoBox
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        onClick={(e) => e.stopPropagation()}
      >
        <DemoCloseButton
          type="button"
          onClick={onDismiss}
          aria-label="Close demo logins"
        >
          ×
        </DemoCloseButton>

        <DemoTag>Karmatic</DemoTag>
        <DemoTitle id="demo-title">Try Karmatic without signing up</DemoTitle>
        <DemoLede>
          Karmatic is a working community-help network wired end-to-end — not a mockup.
          Earning and spending karma is live against the app's database, so you can poke
          every corner as a real helper. Jump in with any demo account below.
        </DemoLede>

        <DemoPwHint>
          Sign in with any demo username using the password shown next to it.
        </DemoPwHint>

        <DemoList>
          {DEMO_ACCOUNTS.map((a) => (
            <DemoRow key={a.username}>
              <DemoRowHead>
                <DemoUsername>{a.username}</DemoUsername>
                <DemoPassword>{a.password}</DemoPassword>
              </DemoRowHead>
              <DemoBlurb>{a.blurb}</DemoBlurb>
            </DemoRow>
          ))}
        </DemoList>

        <DemoActions>
          <PrettyButton type="button" onClick={onDismiss}>
            Start exploring
          </PrettyButton>
          <DemoSecret>any demo account · sign in from the nav</DemoSecret>
        </DemoActions>
      </DemoBox>
    </DemoOverlay>
  );
}