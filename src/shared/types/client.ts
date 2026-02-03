export interface IClient {
    id: string;
    createdAt: string;
    updatedAt: string;

    onboardingStep: ClientOnboardingStep;
    city: string;
}

type ClientOnboardingStep = "BASE" | "INTERESTS" | "DONE";
