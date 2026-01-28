import * as yup from 'yup';

export type InterestsFormValues = {
    interests?: string[];
};

export const interestsSchema: yup.ObjectSchema<InterestsFormValues> = yup.object({
    interests: yup.array().of(yup.string().required()).optional(),
});
