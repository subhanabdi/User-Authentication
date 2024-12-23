// Utility for simulating API delays
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));