import { Voznja } from "./voznja.model";

export class VoznjaService {
    private voznje: Voznja [] = [
        { naziv: 'Voznja 1', polaziste: 'Stark Arena', odrediste: 'Univerzitet Singidunum-Danijelova', stajalista: 'Autokomanda', vremepolaska: '09:45 AM', vremedolaska: '11:00 AM', prevoznik: 'Marko Markovic', putnici: 'Milica Stevic,Jovan Maric', brojmesta: 2, status: 'zavrsena' },
        { naziv: 'Voznja 2', polaziste: 'Hram Svetog Save', odrediste: 'Univerzitet Singidunum-Kumodraska', stajalista: 'Autokomanda-Darvinova posta', vremepolaska: '01:20 PM' , vremedolaska: '01:45 PM', prevoznik: 'Marko Markovic', putnici: 'Jovan Maric', brojmesta: 1, status: 'tekuca' },
        { naziv: 'Voznja 3', polaziste: 'Karadjordjev Park', odrediste: 'Univerzitet Singidunum-Danijelova', stajalista: 'Autokomanda-Darvinova posta', vremepolaska: '10:20 AM' , vremedolaska: '10:50 PM', prevoznik: 'Ana Savic', putnici: 'Zarko Mikic,Jelena Prerovic', brojmesta: 1, status: 'otkazana' },
        { naziv: 'Voznja 4', polaziste: 'Terazije', odrediste: 'Univerzitet Singidunum-Kumodraska', stajalista: 'Trg Slavija-Autokomanda-Darvinova posta', vremepolaska: '12:00 PM' , vremedolaska: '12:30 PM', prevoznik: 'Darko Vukovic', putnici: 'Milica Stevic,Jovan Maric,Pera Peric', brojmesta: 3, status: 'zavrsena' },
    ]

    getVoznje() {
        return this.voznje;
    }
}   
