import { Status } from '@interfaces';
import { ThemeColors } from '@theme';

export function getStatusColor(status: keyof typeof Status): ThemeColors {
  switch (status) {
    case 'FINISHED':
      return 'gray3';
    case 'CONFIRMED':
      return 'purple';
    case 'CANCELLED':
      return 'red';
  }
}

export function getStatusBackgroundColor(
  status: keyof typeof Status,
): ThemeColors | undefined {
  switch (status) {
    case 'FINISHED':
      return 'gray1';
    case 'CONFIRMED':
      return 'darkPurple';
    case 'CANCELLED':
      return 'red';
    default:
      return undefined;
  }
}

export function translateStatus(status: keyof typeof Status): string {
  switch (status) {
    case 'FINISHED':
      return 'Finalizado';
    case 'CONFIRMED':
      return 'Confirmado';
    case 'CANCELLED':
      return 'Cancelado';
  }
}
