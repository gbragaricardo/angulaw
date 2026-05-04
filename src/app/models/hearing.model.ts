
export type hearingStatus = 'AGENDADA' | 'REALIZADA' | 'CANCELADA';

export interface Hearing {
  id: string;
  lawsuitNumber: string;
  clientName: string;
  dateHour: string;
  local: string;
  status: hearingStatus;
  meetLink?: string;
}