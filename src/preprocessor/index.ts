import * as ts from "typescript";

type Preprocessor = {
  markup?: (input: { content: string; filename: string }) => Promise<{
    code: string;
    dependencies?: Array<string>;
  }>;
  script?: (input: {
    content: string;
    markup: string;
    attributes: Record<string, string>;
    filename: string;
  }) => Promise<{
    code: string;
    dependencies?: Array<string>;
  }>;
  style?: (input: {
    content: string;
    markup: string;
    attributes: Record<string, string>;
    filename: string;
  }) => Promise<{
    code: string;
    dependencies?: Array<string>;
  }>;
};

export type Options = {
  // global is the entry to the main css file that
  // the app CSS imports from.
  // This file is read at the start of the preprocessor and
  // transformed into css classes and variables as needed.
  global: string;
};

type AppendVariable = {
  name: string;
};

const preprocessor: ({}: Options) => Preprocessor = () => {

  // vars is a list of variables that we will append to the end of the script.
  // these can then be injected into the markup onto the elements they apply to.
  let vars: AppendVariable[] = [];

  

  return {
    markup: async ({ content, filename }) => {
      console.log("in markup");

      return {
        code: content,
      };
    },
    style: async ({ attributes, content, filename, markup }) => {
      console.log("in style", attributes);

      const ast = "aa";

      return {
        code: content,
      };
    },
  };
};

export default preprocessor;
