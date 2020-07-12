import { Anamnesis } from './anamnesis';
import { Work } from './work';

export class WorkHistory {
    id:number;
    start_work_date:Date;
    end_work_date:Date;
    anamnesis:Anamnesis;
    work:Work;
}
