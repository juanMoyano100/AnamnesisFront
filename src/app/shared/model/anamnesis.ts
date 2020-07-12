import { PathologicalPersonalHistory } from './pathological-personal-history';
import { NoPathologicalPersonalHistory } from './no-pathological-personal-history';
import { HousingConditions } from './housing-conditions';
import { PresuntiveDiagnostic } from './presuntive-diagnostic';
import { FamilyHistory } from './family-history';
import { WorkHistory } from './work-history';
import { PatientSymptom } from './patient-symptom';

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

    familyHistoryList:FamilyHistory[]=new Array
    workHistoryList:WorkHistory[]=new Array
    presumptiveDiagnosticList:PresuntiveDiagnostic[]
    patientSymptomList:PatientSymptom[]
}

