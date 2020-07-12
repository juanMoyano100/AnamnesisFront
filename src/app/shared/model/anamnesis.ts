import { PathologicalPersonalHistory } from './pathological-personal-history';
import { NoPathologicalPersonalHistory } from './no-pathological-personal-history';
import { HousingConditions } from './housing-conditions';
import { Family } from './family';
import { Work } from './work';
import { PresuntiveDiagnostic } from './presuntive-diagnostic';
import { Symptom } from './symptom';

export class Anamnesis {
    id:number;
    reason_consultation:string
    actual_disease:string
    condition_Date:Date
    id_physical_exam:number;
    id_patient:number;
    pathological_personal_history:PathologicalPersonalHistory;
    no_pathological_personal_history:NoPathologicalPersonalHistory
    housing_conditions:HousingConditions
    
    familyHistoryList:Family[]
    workHistoryList:Work[]
    presumptiveDiagnosticList:PresuntiveDiagnostic[]
    patientSymptomList:Symptom[]
}

