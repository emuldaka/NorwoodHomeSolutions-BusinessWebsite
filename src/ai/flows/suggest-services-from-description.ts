// src/ai/flows/suggest-services-from-description.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow that suggests handyman services based on a user's description of a task.
 *
 * - suggestServicesFromDescription - An async function that takes a user's description and returns a list of suggested services.
 * - SuggestServicesFromDescriptionInput - The input type for the suggestServicesFromDescription function.
 * - SuggestServicesFromDescriptionOutput - The output type for the suggestServicesFromDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestServicesFromDescriptionInputSchema = z.object({
  taskDescription: z
    .string()
    .describe('A description of the task the user needs help with.'),
  availableServices: z.array(z.string()).describe('A list of available handyman services.'),
});
export type SuggestServicesFromDescriptionInput = z.infer<typeof SuggestServicesFromDescriptionInputSchema>;

const SuggestServicesFromDescriptionOutputSchema = z.object({
  suggestedServices: z
    .array(z.string())
    .describe('A list of suggested services based on the task description.'),
});
export type SuggestServicesFromDescriptionOutput = z.infer<typeof SuggestServicesFromDescriptionOutputSchema>;

export async function suggestServicesFromDescription(
  input: SuggestServicesFromDescriptionInput
): Promise<SuggestServicesFromDescriptionOutput> {
  return suggestServicesFromDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestServicesFromDescriptionPrompt',
  input: {schema: SuggestServicesFromDescriptionInputSchema},
  output: {schema: SuggestServicesFromDescriptionOutputSchema},
  prompt: `You are a helpful assistant that suggests the most appropriate handyman services based on a user's task description.

  The available handyman services are:
  {{#each availableServices}}- {{this}}\n{{/each}}

  Given the following task description:
  """{{taskDescription}}"""

  Suggest the most relevant service or services from the list above. Return the suggested services as a list of strings.
  If none of the services are relevant, return an empty list.
  `,
});

const suggestServicesFromDescriptionFlow = ai.defineFlow(
  {
    name: 'suggestServicesFromDescriptionFlow',
    inputSchema: SuggestServicesFromDescriptionInputSchema,
    outputSchema: SuggestServicesFromDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
