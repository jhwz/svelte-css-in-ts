import "typescript";
const preprocessor = () => {
    // vars is a list of variables that we will append to the end of the script.
    // these can then be injected into the markup onto the elements they apply to.
    let vars = [];
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
