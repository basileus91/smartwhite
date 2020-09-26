import { BehaviorSubject } from 'rxjs';
export class HeaderLocalizationService {
    public blackHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true); 

    constructor() {}
}