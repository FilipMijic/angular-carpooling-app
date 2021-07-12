
export interface Voznja {
    naziv: string;
    polaziste: string;
    odrediste: string;
    stajalista: string;
    vremepolaska: string;
    vremedolaska?: string;
    prevoznik: string;
    putnici: string;
    brojmesta: number;
    status: 'zavrsena' | 'tekuca' | 'otkazana';
}