import { useState, useEffect } from 'react';

export interface ClockState {
  timeStr: string;
  dateStr: string;
  isBusinessHours: boolean;
  ampm: string;
}

export function useClock(timeZone: string): ClockState {
  const [state, setState] = useState<ClockState>(() => getClockData(timeZone));

  useEffect(() => {
    const update = () => setState(getClockData(timeZone));
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [timeZone]);

  return state;
}

function getClockData(timeZone: string): ClockState {
  try {
    const now = new Date();

    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    const hourFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: 'numeric',
      hour12: false,
    });

    const parts = timeFormatter.formatToParts(now);
    const hourPart = parts.find((p) => p.type === 'hour')?.value || '12';
    const minPart = parts.find((p) => p.type === 'minute')?.value || '00';
    const secPart = parts.find((p) => p.type === 'second')?.value || '00';
    const ampmPart = parts.find((p) => p.type === 'dayPeriod')?.value || 'AM';

    const hour24 = parseInt(hourFormatter.format(now), 10);
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { timeZone, weekday: 'narrow' }).format(now);
    const isWeekend = dayOfWeek === 'S'; // Sat or Sun
    const isBusinessHours = !isWeekend && hour24 >= 8 && hour24 < 18;

    return {
      timeStr: `${hourPart}:${minPart}:${secPart}`,
      dateStr: dateFormatter.format(now),
      isBusinessHours,
      ampm: ampmPart.toUpperCase(),
    };
  } catch (err) {
    return {
      timeStr: '12:00:00',
      dateStr: 'Mon, Jan 1',
      isBusinessHours: true,
      ampm: 'PM',
    };
  }
}

