export interface HttpError {
  name: string;
  message: string;
}

export interface StateStub {
  isFetching: boolean;
  hasError: boolean;
  error?: HttpError;
}

export type Presets = 'qa_pl' | 'qa_checkpoint' | 'qa_document' | 'general' | 'alpaca' | 'openai' | 'summarize';
export type ResponsePresets = 'qa_pl' | 'qa_checkpoint' | 'qa_document' | 'summarize';

export interface I_OutletContext {
  routePreset: Presets;
}