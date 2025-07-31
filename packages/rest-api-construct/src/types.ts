import * as lamb from 'aws-cdk-lib/aws-lambda';

//defines 3 potential sources for Lambda function
export type ExistingDirectory = { path: string };
export type ExistingLambda = { id: string; name: string };

/**
 * Type for creating a new lambda function from source code as a handler for an API path
 * @param code - the source code as a string
 * @param functionName - the name of the new function, must not already exist in directoryToSaveFunctionFilesIn
 * @param [directoryToSaveFunctionFilesIn = "/amplify/functions/"] - where to save new lambda's code folder, defaults to "/amplify/functions/"
 */
export type NewFromCode = {
  code: string;
  functionName: string;
  directoryToSaveFunctionFilesIn?: string;
};

//adds runtime to the source
export type LambdaSource = {
  runtime: lamb.Runtime;
  source: ExistingDirectory | ExistingLambda | NewFromCode;
};

export type RestApiConstructProps = {
  apiName: string;
  apiProps: RestApiPathConfig[];
};

export type RestApiPathConfig = {
  path: string;
  methods: HttpMethod[];
  lambdaEntry: LambdaSource;
};

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS';
