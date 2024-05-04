import { Status } from '@interfaces';
import { ResponsiveValue } from '@shopify/restyle';

export function getStatusColor(status: keyof typeof Status):
  | ResponsiveValue<
      'gray3' | 'primaryPurple' | 'red',
      // @ts-ignore
      unknown
    >
  | undefined {
  switch (status) {
    case 'FINISHED':
      return 'gray3';
    case 'CONFIRMED':
      return 'primaryPurple';
    case 'CANCELLED':
      return 'red';
  }
}

export function getStatusBackgroundColor(status: keyof typeof Status):
  | ResponsiveValue<
      'gray1' | 'darkPurple' | 'red',
      // @ts-ignore
      unknown
    >
  | undefined {
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
