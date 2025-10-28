export type Job = {
    id: string
    applyViaIndeed: string | null;
    address: {
        postCode: string;
        streetAddress: string;
        town: string;
    };
    type: string;
    pay: {
        minPay: number;
        maxPay: number;
    };
    sectors: string[];
    description: string;
    whatYouNeed: string[];
    days: string[];
    shiftTimes: string[];
    applicationEmail: string;
    createdAt: string;
    updatedAt: string;
};
