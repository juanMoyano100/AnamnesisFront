import { Disease } from './disease';
import { Anamnesis } from './anamnesis';

export class PresuntiveDiagnostic {
    id_diagnostic:number;
    diagnostic:string
    anamnesis:Anamnesis;
    disease:Disease
}
