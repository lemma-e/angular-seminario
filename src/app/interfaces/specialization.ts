export interface Specialization {
    name: string;
    role: PartyRole;
}

export type PartyRole = 'Tanque' | 'Sanador' | 'DPS';