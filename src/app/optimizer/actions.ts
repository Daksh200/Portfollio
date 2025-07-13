'use server';

import { optimizePortfolio, OptimizePortfolioInput, OptimizePortfolioOutput } from "@/ai/flows/portfolio-optimizer";

export async function handleOptimize(input: OptimizePortfolioInput): Promise<OptimizePortfolioOutput | null> {
    try {
        const result = await optimizePortfolio(input);
        return result;
    } catch (error) {
        console.error("Error optimizing portfolio:", error);
        return null;
    }
}
