export interface LanguageApi {
  "success": boolean,
  "results": [
    {
      "language_code": string;
      "language_name": string;
      "probability": number;
      "percentage": number;
      "reliable_result": boolean;
    }
  ]

}
