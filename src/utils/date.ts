import { BarberShopInfoCard } from '@components';
import { format, toZonedTime } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale/pt-BR';
import { capitalizeFirstLetter } from './capitalize';

const weekDaysOrder: string[] = [
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sábado',
  'domingo',
];

export function sortDaysOfWeek(
  weekDays: BarberShopInfoCard['schedule'],
): BarberShopInfoCard['schedule'] {
  return weekDays.sort((a, b) => {
    return (
      weekDaysOrder.indexOf(a.dayName.toLowerCase()) -
      weekDaysOrder.indexOf(b.dayName.toLowerCase())
    );
  });
}

export function getCurrentDayName(): string {
  const currentDate = new Date();
  const currentDateBrazil = toZonedTime(currentDate, 'America/Sao_Paulo');

  return capitalizeFirstLetter(
    format(currentDateBrazil, 'EEEE', {
      locale: ptBR,
    }),
  );
}

export function getCurrentMonthName(date: Date): string {
  const currentDateBrazil = toZonedTime(date, 'America/Sao_Paulo');

  return capitalizeFirstLetter(
    format(currentDateBrazil, 'MMMM', {
      locale: ptBR,
    }),
  );
}

export function getOnlyDay(date: Date): string {
  const currentDateBrazil = toZonedTime(date, 'America/Sao_Paulo');

  return format(currentDateBrazil, 'dd', {
    locale: ptBR,
  });
}

export function getOnlyHour(date: Date): string {
  return format(date, 'HH:mm', {
    locale: ptBR,
  });
}

export function getCUrrentDate(): string {
  const currentDate = new Date();
  const currentDateBrazil = toZonedTime(currentDate, 'America/Sao_Paulo');

  const monthName = format(currentDateBrazil, 'MMMM', {
    locale: ptBR,
  });

  const capitalizedMonthName = capitalizeFirstLetter(monthName);

  const day = format(currentDateBrazil, 'dd', {
    locale: ptBR,
  });

  return `${day} de ${capitalizedMonthName}`;
}
