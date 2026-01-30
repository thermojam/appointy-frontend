import { http } from '@/shared/api/http';

import { BaseInfoFormValues } from '../schemas/step1.schema';
import { WorkplaceFormValues } from '../schemas/step2.schema';
import { AboutFormValues } from '../schemas/step3.schema';
import { BookingRulesFormValues } from '../schemas/step4.schema';


export type UpdateMasterProfileDto = Partial<
    BaseInfoFormValues &
    WorkplaceFormValues &
    AboutFormValues &
    BookingRulesFormValues
>;

export const updateMasterProfile = (data: UpdateMasterProfileDto) => {
    return http<unknown>('/master', {
        method: 'PUT',
        body: data,
    });
};
