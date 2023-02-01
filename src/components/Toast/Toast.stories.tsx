import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { StoryContainer } from '../__storybook/StoryContainer';
import { Button } from '../Button';
import type { ToastSwipeDirection, ToastViewPortLocation } from './Toast';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewPort,
} from './Toast';

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
const getEntries = <T extends Record<string, unknown>>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

export default {
  title: 'Components/Toast',
  component: Toast,
  subcomponents: {
    ToastAction,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewPort,
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Toast>;

export const Template: ComponentStory<typeof Toast> = (args) => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <StoryContainer>
      <ToastProvider>
        <Button
          variant="outline"
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              eventDateRef.current = oneWeekAway();
              setOpen(true);
            }, 100);
          }}
        >
          Add to Schedule
        </Button>
        <Toast {...args} className="flex gap-4" open={open} onOpenChange={setOpen}>
          <div className="flex-1">
            <ToastTitle>Scheduled: Catch up</ToastTitle>
            <ToastDescription>{prettyDate(eventDateRef.current)}</ToastDescription>
          </div>
          <div className="flex items-center">
            <ToastAction altText="Undo (Alt+U)">Undo</ToastAction>
          </div>
        </Toast>
      </ToastProvider>
    </StoryContainer>
  );
};
Template.args = {};
Template.storyName = 'Default';

export function DuplicateToasts() {
  const [savedCount, setSavedCount] = React.useState(0);

  return (
    <StoryContainer>
      <ToastProvider>
        <Button
          variant="outline"
          onClick={() => {
            setSavedCount((count) => count + 1);
          }}
        >
          Save
        </Button>
        {Array.from({ length: savedCount }).map((_, i) => (
          <Toast key={i}>
            <div className="flex items-center gap-4">
              <ToastDescription>✅ Saved</ToastDescription>
              <ToastClose>Close</ToastClose>
            </div>
          </Toast>
        ))}
      </ToastProvider>
    </StoryContainer>
  );
}

type SwipeDirectionReducerState = Record<ToastSwipeDirection, number>;
type SwipeDirectionReducerAction = { swipeDirection: ToastSwipeDirection };
export function SwipeDirection() {
  const [counts, dispatch] = React.useReducer(
    (state: SwipeDirectionReducerState, action: SwipeDirectionReducerAction) => {
      return {
        ...state,
        [action.swipeDirection]: state[action.swipeDirection] + 1,
      };
    },
    {
      down: 0,
      left: 0,
      right: 0,
      up: 0,
    } as SwipeDirectionReducerState
  );

  return (
    <StoryContainer>
      <div className="flex flex-col space-y-4">
        <ToastProvider viewPort="bottom-right" swipeDirection="right">
          <Button
            variant="outline"
            onClick={() => {
              dispatch({ swipeDirection: 'right' });
            }}
          >
            Right (bottom-right)
          </Button>
          {Array.from({ length: counts.right }).map((_, i) => (
            <Toast key={i}>
              <div className="flex items-center gap-4">
                <ToastDescription>Swipe Right 👉👉👉</ToastDescription>
              </div>
            </Toast>
          ))}
        </ToastProvider>
        <ToastProvider viewPort="bottom-center" swipeDirection="down">
          <Button
            variant="outline"
            onClick={() => {
              dispatch({ swipeDirection: 'down' });
            }}
          >
            Down (bottom-center)
          </Button>
          {Array.from({ length: counts.down }).map((_, i) => (
            <Toast key={i}>
              <div className="flex items-center gap-4">
                <ToastDescription>Swipe Down 👇👇👇</ToastDescription>
              </div>
            </Toast>
          ))}
        </ToastProvider>
        <ToastProvider viewPort="top-center" swipeDirection="up">
          <Button
            variant="outline"
            onClick={() => {
              dispatch({ swipeDirection: 'up' });
            }}
          >
            Up (top-center)
          </Button>
          {Array.from({ length: counts.up }).map((_, i) => (
            <Toast key={i}>
              <div className="flex items-center gap-4">
                <ToastDescription>👆👆👆 Swipe Up</ToastDescription>
              </div>
            </Toast>
          ))}
        </ToastProvider>
        <ToastProvider viewPort="top-left" swipeDirection="left">
          <Button
            variant="outline"
            onClick={() => {
              dispatch({ swipeDirection: 'left' });
            }}
          >
            Left (top-left)
          </Button>
          {Array.from({ length: counts.left }).map((_, i) => (
            <Toast key={i}>
              <div className="flex items-center gap-4">
                <ToastDescription>👈👈👈 Swipe Left</ToastDescription>
              </div>
            </Toast>
          ))}
        </ToastProvider>
      </div>
    </StoryContainer>
  );
}

type ViewPortReducerState = Record<ToastViewPortLocation, number>;
type ViewPortReducerAction = { viewPort: ToastViewPortLocation };
export function ViewPort() {
  const [counts, dispatch] = React.useReducer(
    (state: ViewPortReducerState, action: ViewPortReducerAction) => {
      return {
        ...state,
        [action.viewPort]: state[action.viewPort] + 1,
      };
    },
    {
      'bottom-center': 0,
      'bottom-left': 0,
      'bottom-right': 0,
      'top-center': 0,
      'top-left': 0,
      'top-right': 0,
    } as ViewPortReducerState
  );

  return (
    <StoryContainer>
      <div className="flex flex-col space-y-4">
        {getEntries(counts).map(([viewPort, savedCount]) => (
          <ToastProvider key={viewPort} viewPort={viewPort}>
            <Button
              variant="outline"
              onClick={() => {
                dispatch({ viewPort });
              }}
            >
              {viewPort}
            </Button>
            {Array.from({ length: savedCount }).map((_, i) => (
              <Toast key={i}>
                <div className="flex items-center gap-4">
                  <ToastDescription>Here 🖐️</ToastDescription>
                  <ToastClose>Close</ToastClose>
                </div>
              </Toast>
            ))}
          </ToastProvider>
        ))}
      </div>
    </StoryContainer>
  );
}
