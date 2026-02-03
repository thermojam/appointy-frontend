export interface IMaster {
    id: string;
    createdAt: string;
    updatedAt: string;

    address: string;
    shortBio: string;
    longBio: string;
    careerStartYear: string;
    educationBio: string;
    workStyleBio: string;
    workFormats: WorkFormats;
    onboardingStep: MasterOnboardingStep;
    city: string;
}

type WorkFormats = Array<"PLACE" | "VISIT">;

type MasterOnboardingStep = "BASE" | "WORKPLACE" | "ABOUT" | "RULES" | "DONE";
